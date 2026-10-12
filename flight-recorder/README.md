# Flight Recorder

A free, offline walkthrough of a governed AI workflow for insurance. It shows five guardrails on one underwriting-summary agent, then turns the action log into a regulator-ready evidence pack.

**Everything here is fictional sample data.** The "agent" is scripted, so the demo runs the same way every time with no internet, no account, and no model. Swap in any model your company approves. The guardrails are the point, not the model.

## What you'll see (about 12 minutes)
1. **Permission card.** What the agent may do, what it may never do, and who answers for it.
2. **Summaries with sources.** Three files (P&C commercial property, individual life, property cat reinsurance). Every sentence carries a source tag you can click.
3. **Second-pass verifier.** A separate check removes sentences that aren't in the file.
4. **Last year's form.** A retired endorsement edition is caught and held until an underwriter confirms the current one.
5. **Out-of-scope action.** An instruction hidden in a broker note asks the agent to issue a $4,800 return premium. The gate blocks it, logs it, and escalates to named roles.
6. **Closer: the regulator asks.** One click builds an evidence pack from the ledger, mapped to the NAIC AI Model Bulletin and Colorado 3 CCR 702-10.

## Run it
No install needed.

**Mac:** download or clone this folder, then double-click `index.html`. It opens in Safari or Chrome.
**Windows:** download the ZIP (green Code button, Download ZIP), right-click, Extract All, then double-click `index.html`. It opens in Edge or Chrome.

Optional local server (either OS, if your browser blocks downloads from local files):
```
python3 -m http.server 8000      # Mac
py -m http.server 8000           # Windows
```
Then open http://localhost:8000.

Jump straight to a step by adding `#step1` through `#step6` to the address. "Reset demo" starts over.

## Files
- `index.html` the whole demo, one file
- `takehomes/` permission-card template and pilot-to-production checklist
- `docs/run-of-show.md` presenter timing, `docs/video-script.md` short walkthrough script
- `screenshots/` one image per step

## Sources for the regulatory mapping
- NAIC Model Bulletin: Use of Artificial Intelligence Systems by Insurers, adopted Dec 4, 2023. https://content.naic.org/sites/default/files/cmte-h-big-data-artificial-intelligence-wg-ai-model-bulletin.pdf.pdf
- NAIC adoption map. https://content.naic.org/sites/default/files/legal-adoption-map-ai-model-bulletin.pdf
- Colorado 3 CCR 702-10, Regulation 10-1-1, amended effective Oct 15, 2025. https://sos.state.co.us/CCR/GenerateRulePdf.do?fileName=3+CCR+702-10&ruleVersionId=12182

Check each reference against your own state's adopted version. This is a teaching example, not legal advice.

## License
MIT. Copy it, change it, use it at work.
