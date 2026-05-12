---
title: "Stripe pulled money from my bank account"
vendorSlug: "stripe"
vendorDisplayName: "Stripe"
problemPhrase: "stripe pulled money from my bank account"
summary: "Stripe has standing authorization to debit your linked bank account to collect amounts you owe — without separate notice. Here's exactly what the agreement allows and what your options are."

lastVerified: 2026-05-11
lastUpdated: 2026-05-11
status: "current"
tier: 1

sourceUrls:
  - "https://stripe.com/legal/ssa"
  - "https://stripe.com/legal/ssa-services-terms"
  - "https://stripe.com/legal/user-bank-account-debit-authorization"

sourceFiles:
  - "sources/stripe/stripe_terms-of-service_2026.05.11.txt"
  - "sources/stripe/stripe_service-terms_2026.05.11.txt"
  - "sources/stripe/stripe_user-bank-account-debit-authorization_2026.05.11.txt"

bottomLine: |
  When you linked your bank account to Stripe, you authorized Stripe to debit it without separate notice for any amount you owe — including chargeback refunds, fees, fines, and shortfalls. This is broader than most merchants realize. Stripe can also debit "any User Bank Account," meaning every account you've ever linked, and a backup payment method if available.

keyFacts:
  - label: "The authorization you granted"
    value: "Standing authorization to debit any linked bank account for any amount owed under the agreement, without separate notice for each debit."
    citation: "General Terms §7.5"
  - label: "What can be debited"
    value: "Fees, taxes, chargebacks, refunds, fines (Assessed Fines), negative balance shortfalls, and any other amount Stripe believes you owe."
    citation: "General Terms §7.2(a), §7.5"
  - label: "Order of collection"
    value: "Stripe will first deduct from your Stripe Account balance. If insufficient, it can debit your Stripe balance from any of your related accounts, your Reserve, future payouts, your linked bank account, or your backup payment method — Stripe's choice."
    citation: "General Terms §7.2(c)"
  - label: "Your right to revoke the debit authorization"
    value: "Waived to the extent allowed by law. The standing authorization remains in force until all your Stripe accounts are closed AND all amounts owed are paid."
    citation: "General Terms §7.5"
  - label: "Currency mismatch"
    value: "If the currency of what you owe differs from the currency in your bank account, Stripe converts at its own rate and may charge conversion fees."
    citation: "General Terms §7.2(d)"
  - label: "Erroneous transfers"
    value: "If Stripe believes it sent you money in error, it can take that money back through the same debit mechanism."
    citation: "General Terms §7.2(e)"

whatToDo:
  - "Find the specific debit in your bank statement and match it to your Stripe Dashboard. Stripe's Dashboard shows the reason for every debit — fee, chargeback adjustment, refund pass-through, fine, Reserve replenishment. Identify which category yours falls under before deciding what to do."
  - "If the debit is for a chargeback you can still dispute, file evidence immediately. Even though the debit has already happened, winning the dispute reverses it. Stripe's dispute window is typically 7–21 days from chargeback notification — calendar this from the date Stripe contacted you, not the date of the underlying transaction."
  - "If the debit was for a Reserve replenishment after a negative balance, the underlying cause is what needs fixing. Section 3.3(d) of the Services Terms automatically pulls from the Reserve to cover negative balances, and the Reserve must be replenished — usually from your next payouts or bank account. Stop the cascade by getting your balance positive."
  - "If you believe the debit was an error, contact Stripe Dashboard support with the specific transaction reference and your supporting documentation. Stripe is obligated to investigate but not on any fixed timeline. Document the request in writing."
  - "If the debit was unauthorized — meaning Stripe debited an account you never linked, or an amount that doesn't match any debt — that's a different situation. File a dispute with your bank under Reg E (ACH) within 60 days of the statement showing the charge. Banks are required to investigate and provisionally credit you within 10 business days."

pitfalls:
  - headline: "'Without separate notice' means truly without separate notice."
    detail: "Section 7.5 is explicit: 'User authorizes Stripe to debit and credit each User Bank Account without separate notice.' Stripe doesn't have to email you, doesn't have to call, doesn't have to surface it in the Dashboard before the debit happens. Some merchants only learn about a Stripe debit when their bank shows the line item."
  - headline: "Stripe can attempt the debit multiple times."
    detail: "Section 7.5: 'Stripe may rely on this authorization to make one or more attempts to collect all or a subset of the amounts owed.' If the first attempt fails because of insufficient funds, Stripe can retry — and the failed-attempt fees from your bank stack on top of the underlying debt."
  - headline: "Closing your Stripe account doesn't end the debit authorization."
    detail: "Section 7.5 final sentence: the authorization remains in force until BOTH conditions are met — all your Stripe accounts are closed AND all amounts you owe are paid. If you close your account but owe Stripe money, the debit authorization continues."
  - headline: "Stripe's right to debit survives termination of the agreement."
    detail: "Section 10.3 (Survival) explicitly lists Section 7 among the provisions that survive. Termination of the broader agreement does not end Stripe's right to collect amounts you owe through the standing debit authorization. The authorization expires only when the dual condition above is met."

whatChanged:
  - date: 2026-05-11
    note: "Initial summary published. Based on Services Agreement modified November 18, 2025."
---

### What you actually signed up for

When you linked your bank account to Stripe, you accepted the User Bank Account Debit Authorization. The text varies by country and bank network, but the standing authorization is consistent: you authorize Stripe (and through Stripe, the partner banks and ACH networks) to initiate debits to that account on a recurring or one-off basis, without further consent for each transaction.

This is structurally similar to setting up autopay with a utility company, with three material differences:

1. The amounts are not fixed in advance.
2. The triggering events are not under your control.
3. The authorization survives account closure if you owe Stripe money.

Section 7.5 of the General Terms is the source clause:

> "User authorizes Stripe to debit and credit each User Bank Account without separate notice, and according to the applicable User Bank Account Debit Authorization, to collect amounts User or another User Entity owes under this Agreement."

### The "another User Entity" wording matters

Section 7.5 says Stripe can debit your bank account to collect amounts owed by "User or another User Entity." A User Entity includes affiliated accounts — if you have multiple Stripe accounts under related business names, or if you operate a Stripe Connect platform with sub-accounts, the obligations of one can reach the bank accounts of another.

Most solo merchants don't have multiple User Entities. If you run multiple businesses on separate Stripe accounts but with the same EIN, ownership structure, or beneficial ownership, you may be a single User Entity in Stripe's eyes — and one account's debts can be collected from another's bank.

### The waiver of your right to revoke

The most aggressive sentence in Section 7.5 is the last one:

> "If applicable debit scheme authorization rules grant User the right to revoke User's debit authorization, then to the extent Law permits, User waives that right."

Many ACH and similar debit schemes give consumers the right to revoke a standing authorization. Stripe asks merchants to waive that right "to the extent Law permits." US merchants are not typically considered consumers under Reg E for business accounts, so the consumer protections may not apply, and the waiver may be enforceable.

The practical implication: you generally cannot stop the debit authorization by contacting your bank and telling them to block Stripe. You can ask your bank for a stop-payment, but the bank may or may not honor it for a business account. The cleaner path is closing the bank account itself — which then requires you to link a new one if you want to keep using Stripe.

### The collection hierarchy

Section 7.2(c) lays out the order in which Stripe collects when you owe money. If your Stripe account balance is negative or insufficient, Stripe may deduct from:

1. An established Reserve (if any)
2. Funds Stripe owes you for pending or future transactions
3. The Stripe Account balance of any related User Entity
4. Your linked bank account(s) — any of them, not just the primary
5. Your backup payment method (e.g., a credit card on file)

This hierarchy is at Stripe's discretion. It is not contractually required to exhaust step 1 before going to step 4. In practice, Stripe usually starts with the easiest source (current balance, then pending payouts) and escalates from there.

### When the debit is for an erroneous transfer

Section 7.2(e) gives Stripe the right to reverse transfers it believes were made in error:

> "If Stripe believes it transferred funds to User in error, Stripe may deduct, recoup or setoff those funds in accordance with this Agreement."

The standard is Stripe's belief, not provable error. If Stripe pays out $10,000 to you and later determines that $1,000 of it was processed incorrectly, Stripe can debit that $1,000 from your bank account through the standing authorization, without your separate consent for the reversal.

This provision is most commonly invoked when Stripe processes a transaction and then a chargeback reverses it — the funds Stripe paid you for the original transaction are pulled back through the debit authorization.

### Sources

This summary is based on the Stripe Services Agreement General Terms (Sections 7.2, 7.5, 10.3), Services Terms (Section 3.3(d)), and the User Bank Account Debit Authorization, as published at the URLs in the frontmatter, captured 2026-05-11. The agreement was last modified November 18, 2025.
