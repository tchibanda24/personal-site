# Personal Site Guidelines & Author Voice Manifest

This repository powers the personal website, technical notebook, and system design artifact library for **Thabani Chibanda** (Lead Engineer & System Architect). 

This document serves as the ground-truth specification for the site's design philosophy, technical voice, system architecture context, and content standards. Any future additions, refactors, or automated AI agent modifications (such as through `aider` or editor LLM integrations) MUST adhere strictly to these guidelines.

---

## 1. Core Architectural & Leadership Philosophy

### 1.1 Architectural Simplicity as a Direct Business Lever
- **Simplicity Drives Unit Economics & Velocity**: Software architecture is not art for its own sake; it is capital allocation. Incidental complexity directly damages the business through bloated cloud invoices, glacial feature delivery, high bug escape rates, and engineer burnout.
- **The Architect of Simplicity**: The primary job is subtraction—deleting redundant services, resisting speculative abstractions, and keeping systems understandable enough that any engineer canReason about them end-to-end.
- **"Slow is Smooth, Smooth is Fast"**: Hype-driven development and frantic thrashing yield fragile systems that halt business momentum. Deliberate, disciplined engineering—grounded in rigorous type constraints, deterministic workflows, and automated tests—is what actually enables long-term speed.

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
- **Clean Layering & Fault Containment (Andrew S. Tanenbaum)**:
  - Pure domain kernel isolated from volatile adapters, third-party SDKs, and transport protocols.
  - Failures in peripheral drivers must never contaminate the core domain.

---

## 2. Fundamental Canon & Influential Literature

The intellectual foundation of this site spans computer science theory, systems architecture, business discipline, and mental models:

### Business, Mental Models & Engineering Craft
- **Poor Charlie's Almanack** — *Charlie Munger* (Mental models, cognitive biases, inversion, and multidisciplinary thinking).
- **Slow Productivity & Deep Work** — *Cal Newport* (Cognitive sustainability, radical prioritization, and deep craft).
- **The Essays of Warren Buffett** — *Warren Buffett & Lawrence Cunningham* (Circle of competence, capital allocation, and business fundamentals).

### Computer Science Foundations & Type Theory
- **Domain Modeling Made Functional** — *Scott Wlaschin* (Functional DDD, type-driven design, algebraic data structures, and typed domain workflows).
- **Introduction to the Theory of Computation** — *Michael Sipser* (Automata, formal languages, reducibility, and computational bounds).
- **Modern Operating Systems** — *Andrew S. Tanenbaum* (Clean abstraction layers, fault containment, concurrency, and modular system design).
- **Compilers: Principles, Techniques, and Tools** — *Aho, Lam, Sethi & Ullman*.
- **Foundations of Computer Science** — *Alfred Aho & Jeffrey Ullman*.
- **CS106B Course Reader: Programming Abstractions in C++** — *Stanford University (Roberts / Cain)*.

### Distributed Systems & Software Architecture
- **The ZeroMQ Guide (ØMQ)** — *Pieter Hintjens* (Distributed messaging topologies, lock-free concurrency, and socket-level protocol design).
- **The Frugal Architect** — *Werner Vogels* (Cost and tail-latency as non-functional constraints).
- **Amazon’s DynamoDB Paper** (*Dynamo: Amazon’s Highly Available Key-value Store*) — *DeCandia et al.* (Eventual consistency, quorum systems, consistent hashing).
- **Fundamentals of Software Architecture** & **Software Architecture: The Hard Parts** — *Neal Ford, Mark Richards, Pramod Sadalage, & Zhamak Dehghani*.
- **Refactoring: Improving the Design of Existing Code** — *Martin Fowler*.

### Method & Philosophy
- **Discourse on the Method** — *René Descartes* (Methodological skepticism, rational reductionism, and building complex truths from simple foundational blocks).
- **Computing Machinery and Intelligence** — *Alan Turing*.

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
| **Core Architecture** | Modular Monoliths, Functional Domain-Driven Design (DDD), Hexagonal Architecture, Functional Core / Imperative Shell (FC/IS), Event-Driven Architecture (EDA), Custom Saga Orchestration, ZeroMQ |
| **Data & Storage** | PostgreSQL, DuckDB, DynamoDB, S3 Parquet Data Lakes, Elasticsearch, OracleDB, Embedded LMDB |
| **Cloud & Runtime** | AWS (EC2, Lambda, S3, DynamoDB, CloudFront, CloudFormation, Fargate, RDS), Docker, Caddy, Systemd, Linux |
| **Web & Frontend** | HTMX, React, Vue.js, Tailwind CSS |
| **Tooling & Environment**| Neovim (Lazy.nvim, pomo.nvim, nvim-notify, aider), Git, GitHub Actions, Linux CLI |

---

## 5. Voice, Tone, and Editorial Writing Rules

### 5.1 Style & Tone
- **Commercially Grounded & Systems-Deep**: Speaks fluently to business leaders about runway, time-to-market, and margin, while articulating low-level type theory and memory safety to seasoned engineers.
- **Champion of Intentional Velocity**: Embraces *"Slow is smooth, smooth is fast."* Never defends reckless code churn as speed.
- **Collaborative Mentor**: Explains architecture as a shared apprenticeship—lifting up teammates through pairing and legible design.
- **Unpretentious & Anti-Hype**: Relies on data, trade-off clarity, and proven outcomes over transient tech trends.

---

## 6. Visual Design & UI System

### 6.1 Navigation & Tabs
- Single static file (`index.html`), zero framework dependencies.
- Navigation divided into three distinct views:
  1. **Overview** (`#overview`): Hero bio, contact/resume actions, featured essay, systems in production (case studies), career track, closing with Descartes.
  2. **Principles** (`#principles`): Architectural & Leadership Manifesto covering all operating principles, closing with Dijkstra.
  3. **Canon & Essays** (`#canon`): Reading canon (computation, systems, business/craft) and 5-point technical/leadership essays, closing with Turing.
- Deep-linking supported via location hash (`#overview`, `#principles`, `#canon`).

### 6.2 Typography & Theme
- Warm paper/stone editorial journal palette.
- High contrast, newsprint-inspired readability.
- Fonts: *Newsreader* (Serif), *Plus Jakarta Sans* (Sans), *JetBrains Mono* (Mono).
