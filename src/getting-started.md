# Getting started

Pick the layers you need. Each crate's README has a worked example; this page tells you
which crates to start from.

| You are building…                                                     | Start with                                                                                                                                                         |
|-----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A tool that reads and explains a display's EDID                       | [piaf](https://docs.rs/piaf)                                                                                                                                       |
| Mode selection: "what can I drive on this display?"                   | [piaf](https://docs.rs/piaf) + [concordance](https://docs.rs/concordance)                                                                                          |
| InfoFrame generation or inspection                                    | [cartouche](https://docs.rs/cartouche)                                                                                                                             |
| HDMI 2.1 link bring-up on your own hardware                           | [hdmi-hal](https://docs.rs/hdmi-hal) + [culvert](https://docs.rs/culvert) + [plumbob](https://docs.rs/plumbob)                                                     |
| The same, on an async executor                                        | the `-async` companions of the three above                                                                                                                         |
| TMDS link bring-up: clock ratio, scrambling, the sink's `TMDS_Config` | [spiritlevel](https://docs.rs/spiritlevel), with culvert for SCDC; on an async executor, [spiritlevel-async](https://docs.rs/spiritlevel-async) with culvert-async |
| Experiments against a real sink from Linux userspace                  | [hdmi-hal-i2c-dev](https://docs.rs/hdmi-hal-i2c-dev) under culvert and plumbob                                                                                     |
| Tests of code over hdmi-hal's traits, against a simulated sink        | [maquette](https://docs.rs/maquette), as a dev-dependency                                                                                                          |

Add crates individually:

```sh
cargo add piaf concordance
```

or through the facade, one feature per crate:

```sh
cargo add ashlar --features piaf,concordance
```

For `no_std` targets, disable default features; each crate's README lists what remains
available with `alloc` and without it.

## Supported Rust versions

Every crate in the stack builds on Rust 1.85 or newer (`rust-version` in each
`Cargo.toml`), and CI checks every crate on that version. 1.85 is the first release with
edition 2024, and the floor stays there for as long as it can: HAL and `no_std` users often
build with distro or vendor toolchains that trail stable.

When the minimum version is raised:

- **There is a reason**: a stable language or library feature the code needs, or a
  dependency that needs a newer Rust. A new stable release on its own is not one.
- **The new minimum is a Rust release at least six months old.**
- **It ships in a minor release** (the next `0.y` before 1.0), never in a patch release.
- **Every crate raises together**, so a project using several crates has one toolchain
  floor.
- **The changelog says so**, naming the old and new minimum and the reason.

A raise does not break your build on an older toolchain. Cargo's MSRV-aware resolver
(the default with edition 2024, or `resolver = "3"`) picks the newest release of each
crate that supports your package's `rust-version`, or your toolchain's version when
`rust-version` is not set.

An end-to-end walkthrough — EDID bytes in, a ranked configuration, its InfoFrames and a
link-training plan out — is on its way.
