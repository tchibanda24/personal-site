// ----- Theme Management -----
function updateThemeLabel() {
  const dark = document.documentElement.classList.contains('dark');
  const text = dark ? 'Light' : 'Dark';
  const label = document.getElementById('themeLabel');
  if (label) label.textContent = text;
  const mobileLabel = document.getElementById('themeLabelMobile');
  if (mobileLabel) mobileLabel.textContent = text;
}

function toggleTheme() {
  const html = document.documentElement;
  const dark = html.classList.contains('dark');
  html.classList.toggle('dark', !dark);
  html.classList.toggle('light', dark);
  try {
    localStorage.setItem('theme', dark ? 'light' : 'dark');
  } catch (e) {}
  updateThemeLabel();
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  let stored = null;
  try {
    stored = localStorage.getItem('theme');
  } catch (err) {}
  if (stored) return;
  document.documentElement.classList.toggle('dark', e.matches);
  document.documentElement.classList.toggle('light', !e.matches);
  updateThemeLabel();
});

// ----- Navigation Active State Management -----
function highlightActiveNav() {
  const path = window.location.pathname.toLowerCase();
  let current = 'overview';

  if (path.endsWith('principles.html') || path.endsWith('principles')) {
    current = 'principles';
  } else if (path.endsWith('essays.html') || path.endsWith('essays')) {
    current = 'essays';
  } else if (path.endsWith('canon.html') || path.endsWith('canon')) {
    current = 'canon';
  }

  ['overview', 'principles', 'essays', 'canon'].forEach((key) => {
    const el = document.getElementById('nav-' + key);
    if (el) {
      el.classList.toggle('nav-active', key === current);
      if (key === current) {
        el.setAttribute('aria-current', 'page');
      } else {
        el.removeAttribute('aria-current');
      }
    }
  });
}

// ----- Essay Category Filtering (essays.html) -----
function filterEssays(category) {
  const essays = document.querySelectorAll('article[data-category]');
  const buttons = document.querySelectorAll('.filter-btn[data-filter]');
  if (!essays.length) return;

  essays.forEach((article) => {
    const match = category === 'all' || article.getAttribute('data-category') === category;
    article.classList.toggle('hidden', !match);
  });

  buttons.forEach((btn) => {
    const active = btn.getAttribute('data-filter') === category;
    btn.classList.toggle('filter-active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
}

// ----- Copy Email Action -----
async function copyEmail() {
  const email = 'thabani.chibanda@pahukama.com';
  try {
    await navigator.clipboard.writeText(email);
  } catch (e) {
    const temp = document.createElement('textarea');
    temp.value = email;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
  }
  const btnText = document.getElementById('emailText');
  if (btnText) {
    btnText.innerText = 'Copied to clipboard';
    setTimeout(() => {
      btnText.innerText = email;
    }, 2000);
  }
}

// ----- Initialize Page -----
window.addEventListener('DOMContentLoaded', () => {
  updateThemeLabel();
  highlightActiveNav();

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
