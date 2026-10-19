# Principles

- **Hardware behind traits.** SCDC transport and PHY control are injected, so all protocol
  logic is testable without hardware.
- **Diagnostics are first-class.** Structured reasoning traces and typed warnings instead of
  logs. Rejected candidates are explained; nothing fails silently.
- **Spec-complete, judgment-free lower layers.** Parsing and protocol crates implement the
  spec in full; policy lives in the negotiation layer, and you can override it.
- **`no_std` where it matters**, async companions where they help.
- **No unsafe code.** `#![forbid(unsafe_code)]` across the stack.
- **Stable output types.** Consumer-facing structs are `#[non_exhaustive]`, so new fields do
  not break you.
- **Verifiable releases.** Trusted publishing, with SLSA provenance you can check with
  `gh attestation verify`.
