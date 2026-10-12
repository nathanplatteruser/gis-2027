# Walkthrough video script (about 4 minutes)

**Open (on title).** Hi, I'm Nathan. I've spent about 15 years in data and analytics, and I used to hold P&C, life, and health licenses. This is a short walkthrough of a pattern I use to move AI from pilot to production without losing track of who did what. Everything you'll see is fictional sample data, and the code is free.

**Step 1.** Before an AI touches a file, it gets a permission card. What it can do, what it can never do, and which person answers for it. Move money, contact a customer, act on instructions inside a document: never.

**Step 2.** Here it summarizes three files: a commercial property submission, a term life application, and a cat treaty renewal. Every sentence carries a tag back to the exact line.

**Step 3.** A second pass checks the first. Three sentences didn't match anything in the file, so they're gone. They read well. They just weren't true for this file.

**Step 4.** This file cites an endorsement edition that was retired last July. The sublimit changed. The summary holds until an underwriter confirms the current edition.

**Step 5.** Someone tucked an instruction into a broker note: issue a $4,800 return premium. The agent proposed it. The gate blocked it, logged it, and paged the two people who own that decision. No money moved.

**Closer.** If a regulator asks what happened on these files, one click builds the evidence pack from the log, mapped to the NAIC model bulletin and Colorado's rule.

**Close.** The permission card, a 10-question checklist, and the code are all in the repo. Use them, change them, and let me know what you'd add.
