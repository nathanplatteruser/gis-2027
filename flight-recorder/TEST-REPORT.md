# Test report (v1.2)

**This is browser emulation, not real hardware.** Tests ran on one Linux machine using Playwright browser engines. "Mac Safari" means the WebKit engine with a macOS Safari user agent and window size. "Windows Edge" means the Chromium engine with a Windows Edge user agent and window size. Firefox is the Gecko engine. This catches layout and logic breaks; it does not replace opening the demo on a real Mac or Windows PC.

Date: 2026-10-12. Script: `tests/run.mjs`.

## What each run checks (14 checks)
step1 card; step2 source tags and SYNTHETIC labels; step2_source click highlights the line; step3 exactly 3 unsupported and 2 superseded; step4_holds 2 holds (EB-204 retired, HC-3 undated); step4_resolved; step5 BLOCKED and ESCALATED; step5_human; step6 three watchlist cards; step6_human three spot-checks logged; step7 nine curveball cards, PRECISION_DRIFT held and $10.00 drift shown; step7_human nine spot-checks; closer reached with the right-arrow key and Colorado 5.A.9 row present; download evidence pack saved and contains ESCALATED, NAIC 3.1, the access date, TREATY_TERRITORY_GAP and HOMOGLYPH_DUPLICATE.

## Results
| Platform (emulated) | Mode | Result | Checks | Errors |
|---|---|---|---|---|
| mac-safari-1440x900 | file | PASS | 14/14 | none |
| mac-safari-1440x900 | server | PASS | 14/14 | none |
| mac-safari-1280x800 | file | PASS | 14/14 | none |
| mac-safari-1280x800 | server | PASS | 14/14 | none |
| win-edge-1920x1080 | file | PASS | 14/14 | none |
| win-edge-1920x1080 | server | PASS | 14/14 | none |
| win-edge-1366x768 | file | PASS | 14/14 | none |
| win-edge-1366x768 | server | PASS | 14/14 | none |
| firefox-1440x900 | file | PASS | 14/14 | none |
| firefox-1440x900 | server | PASS | 14/14 | none |
| firefox-1366x768 | file | PASS | 14/14 | none |
| firefox-1366x768 | server | PASS | 14/14 | none |
| mac-safari-1440x900 | pages (GitHub Pages URL) | PASS | 14/14 | none |
| mac-safari-1280x800 | pages (GitHub Pages URL) | PASS | 14/14 | none |
| win-edge-1920x1080 | pages (GitHub Pages URL) | PASS | 14/14 | none |
| win-edge-1366x768 | pages (GitHub Pages URL) | PASS | 14/14 | none |
| firefox-1440x900 | pages (GitHub Pages URL) | PASS | 14/14 | none |
| firefox-1366x768 | pages (GitHub Pages URL) | PASS | 14/14 | none |

Screenshots per platform: `screenshots/<platform>/step1.png` to `step8.png` (file mode).

## Fixed during testing
- v1.1: test selector ambiguity (test bug); download link now attached to the page before clicking.
- v1.2: rounding example produced $0.00 drift (bad sample math), fixed to $0.125 x 2,000 lines; plain "12500.00" was rejected by the strict parser, fixed; "1.2E4" did not equal 12,500, changed to "1.25E4"; ledger now scrolls inside its panel so long runs stay readable.

## Not tested
Real Mac and Windows hardware, real Safari and Edge builds, projectors, managed corporate browsers, screen readers. Handwriting font varies by machine.
