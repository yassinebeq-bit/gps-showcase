# Design QA — bandeau des marques

- Source visual truth: `/workspace/scratch/93895ae53523/generated_images/exec-a3a40aa5-828e-4a3e-bee1-81822bc60a14.png`
- Implementation route: `http://terminal.local:4173/`
- Intended viewport: desktop, 1600 × 900 CSS px, device scale factor 1
- State: page d'accueil, bandeau des marques sous le hero
- Build verification: `npm run build` passed
- Browser-rendered implementation screenshot: unavailable
- Browser console errors checked: unavailable because navigation was blocked before page load
- Primary interactions tested: unavailable for the same reason

**Findings**

- [P0] Browser evidence unavailable
  - Evidence: the cloud browser returned `net::ERR_BLOCKED_BY_CLIENT` for `http://terminal.local:4173/` even though the Vite server was running on port 4173.
  - Impact: the required same-viewport visual comparison cannot be completed.
  - Fix: reopen the managed preview in a browser session that permits `terminal.local`, then capture desktop and mobile views.

**Required fidelity surfaces**

- Fonts and typography: code implementation follows the existing GPS type system; browser comparison blocked.
- Spacing and layout rhythm: responsive 2/3/7-column grid implemented; browser comparison blocked.
- Colors and visual tokens: original logo assets retained on neutral light cards; browser comparison blocked.
- Image quality and asset fidelity: official vector or supplied official assets used, including Opticon; browser comparison blocked.
- Copy and content: Avery Dennison appears first; seven brands and the independence disclaimer are present.

**Full-view comparison evidence**

- Source opened and identified; implementation capture unavailable.

**Focused region comparison evidence**

- Not available because the implementation screenshot could not be captured.

**Comparison history**

- Initial attempt: local preview started successfully; cloud-browser navigation blocked before rendering.
- Recovery attempt: Vite was restarted with a safe network-interface shim and confirmed ready on port 4173; cloud-browser navigation remained blocked.

**Implementation Checklist**

- Capture the banner at desktop and mobile breakpoints when local preview access is restored.
- Confirm logo optical sizes and the seven-column rhythm.
- Confirm the legal disclaimer remains readable on mobile.

final result: blocked
