# Personal Site Guidelines & Author Voice Manifest

This repository powers the personal website, technical notebook, and system design artifact library for **Thabani Chibanda** (Lead Engineer & System Architect). 

This document serves as the ground-truth specification for the site's design philosophy, technical voice, system architecture context, and content standards. Any future additions, refactors, or automated AI agent modifications (such as through `aider` or editor LLM integrations) MUST adhere strictly to these guidelines.

---

## 1. Core Architectural Philosophy & Identity

### 1.1 Functional System Design & Boundary Enforcement
- **OCaml & Type-Driven Correctness**: Treat OCaml not just as a preference, but as a superpower for domain modeling. Algebraic Data Types (ADTs), pattern matching, and expressive module systems allow domain invariants and state machines to be enforced at compile-time rather than through fragile runtime checks.
- **Architectural Patterns (DDD + Hexagonal + FC/IS + EDA)**:
  - **Domain-Driven Design (DDD)**: Explicit bounded contexts and rich, type-safe domain entities.
  - **Hexagonal Architecture (Ports & Adapters)**: Strict decoupling of core business domain logic from infrastructure, databases, and I/O drivers.
  - **Functional Core, Imperative Shell (FC/IS)**: Pure, side-effect-free domain calculation cores wrapped in thin, imperative I/O shells at the application boundary.
  - **Event-Driven Architecture (EDA)**: Asynchronous event streams and Saga orchestrations for resilient, loosely coupled state synchronization across boundaries.

### 1.2 The "Frugal Architect" Mindset
- Heavily shaped by Amazon engineering principles (specifically *The Frugal Architect* framework).
- **Cost & Latency as Core Metrics**: Every architectural choice has a price tag and a tail-latency footprint. Optimize in-process execution before paying the cloud tax for microservice sprawl or managed cluster daemons.
- **In-Process Performance over Distributed Bloat**: Prefer vertical scaling, local embedded storage, and single-process modular monoliths until multi-node distribution is proven necessary. Zero-copy analytical queries (DuckDB + S3 Parquet) and localized caching win over heavy cloud data warehouse spend.

### 1.3 Rationalism & First-Principles Philosophy
- Influenced by **René Descartes** (*Discourse on the Method*) and epistemological skepticism: question inherited software dogmas, strip abstractions down to foundational truths, and rebuild systems step-by-step from undeniable first principles.
- Anchored in **Alan Turing’s** builder mindset: *"We can only see a short distance ahead, but we can see plenty there that needs to be done."* Formal correctness, type systems, and low-latency optimization are tools to enable continuous, reliable building—never excuses for premature optimization or academic isolation.

---

## 2. Fundamental Canon & Influential Literature

The technical mind and system philosophy driving this site are heavily shaped by a curated core library spanning theoretical computer science, operating systems, software architecture, and rationalist philosophy:

### Computer Science Foundations & Low-Level Mechanics
- **Introduction to the Theory of Computation** — *Michael Sipser* (Automata, formal languages, reducibility, and computational complexity).
- **Foundations of Computer Science** — *Alfred Aho & Jeffrey Ullman*.
- **CS106B Course Reader: Programming Abstractions in C++** — *Stanford University (Eric Roberts / Jerry Cain)* (Fundamental abstraction boundaries, pointer mechanics, and algorithmic problem solving).
- **Compilers: Principles, Techniques, and Tools (The Dragon Book)** — *Alfred Aho, Monica Lam, Ravi Sethi, & Jeffrey Ullman* (Lexing, parsing, and code generation mechanics).
- **Modern Operating Systems** — *Andrew S. Tanenbaum* (Kernel design, memory management, process concurrency, and I/O subsystems).

### Distributed Systems & System Architecture
- **The ZeroMQ Guide (ØMQ)** — *Pieter Hintjens* (Distributed messaging topologies, lock-free concurrency, and socket-level protocol design).
- **Amazon’s DynamoDB Paper** (*Dynamo: Amazon’s Highly Available Key-value Store*) — *DeCandia et al.* (Eventual consistency, quorum systems, consistent hashing, and high-availability trade-offs).
- **Fundamentals of Software Architecture** & **Software Architecture: The Hard Parts** — *Neal Ford, Mark Richards, Pramod Sadalage, & Zhamak Dehghani* (Trade-off analysis, modularity, dynamic coupling, and architectural governance).
- **Refactoring: Improving the Design of Existing Code** — *Martin Fowler* (Code smells, disciplined structural transformations, and evolutionary design).

### Philosophical Foundation
- **Discourse on the Method** — *René Descartes* (Methodological skepticism, rational reductionism, and constructing complex truths from simple foundational blocks).

---

## 3. Flagship Platform Context: pahukama.com

- **pahukama.com** is the core production sandbox and real-world system architecture venture.
- **Key System Characteristics**:
  - Domain-Driven Design (DDD) modular monolith backend compiled natively in OCaml.
  - Asynchronous event-driven architecture utilizing a custom Saga orchestration engine for distributed consistency and compensations.
  - Server-side rendered (SSR) reactive frontend via HTMX, enforcing strict server-side transaction idempotency.
  - Cost-optimized analytical pipeline using Amazon S3 Parquet data lakes queried directly via embedded DuckDB.

---

## 4. Technical Stack Summary

| Domain | Technologies & Systems |
| :--- | :--- |
| **Languages** | OCaml (Primary Domain/Functional), Java, Scala, Python, TypeScript, JavaScript |
| **Core Architecture** | Modular Monoliths, Domain-Driven Design (DDD), Hexagonal Architecture, Functional Core / Imperative Shell (FC/IS), Event-Driven Architecture (EDA), Custom Saga Orchestration, ZeroMQ |
| **Data & Storage** | PostgreSQL, DuckDB, DynamoDB, S3 Parquet Data Lakes, Elasticsearch, OracleDB, Embedded LMDB |
| **Cloud & Runtime** | AWS (EC2, Lambda, S3, DynamoDB, CloudFront, CloudFormation, Fargate, RDS), Docker, Caddy, Systemd, Linux |
| **Web & Frontend** | HTMX, React, Vue.js, Tailwind CSS |
| **Tooling & Environment**| Neovim (Lazy.nvim, pomo.nvim, nvim-notify, aider), Git, GitHub Actions, Linux CLI |

---

## 5. Voice, Tone, and Editorial Writing Rules

### 5.1 Style & Tone
- **Thoughtful, Grounded, & Deeply Systems-Focused**: Writes like a senior practitioner reflecting in an engineering journal or technical essay—calm, confident, and direct.
- **Analytic & Philosophical**: Blends distributed systems engineering with Cartesian reductionism and a pragmatic, socio-technical perspective.
- **Unpretentious**: No self-aggrandizing hype, growth-hacking jargon, or generic tech buzzwords (*"rockstar"*, *"ninja"*, *"passionate visionary"*).

### 5.2 Prose Standards
- **Use Precise Terminology**: Name specific architectural patterns and concepts rather than hand-waving (*"bounded contexts"*, *"algebraic data types"*, *"saga compensations"*, *"ports and adapters"*, *"server-side idempotency"*, *"zero-copy Parquet queries"*, *"tail-latency compression"*).
- **Acknowledge Trade-Offs**: Every technical essay or case study must articulate *why* a choice was made and what was sacrificed (e.g., OCaml gives compile-time safety and lightweight memory footprints, but requires building custom infrastructure bindings).
- **First-Person Authenticity**: Write in concise, direct first-person (`I`, `we`) or clear declarative statements.

---

## 6. Visual Design & UI System

### 6.1 Typography & Theme
- **Theme Concept**: Warm paper/stone editorial journal. Quiet, readable, high contrast without harsh pure-black backgrounds.
- **Palette**:
  - Background (Light): `#fcfaf6` (Stone 50)
  - Background (Dark): `#1a1816` (Stone 900)
  - Text Primary: `#2c2825` (Stone 800) / `#fcfaf6` (Stone 50)
  - Accent Color: Muted forest sage (`#2b5b46` / `#8ebf9f`)
- **Font Stack**:
  - **Headings & Quotes**: *Newsreader* or *Georgia* (Editorial Serif)
  - **Body Copy**: *Plus Jakarta Sans* or clean system sans-serif
  - **Code & Metadata**: *JetBrains Mono* or system monospace

### 6.2 Explicit Banned Tropes
- **No Cyberpunk/Neon Aesthetics**: Avoid glowing green terminal windows, matrix rain, floating canvas particle scripts, or gimmicky retro console animations.
- **No Heavy Framework Noise**: Keep pages static, fast-loading, and zero-dependency where possible. Standard single-file static HTML/Tailwind CDN or minimal SSG deployments (GitHub Pages/Vercel) are preferred.

---

## 7. Agent & Contributor Checklist

When generating new content, refactoring layout sections, or drafting architectural field notes:

1. [ ] **Does it ground theory in production reality?** Reference concrete systems (like OCaml, DuckDB, S3, or AWS) rather than abstract pseudoscience.
2. [ ] **Does it honor the canon?** Reflect principles from foundational texts (Sipser, Tanenbaum, Fowler, Hintjens, Ford & Richards, or Descartes).
3. [ ] **Does it present trade-offs clearly?** Ensure every architectural opinion evaluates friction, cognitive load, cloud cost (Frugal Architect), and operational overhead.
4. [ ] **Is the layout uncluttered?** Preserve generous whitespace, readable line lengths (~65-75 characters), and clear typographic hierarchy.
5. [ ] **Is it free of hype?** Let technical execution and clear reasoning speak for themselves.
