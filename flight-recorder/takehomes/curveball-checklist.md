# Curveball checklist: nine things that fool a QC check and a careful reviewer

Run these against any AI-assisted workflow before you trust it. Each one is in the Flight Recorder demo on synthetic data.

| # | Ask | Guardrail |
|---|---|---|
| 1 | Does any handwriting or scanned edit feed a number? | Hold when OCR confidence is low or the read disagrees with a typed field. A person reads the original. |
| 2 | Are amounts or IDs ever stored as text? | Parse with the source's format (1,234.56 vs 1.234,56; 1.25E4; spaces). Keep policy numbers as text so leading zeros survive. |
| 3 | Do two systems round differently? | Reconcile in exact cents and flag any total gap, even a few dollars. |
| 4 | Can search pull last year's notice, form, or bulletin? | Check effective dates and version lineage, not just the search rank. |
| 5 | What time zone is the loss time in? | Convert to the time basis the policy states before comparing to inception or expiry. |
| 6 | Does a schedule say "in thousands"? | Read units from headers and footers before any math. |
| 7 | Could two names be the same person with a look-alike character? | Normalize names (Unicode confusables, nicknames) before duplicate checks. |
| 8 | Is 03/04 March or April? | Know the source locale; hold when both readings change the answer. |
| 9 | Was the producer licensed and appointed on the bind date? | Check the license record by date, not the "active" flag. |

Every hold gets a reason code, a ledger entry, and a named person. The system flags; a person decides.
Reference: NAIC AI Model Bulletin, Sec. 3 AIS Program Guidelines 3.2 and 3.4 (accessed 2026-10-12): https://content.naic.org/sites/default/files/cmte-h-big-data-artificial-intelligence-wg-ai-model-bulletin.pdf.pdf
