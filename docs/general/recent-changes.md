# Recent changes and verification

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
