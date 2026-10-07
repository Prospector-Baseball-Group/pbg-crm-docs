# Troubleshooting

Start with the exact record and action that failed. These checks resolve common workflow issues without creating duplicate data.

| Symptom | What to check | Next action |
| --- | --- | --- |
| Ticketing is missing from App Launcher | App assignment and user access | Ask your administrator to verify Ticketing access. |
| Home shows a data-load error | Homepage access and required object/field permissions | Use Try again once; send the exact error if it persists. |
| Primary Contact is disabled on creation | Account Name is not selected | Choose the Account first. |
| A contact does not appear | Correct Account and direct/active account relationship | Search carefully; relate the existing contact or create one only if missing. |
| Ticket Product is missing | Division selection and available division-specific products | Choose the correct Division, then reopen Ticket Product. |
| Product/category mismatch | Ticket Product belongs to a different Ticket Category | Use the [product matrix](../sales/products.md). |
| Closed Won is blocked | Missing Season or Ticket Category | Complete the missing field and retry. |
| Stage is rejected | Wrong sales process/record type | Confirm Ticketing Opportunity and use a valid Ticketing stage. |
| Log Task is missing | Header actions and overflow menu | Check those locations; then report the record type and user. |
| Notes or New is missing | Account versus Contact navigation; page and record/note access | Use Account **Notes** or Contact **Related → Notes**, refresh, then follow [Notes troubleshooting](../sales/notes.md#if-notes-is-missing-or-a-note-cannot-be-found). |
| Follow-up did not change after logging | Related To and both Opportunity transfer fields | Fill both fields or edit the Opportunity's Next Step and Follow-Up By directly. |
| Task appears on the wrong record | Name/Contacts versus Related To | Correct the relationship through the approved edit action. |
| A future task disappears after save | Timeline date range, activity types, and owner scope | Set All time, include Tasks, and Apply & Save; [check the saved task](../sales/future-tasks.md). |
| Shared-list columns cannot be changed | Permissions to edit the shared list definition | [Clone a personal list](../getting-started/list-views.md) and choose Select Fields to Display. |
| Amount is locked in the Opportunity list | Standard list inline-edit limitation | Open the Opportunity and use Edit; a locked Amount cell alone is not an access defect. |
| Flagged duplicate is still visible | Review schedule and any unresolved identity/relationship issues | Follow [duplicate guidance](../customers/data-quality.md); do not delete the record yourself. |
| Hustle Score does not include a call | Closed status, Activity Type, 3CX start time or completion time | Follow the [Hustle Score checks](../reporting/hustle-score.md). |
| An email is missing | Record email address, timeline filter, mailbox connection, saved activity | Ask your administrator to trace the message; avoid duplicate logging. |
| Team view is absent | Manager permission | Request the control only if it is needed for the role. |
| Report is empty or totals differ | Owner, record type, Division, Season, date field, refresh time | Align the filters before comparing. |
| Ticket Order is not on the expected Opportunity | Matching Opportunity and buyer/business relationships | Report the source Order ID and both record links. |

## Agreement problems

### “The Ticketing Opportunity must be Closed Won”

Confirm you are on the intended sale and that it meets your team's closing criteria. Complete the required Season and Ticket Category before changing Stage. Do not close a deal just to bypass the agreement prerequisite.

### “A current Ticketing Agreement already exists”

Open the listed agreement. Check its status and documents. Ask for the approved revision process if a replacement is required; do not create a duplicate Opportunity.

### Preview is disabled or readiness reports missing information

Complete both the signer Contact and Customer & Delivery details. Check every payment date and positive amount. The schedule must contain 1–6 payments and total exactly the Total Sales Price.

### Send for Signature is disabled

Wait for autosave. Resolve blockers. Generate a current Preview after the last change and inspect it. If the record is already sent or signed, editing/sending controls can be intentionally locked.

### Adobe or credential error

Capture the agreement number, status, error text, and attempted action. Ask the administrator to inspect access and integration status. Check whether Adobe already has a draft or sent agreement before retrying; avoid creating multiple signature requests.

### Customer says they signed, but Salesforce has not updated

Use **Sync Status**, then check Documents. If it remains inconsistent, send the agreement link and approximate signing time to the administrator. A repeated send is not a status-refresh method.

## A useful support request

Include: **what you tried, record link, expected result, actual result, exact error, your division, and approximate time**. A cropped screenshot of the relevant controls is often enough. Keep customer information in the approved internal support channel rather than posting it to this public documentation repository.

For quick explanations of common behavior, start with [Frequently asked questions](common-questions.md).
