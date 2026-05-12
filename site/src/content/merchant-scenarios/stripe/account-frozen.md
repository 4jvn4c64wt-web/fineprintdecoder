---
title: "Stripe froze my account"
vendorSlug: "stripe"
vendorDisplayName: "Stripe"
problemPhrase: "stripe froze my account"
summary: "Stripe can freeze your account at any time, with no advance notice. Here's what the Services Agreement actually says about why, how long, and what you can do."

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
  Stripe can suspend your account immediately if it believes you violated the agreement, present a fraud or compliance risk, or didn't respond to a request for documents. There's no required notice. Your fastest path back is responding fully to any open information request; if that doesn't work, plan for the long version: open a backup processor today, document everything, and know that small claims court is preserved as a remedy if needed.

keyFacts:
  - label: "Stripe's right to suspend"
    value: "Immediate. No advance notice required."
    citation: "General Terms §10.1(b)(i)"
  - label: "Allowed reasons for suspension"
    value: "Belief of legal/regulatory violation; insolvency event; agreement breach; degraded service security; activity Stripe deems an unacceptable risk; rising fraud rates; unresponsiveness to information requests; failure to update technology."
    citation: "General Terms §10.1(b)(i)(1–8)"
  - label: "What 'suspended' usually means"
    value: "New transactions blocked; pending payouts paused; existing funds held; Dashboard still accessible."
  - label: "Right to information about why"
    value: "Stripe notifies 'in accordance with Law' — in most US states, the obligation is minimal. Expect a brief notice without detailed reasoning."
    citation: "General Terms §10.1(b)(ii)(1)"
  - label: "Hold period during review"
    value: "Typically 90 days for risk review. Stripe will release funds when satisfied 'the relevant risk exposure has been mitigated.'"
    citation: "Services Terms §3.3(a)"
  - label: "Hold period after closure"
    value: "Up to 180 days from the most recent transaction, to cover potential refunds and chargebacks. This can stack on top of the 90-day review period."
  - label: "Your right to terminate"
    value: "You can close your account at any time via the Dashboard. This does not stop ongoing hold periods on existing funds."
    citation: "General Terms §10.1(a)(i)"
  - label: "Right to sue Stripe"
    value: "Arbitration is required for most disputes, but small claims court is explicitly preserved. Limits vary by state ($5,000–$25,000)."
    citation: "General Terms §11.4(a)(iii)"

whatToDo:
  - "Check your Stripe Dashboard for any pending information request. If Stripe has asked for documents — ID, business registration, supplier invoices, customer correspondence, shipping records — provide everything they asked for, completely. Section 10.1(b)(i)(7) explicitly lists non-response as a suspension reason; responding fully is the fastest path to release."
  - "Open a backup payment processor today. Square, PayPal, or another Stripe alternative. The review period is at least 90 days in most cases. Your business can't wait that long without payment processing. Treat this as immediate, not optional."
  - "Document everything in writing. Screenshots of your Dashboard before and after the freeze, the freeze notification email, every support response, your transaction history showing the activity in question, customer correspondence proving fulfillment. You'll need this paper trail for any escalation."
  - "If 30+ days pass with no resolution, send a formal written demand. Reference §10.2 of the Services Agreement (Effect of Termination) and request release of held funds. A formal demand creates a paper trail that often triggers an actual human review and starts the clock on any breach claim you might bring."
  - "If 90+ days pass and your case is unresolved, consider small claims court. Section 11.4(a)(iii) explicitly preserves court access for self-help remedies. Most US states allow claims between $5,000 and $25,000. Stripe sometimes settles before the hearing rather than send counsel."

pitfalls:
  - headline: "The review hold and the termination hold are separate periods that can stack."
    detail: "A 90-day risk review can run first. If Stripe then terminates your account, a new 180-day hold can start from your most recent transaction. Worst case: roughly 270 days before all funds release. Plan operationally for that timeline, not the optimistic one."
  - headline: "Stripe can offset across any account you have with them."
    detail: "Section 7.2 lets Stripe collect amounts owed by deducting from any Stripe account balance, any User Bank Account, your backup payment method, or any Reserve. If you have a personal Stripe account or a Stripe-issued business card, those balances are reachable."
  - headline: "'High-risk' reclassification is unilateral and rarely reversible."
    detail: "If your business has been recategorized as high-risk under Stripe's risk policy, the freeze is policy-driven, not case-by-case. Standard support reinstatement is unlikely. Your practical path is to switch processors permanently and recover the held funds through the standard timeline."
  - headline: "The arbitration clause does not block small claims court."
    detail: "Section 11.4(a)(iii) explicitly carves out self-help remedies and provisional court relief. Filing in small claims is not a waiver of arbitration rights — you can preserve both. The carve-out is narrow but it exists."

whatChanged:
  - date: 2026-05-11
    note: "Initial summary published. Based on Services Agreement modified November 18, 2025."
---

### Why Stripe can freeze your account without warning

Section 10.1(b)(i) of the General Terms lists eight reasons Stripe can suspend an account, several of which give Stripe broad discretion. The most operationally significant are:

- Section 10.1(b)(i)(5) — "Stripe reasonably believes User is engaged in a business or activity that may be unlawful, enables or facilitates (or may enable or facilitate) illegal or prohibited transactions, may be harmful to a third party, or otherwise presents an unacceptable risk to Stripe."
- Section 10.1(b)(i)(6) — "Stripe reasonably believes User's activity increases, or may increase, the rate of fraud that Stripe observes."
- Section 10.1(b)(i)(7) — "User does not promptly respond to Stripe's request for User Information."

The standard is "reasonably believes," which is broad. Stripe doesn't need proof of wrongdoing — it needs a reasonable basis to suspect risk. In practice, this means an algorithm-driven flag plus a brief manual review can trigger a suspension, and the burden falls on the merchant to convince Stripe to lift it.

### What happens to your money during a suspension

Funds held by Stripe during a suspension are governed by Section 3.1 (Holding of Funds) of the Services Terms. Three facts most merchants don't realize:

1. **You don't earn interest on held funds.** Section 3.1 specifies that Stripe owns any interest earned. If Stripe holds $50,000 of your money for six months, the interest accrued belongs to Stripe.
2. **Stripe may invest the held funds.** The same section authorizes Stripe to invest held funds in liquid investments. Your money is not necessarily sitting in a non-interest-bearing escrow account.
3. **Release is at Stripe's discretion.** Section 3.3(a), which governs the Reserve mechanism, applies the same principle: Stripe will release funds "only if, and to the extent that, Stripe is satisfied that the relevant risk exposure has been mitigated." There is no fixed timeline — only a maximum cap from card-network rules.

### Responding to an information request

If your Dashboard or email shows a pending information request, the response is your single most leveraged action. Section 2.2 of the Services Terms requires merchants to provide "complete and accurate" information "in a form satisfactory to Stripe." In practice:

- Provide every document Stripe asks for, even if you think they already have it.
- Provide more than they ask for if the situation supports it. Examples: customer correspondence showing satisfaction, fulfillment records, supplier invoices, shipping tracking.
- Respond promptly. Sections 10.1(b)(i)(7) and 2.2 both treat non-response as grounds for further action.

### Small claims as a real remedy

The small claims carve-out in Section 11.4(a)(iii) is one of the few merchant-favorable provisions in the agreement. The clause reads, in relevant part, that "exercising any self-help remedies (such as setoff rights), or seeking injunctive relief or provisional remedies in aid of arbitration from a court of appropriate jurisdiction, does not constitute a waiver of any right to compel arbitration."

In practical terms, this means:

- You can file in small claims court for amounts within your state's limit, even though the broader agreement requires arbitration for most disputes.
- The filing does not waive your or Stripe's right to compel arbitration for the same claim.
- Stripe will likely either settle pre-hearing or send representation. Either outcome resolves the dispute faster than the 90+ day standard hold timeline.

Small claims is not a substitute for actually getting Stripe to release your funds through normal channels. It's a backstop when normal channels haven't worked after 60–90 days. Most merchants get their funds back without it. The ones who don't have a real path.

### Sources

This summary is based on the Stripe Services Agreement (General Terms and Services Terms) as published at the URLs in the frontmatter, captured on 2026-05-11. The agreement was last modified by Stripe on November 18, 2025. We re-verify on a quarterly cadence and after any Stripe-announced change to the agreement.
