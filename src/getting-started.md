# Getting started

Pick the layers you need. Each crate's README has a worked example; this page tells you
which crates to start from.

| You are building…                                         | Start with                                                                              |
|-----------------------------------------------------------|-----------------------------------------------------------------------------------------|
| A tool that reads and explains a display's EDID           | [piaf](https://docs.rs/piaf)                                                            |
| Mode selection: "what can I drive on this display?"       | [piaf](https://docs.rs/piaf) + [concordance](https://docs.rs/concordance)               |
| InfoFrame generation or inspection                        | [cartouche](https://docs.rs/cartouche)                                                  |
| HDMI 2.1 link bring-up on your own hardware               | [hdmi-hal](https://docs.rs/hdmi-hal) + [culvert](https://docs.rs/culvert) + [plumbob](https://docs.rs/plumbob) |
| The same, on an async executor                            | the `-async` companions of the three above                                              |
| Experiments against a real sink from Linux userspace      | [hdmi-hal-i2c-dev](https://docs.rs/hdmi-hal-i2c-dev) under culvert and plumbob          |

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

An end-to-end walkthrough — EDID bytes in, a ranked configuration, its InfoFrames and a
link-training plan out — is on its way.
