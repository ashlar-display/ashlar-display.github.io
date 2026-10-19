# Beyond HDMI

Much of Ashlar is not HDMI-specific:

- **EDID and DisplayID** describe displays on every link — DisplayPort, eDP panels, DVI,
  USB-C DisplayPort Alt Mode and USB display adapters. `piaf` and `display-types` serve all
  of them.
- **CTA-861 InfoFrame payloads** — AVI, HDR Static and Dynamic HDR — are carried by
  DisplayPort too, inside its secondary data packets. `cartouche` encodes the payloads.
- **Negotiation** — enumerate, check constraints, rank — has the same shape for any link;
  `concordance`'s built-in constraints are HDMI's today.

The transport crates (`hdmi-hal`, `culvert`, `plumbob`) are HDMI-only by nature: SCDC and FRL
exist only in HDMI. DisplayPort's counterparts — the AUX channel, DPCD registers and its own
link training — would be sister crates built the same way. DisplayPort support is a
direction the stack is designed to grow into.
