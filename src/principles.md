# Principles

- **Policy at the right layer.** Parsing layers make no judgements. The negotiation layer is
  explicitly opinionated but configurable. Hardware layers implement specification, not policy.
- **Modular: pick, combine, replace.** Every layer can be used on its own, combined with
  the others, or replaced by an implementation of the trait the layer above defines
- **Extensible without forking.** Every library in the stack is designed to be customized
  and configured without modifying its source.
- **Diagnostics are first-class.** Structured reasoning traces and typed warnings instead of
  logs. Rejected candidates are explained; nothing fails silently.
- **`no_std` where it matters**, async companions where they help.
- **Hardware behind traits.** SCDC transport and PHY control are injected, so all protocol
  logic is testable without hardware.
- **No unsafe code.** `#![forbid(unsafe_code)]` across the stack.
- **Stable output types.** Consumer-facing structs are `#[non_exhaustive]`, so new fields do
  not break you.
- **Verifiable releases.** Trusted publishing, with SLSA provenance you can check with
  `gh attestation verify`.
