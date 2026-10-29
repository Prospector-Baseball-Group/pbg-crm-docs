# Recent changes and verification

## October 28, 2026 — Tickets.com orders, payments, and splits (with the payments release)

- Link a deal's orders on the **Tickets.com Orders** card by Tickets.com order ID, or save a pending link for an order that hasn't synced. An order belongs to one deal. See [Link your Tickets.com orders](../customers/ticket-orders.md#link-your-tickets-com-orders).
- Salesforce links most orders to their deal automatically each night when exactly one deal fits; the **Orders to Link** list view on Ticket Orders shows the rest, with the reason. Orders with no ticket revenue, such as the original order after an exchange, never link automatically. See [Link your Tickets.com orders](../customers/ticket-orders.md#link-your-tickets-com-orders).
- Ticketing opportunities have a **Payments** tab. Received payments come from the linked orders, and a deal is Fully Paid when they are. See [Track payments on a deal](/general/payments).
- Ticketing agreement payments are the opportunity's payments. See [Payments and preview](../agreements/payments-preview.md).
- **Quota Credit Rep** is no longer used. Quota credit and commission follow the Revenue splits on the **Commission** tab. See [Commission & revenue splits](/general/commission).
- **Event Start Date** appears for Suite, Group, and Picnic ticket categories, and for Special Event Ticket Sales.

**Verification:** checked in a Salesforce sandbox with fictional records on October 28, 2026. The full automated test suite passed. Automated tests also ran the Payments tab, Commission tab, Tickets.com Orders card, Finalize Event, and Ticketing agreement payments as a sales rep with the permissions sellers hold. Screens were reviewed in an administrator browser session; a separate seller browser session was not used. No agreement was sent for signature and no payment was collected. These changes went live in production the night of October 28, 2026.

## October 16, 2026 — Create and find campaigns

The [Campaign FAQs](../help/common-questions.md#campaigns) explain the unchecked **Active** default, required creation fields, ownership and active-list filters, and how to find an inactive campaign through **Recently Viewed** or global search before activating it. The [email and campaigns guide](../sales/email-campaigns.md#use-campaigns-as-context) links to these steps.

**Verification:** inspected the live New and Edit forms, list selector, and global search for an existing inactive campaign in an administrator session. Separately verified the Sales Rep campaign layout, shared seller permissions for the Campaigns tab and create/edit fields, and the affected seller's read/edit access to the inactive record. This was not a separate seller-session save test. Salesforce defaults, permissions, and campaign records were not changed.

## October 12, 2026 — General section and shared libraries

Shared guidance now lives in [General](/general/): Files and public links, Notes, customer-record basics, personal list views, and future-task troubleshooting. This handbook keeps its sales-specific workflows and links to the shared instructions.

The Files guide includes the shared-library setup. The full upload, public-link, anonymous-access, and revocation workflow is verified; see [General verification status](/general/recent-changes).

## October 12, 2026 — Files and public links

[Files & public links](/general/files-public-links) covers library upload, record attachments, link creation, expiration/password controls, recipient checks, and link removal. Public-link permissions are enabled for sales reps and shared-library managers.

**Live verification:** a sales rep uploaded and previewed a PDF in a division library, created a public link, and deleted that link after testing. Anonymous access succeeded, the downloaded PDF matched the source, and a fresh visit after revocation could no longer access the file. The temporary upload was removed.

## October 7, 2026 — Notes on Accounts and Contacts

- **Person Accounts and Business Accounts:** use **Notes → New**.
- **Contacts:** use **Related → Notes → New**.
- Notes are available in Ticketing, Event Sales, and Partnership, including the added Notes tab on Partnership Business Accounts.
- The [Notes walkthrough](/general/notes) explains saving, reopening, choosing the right record, and keeping reference notes separate from activities and follow-up tasks. Notes do not count as completed Tasks in Hustle Score.

Verified in live Salesforce: saving and reopening notes on Person Accounts and Contacts, plus a Business Account note visible across all three apps. Temporary verification notes and records were removed. The handbook update adds navigation, account/contact guidance, and troubleshooting links for the deployed behavior.

## October 6, 2026 — Questions from daily use

Added a [frequently asked questions](../help/common-questions.md) page and walkthroughs for personal list views, future tasks, and customer data quality. The update draws on historical Salesforce support conversations, follows later replies that supersede earlier answers, and checks the resulting instructions against current behavior.

Additional verification:

- Live list controls, the Amount lock and editable Next Step, the record's Edit Amount control, and the Activity Timeline filter panel.
- Active duplicate-flag and B2B-conversion flows, including the related-business prerequisite and preservation of the existing opportunity.
- Current Company Email, Notes, Phone 1 Extension, and LinkedIn Message configuration.
- The daily duplicate-review schedule, with a clear distinction between a review flag and a completed merge.
- Current October fiscal calendar and ending-year naming.
- Full-package Opportunity Amount guidance, the separate imported revenue fields, and the remaining limit on ticket/F&B component reporting.

Earlier proposals for account ownership, unresolved migration cases, and requested integrations are not presented as completed capabilities. Event Sales includes corresponding clarifications and links to the shared list-view and timeline instructions.

## October 6, 2026 — Ticket Sales handbook

This edition establishes task-based Ticket Sales documentation alongside Event Sales. The organization follows the Partnerships guide's pattern of getting started, everyday sales, agreements, reporting, and administration, with original instructions for PBG's Ticketing module.

Verified for this edition:

- The live Ticketing homepage and New Ticketing Opportunity form.
- Current Ticketing stages, display labels, season default, division-specific products, and category validation.
- Live homepage rules for follow-up, attention, scope, preview limits, and activity timing, including the 3CX call-start rule.
- The linked Hustle Score report and its current completion-date difference from the homepage for imported 3CX calls.
- The active Task automation that transfers Opportunity Next Step and Follow-Up By when both are provided.
- Deployed Ticketing Agreement service behavior and active division templates.
- Prior activity-logging and agreement-rollout conversations, including Lancaster's online-renewal distinction.

## Visuals

Homepage, activity-logging, Opportunity-creation, list-control, and timeline-filter screenshots were captured October 6, 2026. The agreement launcher, Payment Schedule, and Documents images are prior JG demo captures used in the earlier agreement walkthrough. They are labeled where used and contain training examples.

Screenshots show an empty personal workspace, blank form, or demonstration agreement. Customer data, private conversations, credentials, and internal evidence exports are excluded from the public site.

## Verification boundaries

This documentation update did not change Salesforce metadata, create customer records, send agreements, issue tickets, or collect payments. Current interface and configured behavior were inspected; the guide does not claim that a new end-to-end signature or payment transaction was performed for this edition.

Permissions, templates, source-data freshness, and report definitions can change. The instructions identify where a seller should check the displayed status or ask an administrator for help.

## Maintaining the guide

When a workflow changes, update the relevant task page and its screenshots together. Verify exact labels in Salesforce, use blank or approved demo data for public captures, and add a dated note here. Keep private troubleshooting evidence outside the public repository.
