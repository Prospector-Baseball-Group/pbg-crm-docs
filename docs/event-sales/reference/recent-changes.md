# Recent changes

This page records changes relevant to using Event Sales, with the release state distinguished from work still under verification.

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
