# Recent changes and verification

## November 9, 2026 — Next Step on the path and Why it was lost in Edit

These changes apply to Ticketing, Event Sales, and Partnership opportunities in the **PBG Sales** app:

- **Next Step** and **Follow-Up By** are key fields on the sales path at every open stage. Select the arrow at the left of the path to show them. You can also edit them from the **Next Step** box in the summary under the path, or in the **Next step** section under **Deal** on the Overview tab and in the **Edit** window while the deal is open.
- The **Why it was lost** section (**Loss Reason**, **Turned Down Reason**, **Lost To**) appears in the **Edit** window on any deal that isn't won, so you can set Stage to Closed Lost and choose the reason in one save.
- **Primary Objection**, in the Closing section, is for what's holding back a deal that's still open. Record why a deal was lost in **Why it was lost**.

Event Sales also changed on the same day: event products for Akron, a new loss reason, and a required Loss Reason. See [Event Sales recent changes](/event-sales/reference/recent-changes). Event products change what the Payments tab expects on an Akron event priced with products; see [Track payments on a deal](./payments#add-a-payment).

**Verification:** released to production on November 9, 2026.

## November 9, 2026 — Business Account activity logging

Added [Business Account activities](./business-account-activities) with steps for linking people and businesses, selecting a specific Opportunity, scheduling future work, correcting captured emails through **Manage Associations**, and verifying the result before relying on a report. It also explains the deployed 3CX linking rule and completed call backfill; emails are outside that automation's scope.

**Verified:** live PBG Sales forms and Sales Rep layout assignments support the required person and related-record controls. The Business Account form keeps the selected business fixed while allowing contact selection. The email composer displays an EAC association warning; the captured email form exposes Account/Opportunity selection and a thread-wide checkbox. Inspection used unsaved forms, without changing customer activities or sending messages. No new layout deployment or fields were needed.

## October 28, 2026 — Payments and commission (with the payments release)

Two new shared guides cover tabs that now appear on every Ticketing, Event Sales, and Partnership opportunity:

- [Track payments on a deal](./payments): the **Payments** tab's summary, payment cards, adding a payment, recording a receipt, starting schedules on won deals, and finance's Waive and Delete.
- [Commission & revenue splits](./commission): the **Commission** tab, who can change splits, when commission is earned, quota credit, and Commission Review for commission admins.

Revenue splits moved from the Opportunity Splits list to the Commission tab. Agreements read and write the opportunity's payments.

**Verification:** checked in a Salesforce sandbox with fictional records on October 28, 2026. The full automated test suite passed. Automated tests also ran the Payments tab, Commission tab, Tickets.com Orders card, Finalize Event, and Ticketing agreement payments as a sales rep with the permissions sellers hold. Screens were reviewed in an administrator browser session; a separate seller browser session was not used. No agreement was sent for signature and no payment was collected. These changes went live in production the night of October 28, 2026.

## October 12, 2026 — Shared Salesforce guidance

Created **General** for workflows used across apps. Files and public links, customer Notes, customer-record basics, personal list-view controls, and future-task troubleshooting now have one shared home. Sales-specific contact rules, list choices, follow-up automation, agreements, and reporting remain in their sales handbooks. Existing Files and Notes URLs point readers to the new guides.

The Files guide now distinguishes the top-level **Examples** library from the older Examples folder in Asset Library and explains division-library membership and upload completion. Library uploads and public links have separate permission requirements.

**Verified end to end:** with the public-link permissions enabled, a sales rep uploaded and previewed a PDF in a division library, created its public link, and deleted the link after testing. Anonymous viewing succeeded; an unauthenticated download matched the original PDF byte-for-byte. A fresh visit after revocation showed that the content could no longer be accessed. The temporary link and upload were removed. Files tab visibility was also corrected for sales reps and verified through App Launcher. The Files guide now includes the exact working steps, a complete schedule example, and a short Public Links versus Content Deliveries explanation.

## Earlier workflow verification

- **October 7:** Notes creation and reopening on Person Accounts and Contacts, plus Business Account Notes visible across Event Sales, Ticketing, and Partnership.
- **October 6:** list-view controls, the Opportunity Amount inline-edit limitation, and Activity Timeline filters were inspected in Salesforce. Shared guides retain the dates on the existing screenshots.

Moving a guide does not constitute a new live test of its Salesforce workflow. See [Event Sales changes](/event-sales/reference/recent-changes) and [Ticket Sales changes](/ticket-sales/reference/recent-changes) for the original verification scope.
