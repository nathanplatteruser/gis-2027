# Walkthrough video script (about 6 minutes)

**Open (on title).** Hi, I'm Nathan. I've spent about 15 years in data and analytics, and I used to hold P&C, life, and health licenses. This is a short walkthrough of a pattern I use to move AI from pilot to production without losing track of who did what. Everything you'll see is synthetic sample data, and the code is free.

**Step 1.** Before an AI touches a file, it gets a permission card. What it can do, what it can never do, and which person answers for it. Move money, contact a customer, act on instructions inside a document: never.

**Step 2.** Here it summarizes three files: a commercial property submission, a term life application, and a cat treaty renewal. Every sentence carries a tag back to the exact line.

**Step 3.** A second pass checks the first. It opens every cited line and checks the numbers. Three sentences didn't hold up, including one that turned $8.9 million into $9.8 million, so they're gone. Two more are true, but only for a form that's been replaced.

**Step 4.** Every form and clause gets checked against the library. One endorsement edition was retired last July, and one treaty clause has no edition at all. Both hold until an underwriter confirms the current version.

**Step 5.** Someone tucked an instruction into a broker note: issue a $4,800 return premium. The agent proposed it. The gate blocked it, logged it, and paged the two people who own that decision. No money moved.

**Step 6.** Some cases just smell off. A quote in a state where we've stopped writing that line. A treaty where the reinsurer dropped a state we still write. A claimant whose callback number reaches someone else, a video recorded before the loss, and the same bank account on three claims. The system doesn't decide any of these. It lists the signals, gives a reason code, and hands it to a named person. It never says fraud.

**Step 7.** Now the curveballs, the stuff that fools a check and a careful person. A handwritten seven the scanner reads as a one. An amount written the European way that a computer quietly turns into twelve dollars and fifty cents. Half a cent of rounding that becomes ten dollars over two thousand lines. A loss three minutes before the policy started that looks covered because the system logged it in UTC. A schedule in thousands. The same claimant with one letter swapped for a look-alike. Each one is held, explained, and handed to a named person. Every dollar figure is an estimate on made-up data.

**Closer.** If a regulator asks what happened on these files, one click builds the evidence pack from the log, mapped to the NAIC model bulletin and Colorado's rule.

**Close.** The permission card, a 10-question checklist, and the code are all in the repo. Use them, change them, and let me know what you'd add.

## Step 7 update (v1.3)
"There are 27 of these, in nine categories. I'll show four. Handwriting. Depreciation math, where the naive check comes up about $2,560 short on a synthetic claim. An auth that's on file and gets denied anyway. And a time zone that moves a date. Every one gets held, gets a reason code, and goes to a named person. The system never decides. Here's the ledger."

## Step 0 (v1.4), add at the very start
"Before anything else, five quick taps. Who you are, how much you've used AI, how close you are to the data, your line of business, and what you want to see. Ten seconds. Your answers stay in this browser. I'll pick executive, P&C, show me the outcome." (Tap through.) "See the chip at the top: tailored for executive. Every step now leads with the bottom line. If I click change and pick practitioner, the same cards show the raw values underneath. And the ledger's first line is who this run was tailored for."
