# Recent changes

This page records changes relevant to using Event Sales, with the release state distinguished from work still under verification.

## October 6, 2026 — Agreement readiness and Adobe workflow

Verified in deployed Salesforce code and the current implementation chat:

- A persistent agreement banner lists send blockers above the tabs.
- Signer errors identify the person and missing fields, including Mailing Street and ZIP / Postal Code.
- **Edit [signer name] → Save contact & recheck** supports Contacts and Person Accounts.
- Payment messages identify missing/duplicate core terms and the exact fee mismatch.
- Send remains disabled until validation is clear and the agreement is Ready to Send.
- Event Adobe routing, PDF handling, duplicate-send protections, status sync, and cancellation support have been connected.

The latest repair is also deployed and reflected in this guide:

- Sending waits for Adobe to finish processing the uploaded PDF and safely retries the same agreement.
- Documents & Signatures shows one current PDF and the two current signers; **Earlier documents** is collapsed.
- **Refresh status**, **Open PDF**, and, after completion, **Download audit trail** are available on the current document card.
- **Cancel signature request** requires a reason and checks Adobe’s confirmation. An unsent record uses **Cancel agreement**. Signed agreements cannot be cancelled through these actions.

**Verification boundary:** deployed code, automated checks, and Chrome UI verification passed. At this edition’s verification cutoff, the internal request remained unsent pending approval. Actual email delivery, both signatures, and returned signed PDF/audit files have not yet been confirmed together in a completed internal signing cycle. Do not treat a generated preview or unsent authoring copy as evidence of delivery.

## September–October 2026 — Everyday Event Sales improvements

- The Home cards use fixed FY2027 dates, with Event Date for dated events and assigned Season for undated opportunities.
- The organization’s fiscal year starts in October.
- Opportunity creation supports related-person selection for business accounts and Person Account handling.
- New opportunity defaults use Season 2027.
- Generated Event Sales names use **Season - Account Name - Event Title**.
- Type distinguishes **New / Renewal**, separately from Event Type.
- Stage supplies the sales probability.
- **Close Lost / Turn Down** captures outcome and reason details for reporting.
- An event can use multiple locations, with a required primary selection; agreement Drafts copy those locations.

## Guide maintenance

The public guide was checked against live Salesforce components, live browser views, and the latest related implementation chat on **October 6, 2026**. Screens can change after that date. See [About this guide](./about) for the update process.
