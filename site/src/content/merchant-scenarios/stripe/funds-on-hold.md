---
title: "Stripe is holding my funds"
vendorSlug: "stripe"
vendorDisplayName: "Stripe"
problemPhrase: "stripe is holding my funds"
summary: "Stripe can hold a portion of your transactions in a Reserve at any time, with broad discretion. Here's what the agreement actually says about how Reserves work and what your options are."

lastVerified: 2026-05-11
lastUpdated: 2026-05-11
status: "current"
tier: 1

sourceUrls:
  - "https://stripe.com/legal/ssa"
  - "https://stripe.com/legal/ssa-services-terms"

sourceFiles:
  - "sources/stripe/stripe_terms-of-service_2026.05.11.txt"
  - "sources/stripe/stripe_service-terms_2026.05.11.txt"

bottomLine: |
  Stripe holds funds for two reasons that look similar but work differently: Reserves (a rolling percentage of incoming transactions, held as collateral) and post-termination holds (covering potential chargebacks after your account closes). Both are governed by Section 3.3 of the Services Terms, which gives Stripe broad unilateral authority. You don't have a contractual right to a Reserve release schedule — only Stripe's commitment to release "if and to the extent" the risk has been mitigated.

keyFacts:
  - label: "What a Reserve is"
    value: "Collateral funds Stripe holds and controls to cover potential liabilities — chargebacks, refunds, fines."
    citation: "Services Terms §3.3 definitions"
  - label: "How Stripe imposes a Reserve"
    value: "Unilaterally, by issuing a Reserve Notice that specifies the percentage and duration. No advance consent required."
    citation: "Services Terms §3.3(a)"
  - label: "Common Reserve percentage"
    value: "10–30% of each transaction processed, held for a set period (typically 90–180 days)."
  - label: "How Stripe funds the Reserve"
    value: "By withholding from current payouts, debiting your linked bank account, or asking you to fund it directly — Stripe's choice."
    citation: "Services Terms §3.3(c)"
  - label: "Your right to interest"
    value: "None. Stripe owns any interest earned on Reserve funds."
    citation: "Services Terms §3.1"
  - label: "Your right to withdraw"
    value: "None. You have no legal or equitable right to draw funds from the Reserve."
    citation: "Services Terms §3.3(a)"
  - label: "Release timing"
    value: "Stripe releases funds 'only if, and to the extent that, Stripe is satisfied that the relevant risk exposure has been mitigated.' No fixed schedule. No appeal process."
    citation: "Services Terms §3.3(a)"
  - label: "Maximum hold (post-termination)"
    value: "Up to 180 days from your most recent transaction, set by card-network rules. Reserves can extend beyond that if separately imposed."

whatToDo:
  - "Open the Reserve Notice in your Stripe Dashboard. It states the percentage, duration, and the stated reason. Save a screenshot — this is the controlling document for your specific Reserve."
  - "Reduce the underlying risk factors Stripe cited. The most common are: chargeback rate above 1%, sudden transaction volume spikes, inconsistent business information, or a recategorization to high-risk. Address each one you can verify."
  - "Plan cash flow around the Reserve, not against it. If Stripe is holding 20% for 90 days, treat that 20% as money you don't have until the period ends. Trying to dispute the Reserve while operating as if the funds are available leads to negative balances, which let Stripe debit your bank account under §7.2."
  - "Request review after 60 days of clean activity. Section 3.3(b) allows Stripe to change Reserve terms based on changed risk. If your chargeback rate is now below 0.5% and transaction volume is stable, you have a basis to request a reduction. Submit in writing through Dashboard support."
  - "If the Reserve was imposed after a suspension or termination, your timeline is different. Post-termination holds run up to 180 days from the most recent transaction. The clock doesn't reset based on when you ask for release. Track the calendar date."

pitfalls:
  - headline: "The Reserve survives termination of your account."
    detail: "Section 10.3 (Survival) lists Section 7 (Fees; Taxes; User Bank Account) and Section 3.4 (Security Interest) among the provisions that survive termination. Closing your account does not release the Reserve. The Reserve is collateral, and Stripe's security interest in it continues until the hold period ends."
  - headline: "A negative balance automatically takes from the Reserve."
    detail: "Section 3.3(d): if your Stripe account balance goes negative for any reason — a chargeback, a refund, a fee adjustment — Stripe automatically takes that amount from the Reserve. The Reserve must then be 'promptly replenished' from your next payouts or your bank account. Negative balances can cascade."
  - headline: "Stripe's security interest extends to all funds, not just the Reserve."
    detail: "Section 3.4 grants Stripe a security interest in all funds owed to you for transactions (including future transactions), all rights to receive credits and payments under the agreement, and the Reserve itself. Stripe is a secured creditor against your account."
  - headline: "Stripe can change Reserve terms while the Reserve is in place."
    detail: "Section 3.3(b) lets Stripe modify the percentage, duration, or terms 'if Stripe believes that there is, or is likely to be, a change in the underlying risk.' A 90-day Reserve can become a 180-day Reserve mid-period. You have no contractual right to advance notice of the change."

whatChanged:
  - date: 2026-05-11
    note: "Initial summary published. Based on Services Agreement modified November 18, 2025."
---

### Reserves vs. holds — they are not the same thing

Merchants often use "hold" and "reserve" interchangeably. The agreement does not.

- A **hold** is the standard delay between a transaction and the payout, governed by the Payout Schedule (Services Terms §5.10). For most US accounts, this is T+2 (two business days). New accounts have an initial holding period of up to seven days while Stripe verifies the business.
- A **Reserve** is collateral. It is created by a Reserve Notice (Services Terms §3.3) and held in a Reserve Account separate from your regular Stripe balance. Reserves are not subject to the Payout Schedule. They release only when Stripe decides the underlying risk has been mitigated.

If your "held funds" question is about T+2 timing, it's a payout-schedule question. If your "held funds" question is about a 10–30% slice of every transaction being withheld for 90+ days, it's a Reserve question. The Reserve is the harder problem.

### What "risk has been mitigated" actually means

Section 3.3(a) is the controlling release language: "Stripe will release to User any funds forming part of the Reserve only if, and to the extent that, Stripe is satisfied that the relevant risk exposure has been mitigated."

This standard is deliberately one-sided. Three observations:

1. **The standard is Stripe's satisfaction, not an objective test.** There is no audit process, no third-party determination, no contractual benchmark. Stripe decides.
2. **"To the extent that" allows partial release.** Stripe can release some funds and continue to hold others. There is no all-or-nothing trigger.
3. **There is no required communication of the standard.** Stripe is not contractually obligated to tell you what would satisfy the test.

In practice, this means a Reserve release is closer to a discretionary decision than a contractual right. The merchant's best leverage is documented improvement in the underlying risk factors — chargeback rate, transaction patterns, business verification, response to information requests — combined with calendar time.

### The security interest you granted

Section 3.4 of the Services Terms grants Stripe a security interest in:

1. All funds owed to you for transactions — including future transactions and funds Stripe holds on your behalf
2. All rights to receive credits and payments under the agreement
3. The Reserve itself, and any beneficial interest in the Reserve Accounts

You consented to this when you accepted the Services Agreement. You also authorized Stripe to file UCC notices if needed to perfect the security interest in your state (Section 3.4 final paragraph).

The practical implication: if you have a dispute with Stripe and the dispute results in money owed to Stripe, Stripe is a secured creditor against all your transactions, not just the Reserve. This is structurally similar to a bank's security interest in deposit accounts — except it covers future receivables as well as current balances.

### When the Reserve outlasts the relationship

Section 10.3 (Survival) lists which provisions survive termination of the agreement. The Reserve provisions (Services Terms §3.3 and §3.4) are not explicitly listed in §10.3 of the General Terms, but they are referenced in the surviving Section 7 (Fees; Taxes; User Bank Account) and the surviving Section 3.4 security interest. The practical result is the same: closing your account does not release a Reserve. The Reserve continues to be held until the 180-day post-termination period elapses or Stripe affirmatively releases it.

If you're closing your Stripe account, plan operationally for a 6-month wait on Reserve funds even after the closure date.

### Sources

This summary is based on the Stripe Services Agreement Services Terms (Sections 3.1, 3.3, 3.4, 7.2, 10.3) as published at the URLs in the frontmatter, captured 2026-05-11. The agreement was last modified November 18, 2025.
