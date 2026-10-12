# Walkthrough video script (about 5 minutes)

**Open (on title).** Hi, I'm Nathan. I've spent about 15 years in data and analytics, and I used to hold P&C, life, and health licenses. This is a short walkthrough of a pattern I use to move AI from pilot to production without losing track of who did what. Everything you'll see is synthetic sample data, and the code is free.

**Step 1.** Before an AI touches a file, it gets a permission card. What it can do, what it can never do, and which person answers for it. Move money, contact a customer, act on instructions inside a document: never.

**Step 2.** Here it summarizes three files: a commercial property submission, a term life application, and a cat treaty renewal. Every sentence carries a tag back to the exact line.

**Step 3.** A second pass checks the first. It opens every cited line and checks the numbers. Three sentences didn't hold up, including one that turned $8.9 million into $9.8 million, so they're gone. Two more are true, but only for a form that's been replaced.

**Step 4.** Every form and clause gets checked against the library. One endorsement edition was retired last July, and one treaty clause has no edition at all. Both hold until an underwriter confirms the current version.

**Step 5.** Someone tucked an instruction into a broker note: issue a $4,800 return premium. The agent proposed it. The gate blocked it, logged it, and paged the two people who own that decision. No money moved.

**Step 6.** Some cases just smell off. A quote in a state where we've stopped writing that line. A treaty where the reinsurer dropped a state we still write. A claimant whose callback number reaches someone else, a video recorded before the loss, and the same bank account on three claims. The system doesn't decide any of these. It lists the signals, gives a reason code, and hands it to a named person. It never says fraud.

**Closer.** If a regulator asks what happened on these files, one click builds the evidence pack from the log, mapped to the NAIC model bulletin and Colorado's rule.

**Close.** The permission card, a 10-question checklist, and the code are all in the repo. Use them, change them, and let me know what you'd add.
