# Recent changes and verification

## October 12, 2026 — General section and shared libraries

Shared guidance now lives in [General](/general/): Files and public links, Notes, customer-record basics, personal list views, and future-task troubleshooting. This handbook keeps its sales-specific workflows and links to the shared instructions.

The Files guide includes the shared-library setup. Public-link retesting remains pending while sharing settings are updated; see [General verification status](/general/recent-changes). The earlier test below records the state before those library changes.

## October 12, 2026 — Files and public links

Added [Files & public links](/general/files-public-links), covering upload, clear file names, record attachments, external links, signed-out testing, expiration/password controls, link removal, and troubleshooting. Both handbook sections include navigation and homepage links.

**Live verification:** a Sales Rep uploaded and previewed the supplied PDF successfully from Files home, with the duplicate-download suffix removed. Files was absent from App Launcher, and the rep's sharing dialog did not offer public links. Permission inspection confirmed no Create Public Links grant for the tested user. The temporary duplicate upload was deleted; the existing file was retained.

**Verification boundary:** public-link creation, signed-out retrieval, and revocation could not be tested as that rep. Those instructions follow Salesforce's documented workflow and are explicitly conditional on access. This documentation update changes no Salesforce permissions or sharing settings.

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
