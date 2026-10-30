# Personal Site Guidelines & Author Voice Manifest

This repository powers the personal website, technical notebook, essay collection, and system design artifact library for **Thabani Chibanda** (Lead Engineer & Principal System Architect).

This document serves as the ground-truth specification for the site's design philosophy, technical voice, literary sensibilities, system architecture context, and content standards. Any future additions, refactors, or automated AI agent modifications (such as through `aider` or editor LLM integrations) MUST adhere strictly to these guidelines.

---

## 1. Core Architectural & Leadership Philosophy

### 1.1 Architectural Simplicity as a Direct Business Lever
- **Simplicity Drives Unit Economics & Velocity**: Software architecture is not art for its own sake; it is capital allocation. Incidental complexity directly damages the business through bloated cloud invoices, glacial feature delivery, high bug escape rates, and engineer burnout.
- **The Architect of Simplicity**: The primary job is subtraction—deleting redundant services, resisting speculative abstractions, and keeping systems understandable enough that any engineer can reason about them end-to-end.
- **"Slow is Smooth, Smooth is Fast"**: Hype-driven development and frantic thrashing yield fragile systems that halt business momentum. Deliberate, disciplined engineering (grounded in rigorous type constraints, deterministic workflows, and automated tests) is what actually enables long-term speed.

### 1.2 Engineering Apprenticeship & Collaborative Leadership
- **Hands-On Mentorship**: Complex systems should not be maintained by siloed "wizards." We cultivate an apprenticeship culture: senior practitioners pair directly with junior and mid-level engineers, walking through compiler errors, domain modeling sessions, and production edge cases.
- **High-Agency Empathy**: Great engineering leadership aligns technical excellence with business outcomes, creating an environment where developers understand the commercial impact of their code.

### 1.3 Rational Mental Models & Frugality (Buffett, Munger, Newport, Vogels)
- **Charlie Munger's Inversion & Mental Models**: *"Invert, always invert."* Design systems by identifying catastrophic operational failures (data loss, race conditions, cascade failures) first, then building architectures that render them structurally impossible.
- **Cal Newport's Slow Productivity**: Focus on fewer high-leverage initiatives, work at a sustainable pace, and obsess over domain quality over performative activity.
- **Werner Vogels' Frugal Architecture**: Measure cost, memory, and tail-latency as first-class constraints tied directly to unit economics.

### 1.4 Functional System Design & Boundary Enforcement
- **OCaml & Type-Driven Correctness**: Enforce domain invariants and state machines at compile-time rather than through fragile runtime checks.
- **Functional Domain-Driven Design (Scott Wlaschin)**:
  - Model business domains as pure algebraic types: product types (`AND`), sum types (`OR`), and constrained values.
  - Ubiquitous language is written directly into executable type signatures.
  - Make illegal business states completely unrepresentable.
- **Trade-Off Analysis & Decision Frameworks (Mark Richards & Neal Ford)**:
  - Grounded in *Fundamentals of Software Architecture* and *Software Architecture: The Hard Parts*: *"Everything in software architecture is a trade-off"* and *"Why is more important than how."*
  - Reject dogmatic "best practices." Evaluate competing architectural characteristics (`-ilities`), static/dynamic coupling, and architectural quanta, documenting explicit sacrifices and falsification triggers in lightweight ADRs.
- **Clean Layering & Fault Containment (Andrew S. Tanenbaum)**:
  - Pure domain kernel isolated from volatile adapters, third-party SDKs, and transport protocols.
  - Failures in peripheral drivers must never contaminate the core domain.
- **Mechanical Sympathy & Raw Realities (Zed A. Shaw, Learn C the Hard Way)**:
  - The "Cartesian dream of C": remember that every high-level abstraction compiles down to memory addresses, stack frames, heap allocations, and CPU cache lines. Never lose touch with the physical machine.

### 1.5 Humanism, Literary Criticism & Form Fitting Medium
- **The Humanist Technologist**: Engineering judgment is sharpened by serious engagement with literature, criticism, and philosophy, rather than isolated inside technical documentation.
- **Form Evolves Rather Than Dies (Wilson, Gioia, Hall)**: Just as verse ceded history, science, and expansive narrative to prose after Romanticism while sharpening into a concentrated lyric medium, specialized engineering tools (like OCaml, C, or embedded SQL engines) should not be judged by mass-market monoculture adoption. A tool or art form does not "die" when it becomes specialized; it matures into the domain it serves best.
- **Hand-Written Craft in the Age of Generated Code**: Reject the *"coding is dead"* cliché. Just as prose absorbed routine exposition from verse without killing poetry, automated code generation absorbs boilerplate while concentrating the real value of hand-written code: domain invariants, mechanical sympathy, and architectural clarity where writing is the act of thinking.
- **Craft Communities & Critical Standards Over Overproduction (Epstein, Gioia, Schreiber)**: When generated output is abundant and cheap, rigorous review and editorial taste become paramount. Echoing Jan Schreiber's observation that *"minds inevitably seek out and feed off other minds... communities emerge, schools form, and thought tends to collect in pools,"* lasting technical and literary work comes from high-conviction craft communities rather than overproduction or popularity contests.

---

## 2. Fundamental Canon & Influential Literature

The intellectual foundation of this site spans computer science theory, systems architecture, business discipline, mental models, and literary criticism across six distinct shelves:

### I · Economics, Frugality & Capital Allocation
- **Poor Charlie's Almanack** — *Charlie Munger* (Mental models, cognitive biases, inversion, and multidisciplinary thinking).
- **The Essays of Warren Buffett** — *Warren Buffett & Lawrence Cunningham* (Circle of competence, owner earnings, capital allocation, and business fundamentals).
- **The Frugal Architect** — *Werner Vogels* (Cost and tail-latency as first-class non-functional requirements; unobserved systems lead to unknown costs).
- **Slow Productivity & Deep Work** — *Cal Newport* (Cognitive sustainability, radical prioritization, and deep craft).

### II · Distributed Systems, Resilience & Networks
- **The ZeroMQ Guide (ØMQ)** — *Pieter Hintjens* (Distributed messaging topologies, lock-free concurrency, and socket-level protocol design).
- **Dynamo: Amazon’s Highly Available Key-value Store** — *DeCandia et al.* (Eventual consistency, quorum systems, consistent hashing, and partial failure).
- **Sagas** — *Hector Garcia-Molina & Kenneth Salem (1987)* (Long-lived transactions decomposed into steps with explicit backward compensations).

### III · Software Architecture, Modularity & Trade-offs
- **Fundamentals of Software Architecture** — *Mark Richards & Neal Ford* (First & Second Laws of Software Architecture, fitness functions, and trade-off-driven decision frameworks).
- **Software Architecture: The Hard Parts** — *Neal Ford, Mark Richards, Pramod Sadalage, & Zhamak Dehghani* (Architectural quanta, granularity vs. coupling, and modern distributed trade-off analysis).
- **Patterns of Enterprise Application Architecture** — *Martin Fowler* (Service Layer, Domain Model, Data Mapper, and Unit of Work patterns).
- **Modern Operating Systems** — *Andrew S. Tanenbaum* (Clean abstraction layers, fault containment, concurrency, and modular kernel isolation).

### IV · Functional Systems, Types & Reactive State
- **Domain Modeling Made Functional** — *Scott Wlaschin* (Functional DDD, type-driven design, algebraic data structures, and typed domain workflows).
- **Programming Unikernels in the Large via Functor Driven Development (Experience Report)** — *MirageOS / ICFP* (Functor-driven dependency parameterization and modular composition, foundational to Ariadne).
- **Asynchronous Functional Reactive Programming for GUIs** — *Evan Czaplicki & Stephen Chong* (Time-varying signals and deadlock-free asynchronous reactive pipelines, foundational to Ariadne's reactive model).

### V · Mechanical Sympathy, Computation & Compilers
- **Learn C the Hard Way** — *Zed A. Shaw* (The Cartesian dream of linear memory, pointer mechanics, stack/heap layouts, and mechanical sympathy).
- **Introduction to the Theory of Computation** — *Michael Sipser* (Automata, formal languages, decidability, and computational bounds).
- **Discourse on the Method** — *René Descartes* (Methodological skepticism, rational reductionism, and building complex systems from clear, verified parts).
- **Computing Machinery and Intelligence** — *Alan Turing* (Computability, formal inquiry, and intellectual humility).
- **Compilers: Principles, Techniques, and Tools** — *Aho, Lam, Sethi & Ullman* (Lexing, parsing, type checking, and machine code generation).
- **Foundations of Computer Science** — *Alfred Aho & Jeffrey Ullman*.
- **CS106B Course Reader: Programming Abstractions in C++** — *Stanford University (Roberts / Cain)*.

### VI · Poetics, Literary Criticism & Letters
- **Is Verse a Dying Technique?** — *Edmund Wilson* (On how prose absorbed narrative and expository duties once held by verse).
- **Who Killed Poetry?** — *Joseph Epstein* (Critique of academic overproduction and the retreat from common readers).
- **Can Poetry Matter?** — *Dana Gioia* (Poetry as a subculture, critical rigor, and loyalty to the reader).
- **Poetry and the Problem of Standards** — *Jan Schreiber* (Subjectivity in art, retrospective resonance, and how intellectual communities form in pools).
- **Death to the Death of Poetry** — *Donald Hall* (Challenging the premature funeral for poetic vitality).

---

## 3. Flagship Platform Context: pahukama.com

- **pahukama.com** is the core production sandbox and real-world system architecture venture, built on the custom **Ariadne** framework (influenced by *Functor Driven Development*, Czaplicki & Chong's *Asynchronous FRP for GUIs*, *Patterns of Enterprise Application Architecture*, *The ZeroMQ Guide*, and the *Dynamo* paper).
- **Key System Characteristics**:
  - Domain-Driven Design (DDD) modular monolith backend compiled natively in OCaml via **Ariadne**.
  - Asynchronous event-driven architecture utilizing a custom Saga orchestration engine for distributed consistency and compensations.
  - Server-side rendered (SSR) reactive frontend via HTMX, enforcing strict server-side transaction idempotency.
  - Cost-optimized analytical pipeline using Amazon S3 Parquet data lakes queried directly via embedded DuckDB, paired with native in-process real-time telemetry ring buffers for instant observability without external APM services.
  - Scaled to 1,000+ accounts and 500+ processed transactions in year one with a mentored team of 3 engineers.

---

## 4. Technical Stack Summary

| Domain | Technologies & Systems |
| :--- | :--- |
| **Languages** | OCaml (Primary Domain/Functional), C, Java, Scala, Python, TypeScript, JavaScript |
| **Core Architecture** | Modular Monoliths, Functional Domain-Driven Design (DDD), Hexagonal Architecture, Functional Core / Imperative Shell (FC/IS), Event-Driven Architecture (EDA), Custom Saga Orchestration, ZeroMQ |
| **Data & Storage** | PostgreSQL, DuckDB, DynamoDB, S3 Parquet Data Lakes, Elasticsearch, OracleDB, Embedded LMDB |
| **Cloud & Runtime** | AWS (EC2, Lambda, S3, DynamoDB, CloudFront, CloudFormation, Fargate, RDS), Docker, Caddy, Systemd, Linux |
| **Web & Frontend** | HTMX, React, Vue.js, Tailwind CSS |
| **Tooling & Environment**| Neovim (Lazy.nvim, pomo.nvim, nvim-notify, aider), Git, GitHub Actions, Linux CLI |

---

## 5. Voice, Tone, and Editorial Writing Rules

### 5.1 Style & Tone
- **Commercially Grounded & Systems-Deep**: Speaks fluently to business leaders about runway, time-to-market, and margin, while articulating low-level type theory and memory safety to seasoned engineers.
- **Literary & Essayistic**: Comfortable moving between distributed systems trade-offs and literary criticism without affectation. Quotes primary texts faithfully, uses concrete nouns and active verbs, and resists buzzwords.
- **Champion of Intentional Velocity**: Embraces *"Slow is smooth, smooth is fast."* Never defends reckless code churn as speed.
- **Collaborative Mentor**: Explains architecture as a shared apprenticeship, lifting up teammates through pairing and legible design.
- **Unpretentious & Anti-Hype**: Relies on data, trade-off clarity, and proven outcomes over transient tech trends.
- **The Grounded Technologist**: While grounded in deep literary criticism and philosophy, the site always retains its identity as a working system architect's notebook. Ground the humanist essays with real code signatures (e.g. OCaml functors, zero-copy DuckDB Parquet queries), engineering telemetry, and explicit latency/cost numbers so that technical depth remains immediate.

### 5.2 Formatting & HTML Markup Hygiene
- Never leave raw Markdown backticks (`` `code` ``) inside HTML prose; always wrap inline symbols and identifiers in `<code>...</code>` tags.
- Avoid stuffing exhaustive lists of books or papers inside prose paragraphs; weave architectural lineage selectively into case studies and principles, and use structured synthesis grids or lightweight ADR callouts so the narrative stays crisp and scannable.
- Keep prose columns to an editorial reading measure (`~65ch`) with generous line-height (`1.78`).
- Use proper typographic quotation marks and blockquotes (`.editorial-quote`) for extended citations. Avoid em dashes (`—`) in prose; prefer commas, colons, semicolons, or parentheses for a cleaner editorial cadence.

---

## 6. Visual Design & Architecture

### 6.1 Multi-Page Frameworkless Structure
- Pure static HTML with zero build steps or runtime framework overhead, directly compatible with GitHub Pages:
  1. **Overview** (`index.html`): Hero bio, contact/resume actions, featured reflection, selected writing links, systems in production (case studies), career track, closing with Descartes.
  2. **Principles** (`principles.html`): Architectural & Leadership Manifesto covering Operating Principles I–XII with quick navigation, closing with Dijkstra.
  3. **Essays** (`essays.html`): Long-form technical and literary notebook bridging systems economics, domain architecture, and literary criticism (including *"Can Poetry Matter? (Is Coding Dead?)"*), with progressive-enhancement category filtering.
  4. **Canon** (`canon.html`): Synthesis map and annotated reading canon across Economics & Frugality, Distributed Systems & Resilience, Software Architecture & Modularity, Functional Systems & Types, Mechanical Sympathy & Computation, and Poetics & Criticism, closing with Turing.
- Standard HTML hyperlinks with clean active-state styling and lightweight progressive enhancement via `js/app.js`.

### 6.2 Typography & Theme
- Warm paper/stone editorial journal palette (`#fcfaf6` / `#171614` with `#24543f` sage and `#943f24` terracotta accents).
- High contrast, newsprint-inspired readability.
- Fonts: *Newsreader* (Serif), *Plus Jakarta Sans* (Sans), *JetBrains Mono* (Mono).
