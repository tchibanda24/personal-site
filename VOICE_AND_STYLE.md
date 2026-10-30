# Personal Site Guidelines & Author Voice Manifest

This repository powers the personal site and technical notebook for **Thabani Chibanda** (Lead Engineer & System Architect). 

This document serves as the ground-truth specification for the site's typography, design aesthetics, technical voice, and core architectural philosophy. Any future additions, edits, or automated agent modifications MUST adhere strictly to these principles.

---

## 1. Core Architectural Philosophy & Identity

- **Pragmatic First-Principles Engineering**: Prioritize local, lightweight, compile-time type safety and self-contained architectures (Domain-Driven Design, modular monoliths, localized caching, zero-copy analytics) over heavy cloud vendor abstractions and microservice sprawl.
- **Turing's Builder Mindset**: Ground all technical discussions in Alan Turing’s principle: *"We can only see a short distance ahead, but we can see plenty there that needs to be done."* Formal correctness, type safety, and low latency are tools to enable continuous, reliable building—never excuses for premature optimization or academic isolation.
- **Anti-Complexity**: Guard explicitly against "optimization monkey coding." System simplicity, low cognitive load for small teams, and real-world usefulness beat cleverness every time.
- **Flagship Focus**: **pahukama.com** is the primary system design sandbox and real-world production venture (OCaml modular monolith, custom Saga orchestration, HTMX SSR idempotency, DuckDB Parquet data lake). It should remain prominent as the anchor of practical execution.

---

## 2. Voice, Tone, and Style

- **Tone**: Editorial, grounded, intellectual, calm, and unpretentious. Think *thoughtful system designer notebook* or *engineering journal*, not a hype-driven portfolio or generic tech resume.
- **Vocabulary & Specificity**:
  - Use precise distributed systems and type-theory terms (*bounded contexts, domain-driven design, saga compensations, server-side idempotency, zero-copy Parquet queries, tail latency compression, microsecond boot overhead*).
  - Avoid corporate buzzwords (*"passionate problem solver"*, *"ninja"*, *"rockstar"*).
  - Write directly in first-person (`I`, `we`) or concise declarative prose.
- **Design & Layout Principles**:
  - **Typography-First**: Clean sans-serif headings paired with elegant serif/mono body accents (e.g., *Newsreader/Georgia*, *Plus Jakarta Sans*, *JetBrains Mono*).
  - **Color Palette**: Warm stone/paper tones (`#fcfaf6` light mode, soft charcoal dark mode) with muted forest/sage green accents (`#2b5b46`).
  - **No Neon/Cyberpunk**: Avoid flashy developer-portfolio tropes (no floating particle scripts, dark neon glows, or fake terminal windows). Keep it calm, readable, and human.

---

## 3. Background & Context Summary

- **Role**: Lead Engineer & System Architect at **pahukama.com**. Former SDE II at **Amazon (Prime Video)**, Senior Engineer at **thatDot**, and Full-Stack Developer at **Event Dynamic (Tillion)** & **Express Scripts**.
- **Tech Stack Core**: OCaml, Java, Scala, Python, TypeScript, React, HTMX, AWS (S3, DynamoDB, Lambda, EC2), DuckDB
