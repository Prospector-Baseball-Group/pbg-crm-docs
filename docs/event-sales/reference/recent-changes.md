# Recent changes

## November 9, 2026 — Event products, Next Step on the path, and loss reasons

**Event products (Akron RubberDucks only).** Jacksonville and Lancaster keep the **Split revenue** view until their menus are set up.

- The Revenue tab on an Akron event offers **Add products**: choose items from the club's menu, with 18% gratuity and 6.75% sales tax added automatically. Each product's price basis decides whether it starts at a standard price, needs a price on each event, or is billed on actual after the event. See [Price an event with products](../sales/event-products).
- For an event with products, the Amount is the event's revenue, including cash bar and excluding tax, gratuity, and city pass-through. The client total is what's billed; the Payments tab and the agreement's Usage Fee follow it. Tax and gratuity aren't commissionable; cash bar is.
- **Create Agreement** shows **Usage Fee (client total)**, and Exhibit A of the agreement PDF has an **Itemized Usage Fee** table. Product changes update a Draft agreement's Usage Fee, but not an agreement that is out for signature or signed. See [Create an agreement](../agreements/create#events-priced-with-products).
- A new BEO copies the deal's billed products as **Included in agreement** lines, and BEO charges can be tagged with a product. See [Tag charges with a product](../beos/prepare-issue#tag-charges-with-a-product).
- **Finalize Event** on an event with products confirms each line's final amount, starting from changes made on the BEO, and adds cash bar or extra consumption. Billed amounts not already scheduled become a **Post-Event Charges** payment. **Correct final amounts** on the Revenue tab fixes them afterward. Events without products keep the single post-event charges form. See [Finalize the event](../operations/finalize-event).
- The **Event Watch List** report in **Revenue Reporting** breaks Akron itemized events down by category. See [Lists, reports & dashboards](../reporting/reports#event-watch-list).
- Club event leads keep their club's menu with the **Event Product Editor** permission set. See [Manage the event product menu](../administration/event-products).

**Next Step and Follow-Up By.** In PBG Sales they're key fields on the sales path at every open stage, editable from the **Next Step** box under the path, and in a **Next step** section on the Overview tab and in **Edit**. Event Sales has its own sales path for this. See [Move through stages](../sales/stages#keep-next-step-and-follow-up-by-on-the-path).

**Loss reasons.** **Preferred Date Unavailable** is a new Loss Reason for when the client's date was taken. Event Sales requires a Loss Reason before closing, and the **Why it was lost** section now appears in **Edit** on any deal that isn't won. See [Close lost or turn down](../sales/close-lost).

**Verification:** released to production on November 9, 2026. The full event products flow (Revenue tab, agreement and PDF, BEO, Finalize Event, and Correct final amounts) was run with fictional records in a Salesforce sandbox in the PBG Sales app. In production, the Revenue tab's product editor was opened and cancelled without saving, and the Event Watch List report was run. No agreement was sent for signature and no payment was collected.

## November 5, 2026

- Special Event Agreement deposits may exceed the Usage Fee to cover other event charges, including food and beverage. When the Deposit covers the fee, no Usage Fee Balance is needed. Save, approval, and signature-document checks support the larger deposit. See [Schedule payments](../agreements/payments).

This page records changes relevant to using Event Sales, with the release state distinguished from work still under verification.

## October 28, 2026 — Payments tab, Finalize Event, and agreement payments (with the payments release)

- Event Sales opportunities have a **Payments** tab and a **Commission** tab. See [Track payments on a deal](/general/payments) and [Commission & revenue splits](/general/commission).
- An agreement's payment terms are the opportunity's payments. A Deposit is added only when one is charged; there are no $0 payments. The Usage Fee Balance must be due before the event. Once an agreement is out for signature, each payment's type, amount, and due date lock, while receipts can still be recorded. See [Schedule payments](../agreements/payments).
- **Finalize Event** records post-event charges as a Post-Event F&B payment and marks the event finalized. Fully Paid and commission wait on it. See [Finalize the event](../operations/finalize-event).
- The opportunity page has a Details tab that opens first, with Payments and Commission after it.

**Verification:** checked in a Salesforce sandbox with fictional records on October 28, 2026. The full automated test suite passed. Automated tests also ran the Payments tab, Commission tab, Tickets.com Orders card, Finalize Event, and Ticketing agreement payments as a sales rep with the permissions sellers hold. Screens were reviewed in an administrator browser session; a separate seller browser session was not used. No agreement was sent for signature and no payment was collected. These changes went live in production the night of October 28, 2026.

## October 27, 2026 — Banquet Event Orders

BEOs are available in Event Sales. Create or open one from an Event Agreement or Opportunity, or use **Banquet Event Orders → New** and select an Event Sales Opportunity. The New selector shows the account name, matching the Event Agreement selection pattern.

The workflow reuses existing details, supports club-specific operational rows, saves an issued PDF, records received approval manually, and preserves earlier versions when creating revisions. BEOs do not dispatch Adobe Sign requests. See the [BEO walkthrough](../beos/overview), including screenshots of creation and revisions.

**Verification:** production checks and Chrome verification passed for creation, duplicate prevention, edits, local event times, issue checks, PDF generation, recorded test acceptance, and revisions. Browser verification used an administrator session with fictional records; seller permissions have automated coverage, but separate seller browser acceptance remains outstanding. Temporary workflow records were removed. The October 27 picker update was checked in Chrome without creating customer records.

## October 26, 2026 — TBD draft downloads and current effective dates

Deployed for Special Event Agreements:

- **Client Signer → TBD — leave blank for download** supports draft previews and downloads with blank client signature details. Draft refresh preserves that selection. A real, complete Client Signer is still required for approval and Adobe sending.
- **Effective Date** is read-only and uses the current date whenever a new PDF version is generated, whether the client signer is named or TBD.
- Earlier and signed document copies keep their original content and dates. Opening a saved PDF does not generate a new version.

See [Choose & check signers](../agreements/signers#download-a-draft-when-the-signer-is-tbd) and [Preview, review & send](../agreements/send).

**Verification:** production deployment and automated checks passed. Live PDF generation verified named and blank client signers, refreshed dates on repeated generation, and preservation of the earlier copy. The missing-signer send blocker was also verified. Seller browser acceptance testing remains outstanding; this release verification did not send an agreement or complete a signature cycle.

Tentative-event-time wording remains pending legal approval and is not included in this release.

## October 16, 2026 — Consecutive multi-day events

Event Sales now supports a start/end date range on one Opportunity and agreement. Selected locations remain reserved continuously, including overnight. The calendar displays every occupied day, and the homepage classifies a won event as completed only after its final date. Existing single-day records continue to work with End Date blank.

The fields are included on the relevant creation and record layouts, agreement workspace, and shared seller/reporting/agreement permissions. Agreement snapshots and PDF previews include the date range. Event totals and payment rules are unchanged.

See [Book a multi-day event](../sales/multi-day-events) for the workflow and limitations. Validation covers date-range conflicts, month boundaries, single-day compatibility, agreement snapshots, and financial totals. No customer signature request was sent as part of this release.

## October 12, 2026 — General section and shared libraries

Shared guidance now lives in [General](/general/): Files and public links, Notes, customer-record basics, personal list views, and future-task troubleshooting. This handbook keeps its sales-specific workflows and links to the shared instructions.

The Files guide includes the shared-library setup. The full upload, public-link, anonymous-access, and revocation workflow is verified; see [General verification status](/general/recent-changes).

## October 12, 2026 — Files and public links

[Files & public links](/general/files-public-links) covers library upload, record attachments, link creation, expiration/password controls, recipient checks, and link removal. Public-link permissions are enabled for sales reps and shared-library managers.

**Live verification:** a sales rep uploaded and previewed a PDF in a division library, created a public link, and deleted that link after testing. Anonymous access succeeded, the downloaded PDF matched the source, and a fresh visit after revocation could no longer access the file. The temporary upload was removed.

## October 7, 2026 — Notes on Accounts and Contacts

- **Person Accounts and Business Accounts:** use **Notes → New**.
- **Contacts:** use **Related → Notes → New**.
- Notes are available in Event Sales, Ticketing, and Partnership, including the added Notes tab on Partnership Business Accounts.
- The [Notes walkthrough](/general/notes) explains saving, reopening, choosing the right record, and keeping reference notes separate from activities and follow-up tasks.

Verified in live Salesforce: saving and reopening notes on Person Accounts and Contacts, plus a Business Account note visible across all three apps. Temporary verification notes and records were removed. The handbook update adds navigation, account/contact guidance, and troubleshooting links for the deployed behavior.

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

The October 6 edition also clarifies future-task timeline filters, personal versus shared list views, and the current limit on component-revenue reporting. These additions reconcile recent support questions with current Salesforce behavior; they do not announce new Salesforce functionality.

The public guide was checked against live Salesforce components, live browser views, and the latest related implementation chat on **October 6, 2026**. Screens can change after that date. See [About this guide](./about) for the update process.
