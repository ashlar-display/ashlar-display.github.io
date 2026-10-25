# Crates

| Crate                                                                  | Layer                | What it does                                                                          | Docs                                                 |
|------------------------------------------------------------------------|----------------------|---------------------------------------------------------------------------------------|------------------------------------------------------|
| [display-types](https://github.com/ashlar-display/display-types)       | Shared types         | Display capability vocabulary shared across the stack                                 | [docs.rs](https://docs.rs/display-types)             |
| [piaf](https://github.com/ashlar-display/piaf)                         | Parsing              | EDID and DisplayID parser                                                             | [docs.rs](https://docs.rs/piaf)                      |
| [concordance](https://github.com/ashlar-display/concordance)           | Negotiation          | HDMI 2.1 mode negotiation with a full reasoning trace                                 | [docs.rs](https://docs.rs/concordance)               |
| [cartouche](https://github.com/ashlar-display/cartouche)               | Signaling            | InfoFrame encoding and decoding (AVI, Audio, HDR Static, HDMI Forum VSI, Dynamic HDR) | [docs.rs](https://docs.rs/cartouche)                 |
| [culvert](https://github.com/ashlar-display/culvert)                   | Signaling            | Typed SCDC register access                                                            | [docs.rs](https://docs.rs/culvert)                   |
| [culvert-async](https://github.com/ashlar-display/culvert-async)       | Signaling            | Async companion to culvert                                                            | [docs.rs](https://docs.rs/culvert-async)             |
| [plumbob](https://github.com/ashlar-display/plumbob)                   | Driver-adjacent      | FRL link training state machine                                                       | [docs.rs](https://docs.rs/plumbob)                   |
| [plumbob-async](https://github.com/ashlar-display/plumbob-async)       | Driver-adjacent      | Async companion to plumbob                                                            | [docs.rs](https://docs.rs/plumbob-async)             |
| [hdmi-hal](https://github.com/ashlar-display/hdmi-hal)                 | Hardware abstraction | `ScdcTransport` and `HdmiPhy` traits                                                  | [docs.rs](https://docs.rs/hdmi-hal)                  |
| [hdmi-hal-async](https://github.com/ashlar-display/hdmi-hal-async)     | Hardware abstraction | Async companion to hdmi-hal                                                           | [docs.rs](https://docs.rs/hdmi-hal-async)            |
| [hdmi-hal-i2c-dev](https://github.com/ashlar-display/hdmi-hal-i2c-dev) | Hardware abstraction | Linux userspace backend over `/dev/i2c-N`, for development and validation             | [docs.rs](https://docs.rs/hdmi-hal-i2c-dev)          |
| [ashlar](https://github.com/ashlar-display/ashlar)                     | —                    | Facade: one feature per crate above, re-exported under its own name                   | [docs.rs](https://docs.rs/ashlar)                    |

Current versions are on [crates.io](https://crates.io/keywords/ashlar); each crate's
`CHANGELOG.md` records what changed in each release.
