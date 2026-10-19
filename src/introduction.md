# Ashlar

**A display connection stack in Rust — HDMI 2.1 first.**

Ashlar takes a display link from raw capability bytes to a trained link: parse what the
sink can do, negotiate the best mode the source, sink and cable can all carry, describe it
in InfoFrames, and bring up the link over SCDC with FRL training. Each layer is its own
crate — use one, or use them all.

An ashlar is a stone dressed to fit its neighbours exactly. The crates are built the same
way: each one is small, does one job completely, and meets the next layer at a typed,
documented boundary.

- [The stack](stack.md) — the layers and what each one is responsible for
- [Crates](crates.md) — every crate, its layer and its status
- [Getting started](getting-started.md) — which crates to add for what you are building
- [Principles](principles.md) — the design rules every crate follows

All crates are open source under the MPL-2.0 and published on
[crates.io](https://crates.io/keywords/ashlar).
