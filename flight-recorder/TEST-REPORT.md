# Test report (v1.4)

**This is browser emulation, not real hardware.** Tests ran on one Linux machine using Playwright browser engines. "Mac Safari" means the WebKit engine with a macOS Safari user agent and window size. "Windows Edge" means the Chromium engine with a Windows Edge user agent and window size. Firefox is the Gecko engine. This catches layout and logic breaks; it does not replace opening the demo on a real Mac or Windows PC.

Date: 2026-10-12. Script: `tests/run.mjs`.

## What each run checks (23 checks)
intake shown with the stays-in-this-browser note; skip logs PROFILE SET as ledger entry #1 and shows the Tailored for chip; step1; step2 source tags and SYNTHETIC labels; step2_source; step3 3 unsupported and 2 superseded; step4_holds; step4_resolved; step5 BLOCKED and ESCALATED; step5_human; step6 three watchlist cards; step6_human; step7 4 presenter picks and PRECISION_DRIFT held; step7_filter Reinsurance shows 4 incl. WH; step7_all 27 cards and the $10.00 drift; step7_human run-all plus 27 spot-checks; closer via right arrow with Colorado 5.A.9; download evidence pack with ESCALATED, NAIC 3.1, the access date, the new reason codes and the audience profile; persona_exec (Executive, P&C, plain: lens, impact summary, details collapsed, no raw values, DP pick, scorecard); persona_mgr (Manager, Reinsurance, technical: workload table, WH pick, no impact summary); persona_prac (Practitioner, Workers' Comp, technical: 4 raw-value blocks, WC pick); change (switch to Executive, Life/Health mid-demo on step 7: LC pick, PROFILE CHANGED logged once after one PROFILE SET); arrows (left arrow from step 1 opens the intake, right arrow resumes, then advances).

## Results
| Platform (emulated) | Mode | Result | Checks | Errors |
|---|---|---|---|---|
| mac-safari-1440x900 | file | PASS | 23/23 | none |
| mac-safari-1440x900 | server | PASS | 23/23 | none |
| mac-safari-1280x800 | file | PASS | 23/23 | none |
| mac-safari-1280x800 | server | PASS | 23/23 | none |
| win-edge-1920x1080 | file | PASS | 23/23 | none |
| win-edge-1920x1080 | server | PASS | 23/23 | none |
| win-edge-1366x768 | file | PASS | 23/23 | none |
| win-edge-1366x768 | server | PASS | 23/23 | none |
| firefox-1440x900 | file | PASS | 23/23 | none |
| firefox-1440x900 | server | PASS | 23/23 | none |
| firefox-1366x768 | file | PASS | 23/23 | none |
| firefox-1366x768 | server | PASS | 23/23 | none |
| mac-safari-1440x900 | pages (GitHub Pages URL) | PASS | 23/23 | none |
| mac-safari-1280x800 | pages (GitHub Pages URL) | PASS | 23/23 | none |
| win-edge-1920x1080 | pages (GitHub Pages URL) | PASS | 23/23 | none |
| win-edge-1366x768 | pages (GitHub Pages URL) | PASS | 23/23 | none |
| firefox-1440x900 | pages (GitHub Pages URL) | PASS | 23/23 | none |
| firefox-1366x768 | pages (GitHub Pages URL) | PASS | 23/23 | none |

Screenshots per platform: `screenshots/<platform>/step1.png` to `step8.png` (file mode).

## Fixed during testing
- v1.1: test selector ambiguity (test bug); download link now attached to the page before clicking.
- v1.2: rounding example produced $0.00 drift (bad sample math), fixed to $0.125 x 2,000 lines; plain "12500.00" was rejected by the strict parser, fixed; "1.2E4" did not equal 12,500, changed to "1.25E4"; ledger now scrolls inside its panel so long runs stay readable.

## Not tested
Real Mac and Windows hardware, real Safari and Edge builds, projectors, managed corporate browsers, screen readers. Handwriting font varies by machine.
