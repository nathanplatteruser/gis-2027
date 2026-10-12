# Test report

**This is browser emulation, not real hardware.** Tests ran on one Linux machine using Playwright 1.x browser engines. "Mac Safari" means the WebKit engine with a macOS Safari user agent and window size. "Windows Edge" means the Chromium engine with a Windows Edge user agent and window size. This catches layout and logic breaks, but it is not a substitute for opening the demo on a real Mac or Windows PC.

Date: 2026-10-12. Script: `tests/run.mjs`.

## What each run checks (12 checks)
step1 card visible; step2 source tags and SYNTHETIC labels; step2_source click highlights line; step3 exactly 3 unsupported and 2 superseded; step4_holds exactly 2 holds (EB-204 retired, HC-3 undated); step4_resolved both confirmed; step5 BLOCKED and ESCALATED shown; step5_human decision logged; step6 three watchlist cards; step6_human all three spot-checks logged; closer Colorado 5.A.9 row present; download evidence pack saved and contains ESCALATED, NAIC 3.1, access date, and TREATY_TERRITORY_GAP.

## Results
| Platform (emulated) | Mode | Result | Checks | Errors |
|---|---|---|---|---|
| mac-safari-1440x900 | file | PASS | 12/12 | none |
| mac-safari-1440x900 | server | PASS | 12/12 | none |
| mac-safari-1280x800 | file | PASS | 12/12 | none |
| mac-safari-1280x800 | server | PASS | 12/12 | none |
| win-edge-1920x1080 | file | PASS | 12/12 | none |
| win-edge-1920x1080 | server | PASS | 12/12 | none |
| win-edge-1366x768 | file | PASS | 12/12 | none |
| win-edge-1366x768 | server | PASS | 12/12 | none |
| firefox-1440x900 | file | PASS | 12/12 | none |
| firefox-1440x900 | server | PASS | 12/12 | none |
| mac-safari-1440x900 | pages (GitHub Pages URL) | PASS | 12/12 | none |
| mac-safari-1280x800 | pages (GitHub Pages URL) | PASS | 12/12 | none |
| win-edge-1920x1080 | pages (GitHub Pages URL) | PASS | 12/12 | none |
| win-edge-1366x768 | pages (GitHub Pages URL) | PASS | 12/12 | none |
| firefox-1440x900 | pages (GitHub Pages URL) | PASS | 12/12 | none |

Screenshots per platform: `screenshots/<platform>/step1.png` to `step7.png` (file mode).

## Fixed during testing
- Test selector ambiguity on the Colorado row (test bug, not app bug).
- Download now attaches the link to the page before clicking and cleans up after, for Safari and Firefox reliability.

## Not tested
Real Mac and Windows hardware, real Safari and Edge builds, projectors, managed corporate browsers, screen readers.
