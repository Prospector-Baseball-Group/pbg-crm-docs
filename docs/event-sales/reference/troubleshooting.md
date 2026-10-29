# Troubleshooting

Start with the visible message and the record’s current state. The fastest fix is usually in the field, scope, or action named below.

## Workspace and customer records

| Problem | First check | Next step |
| --- | --- | --- |
| Event Sales app is missing | App Launcher search and assigned access | Ask the administrator to check Event Sales access |
| Agreement shows a generic layout | Current Salesforce app | Switch to Event Sales and reopen |
| Primary Contact is disabled | Has a business account been selected? | Choose the account first; allow related people to load |
| Contact is not available | Relationship to the selected customer | Verify the existing account relationship; do not duplicate the person |
| Notes or New is missing | Account versus Contact navigation; page and record/note access | Use Account **Notes** or Contact **Related → Notes**, refresh, then follow [Notes troubleshooting](/general/notes#if-notes-is-missing-or-a-note-cannot-be-found) |
| Event cannot save without a date | Current Stage | Supply Event Start Date at Quoted or later active stages |
| Event Type is disabled | Event Category | Select the category first |
| Location choices are missing | Division and active location catalog | Correct Division or ask the catalog administrator |

## Locations, calendar, and metrics

| Problem | First check | Next step |
| --- | --- | --- |
| Hold cannot be saved | Location and Hold Expires At | Complete both and resolve any conflict |
| Conflict message appears | Other held/booked events in every selected location | Agree a valid time/location with the booking owner |
| Event is absent from calendar | Month, start/end dates, status, space, owner scope | Adjust filters and check record access |
| Calendar includes an unreserved event | Booking Status | All active includes Not Held |
| Home card differs from report | Event Start Date versus Close Date, fiscal scope, ownership | Reconcile with the [metric definitions](../reporting/home-metrics) |
| Team Data shows more than expected | User Division and accessible records | Ask the administrator to confirm the intended scope |

## Agreement preparation

| Problem | Correction |
| --- | --- |
| New Agreement says opportunity details are missing | Complete the named fields on the opportunity, then create again |
| No active template for the division | Confirm availability with the administrator; the verified active template is Akron |
| Client signer is not yet known | Choose **TBD — leave blank for download**, wait for the save, then Preview PDF. Select a real signer before approval and Adobe sending; see [TBD draft downloads](../agreements/signers#download-a-draft-when-the-signer-is-tbd) |
| Effective Date cannot be edited | It is read-only. Generate a new PDF on an editable agreement to use the current date; opening an existing PDF preserves its date |
| Missing signer Street or ZIP | Select Edit [signer name], then Save contact & recheck |
| Usage Fee Balance missing | Add one Usage Fee Balance for the amount the Deposit doesn't cover. A Deposit is needed only when one is charged |
| Duplicate Deposit or Balance | Correct the extra row's type instead of adding more rows |
| Fee mismatch | Deposit plus Usage Fee Balance must equal Usage Fee |
| Balance due on or after the event | Move the Usage Fee Balance due date before the event date |
| Payment type, amount, or due date is gray | The agreement is out for signature or signed. Record receipts or add a payment; revise the agreement to change the plan |
| Conditional access will not save | Complete Access Detail |
| A service selection does not save | Complete required hours or quantity and wait for the save |
| Bar selection requires bartenders | Enter Number of Bartenders as a whole number of at least one |
| Send remains disabled with no blockers | Check status: Submit for Review, then Approve for Send |
| Refresh from Opportunity is disabled | It is available only for an unlocked Draft |

## Payments and finalizing

| Problem | Correction |
| --- | --- |
| *Select a Lead Source (how this event inquiry reached us) before saving this Event Sales opportunity.* when adding a payment | Saving a payment also updates the opportunity. Set **Lead Source** on the opportunity, then add the payment again |
| Payment Status stays **Awaiting Event Finalization** | Use [Finalize Event](../operations/finalize-event) after the event |
| *Finalize Event is available after the event ends.* | Wait until the event's last date |
| Waive or Delete is missing on a payment | Only finance can waive or delete payments |
| Splits can't be changed | Splits lock once the deal is fully paid. See [Commission & revenue splits](/general/commission) |

## Adobe and documents

**A preview opens, but no one received a signing email.** A preview does not send. Check whether the agreement was actually sent and whether Adobe confirmed Out for Signature. The Company signer goes first.

**Send failed or the request is still processing.** Read the error, then sync the existing request where available. Do not create a duplicate request to escape an uncertain status. Ask the administrator to reconcile the current copy.

**The PDF shows an old address, signer, or amount.** Verify the new data was saved, then generate a new preview. Existing PDF copies preserve their original data.

**Cancellation pending appears.** Use Refresh status and confirm the returned status. Pending is not the same as cancelled.

**The agreement is Executed, but a file is missing.** Confirm that you are viewing the current request, sync, and report whether the signed PDF or audit trail is absent.

## Give support something actionable

Use your internal support channel and include the agreement/opportunity reference, action attempted, exact message, time, current status, and a screenshot when helpful. Never paste customer contact details, contract PDFs, or session links into this public documentation repository.

## Uploading files and public links

For upload steps, external sharing, expiration, and missing controls, see [Files & public links](/general/files-public-links). A link copied from your Salesforce address bar can require login; test the generated public link in a signed-out window before sending it.

For a multi-day booking, an overnight conflict is expected: all selected locations remain reserved between the first start and final end. See [Multi-day events](../sales/multi-day-events).

## Banquet Event Orders

| Problem | What to check |
| --- | --- |
| Missing BEO card or tab | Open the Event Sales app; check More in navigation and ask an administrator to verify BEO permissions and Opportunity access. |
| New asks for an Opportunity | This is expected. Select an Event Sales Opportunity, then Create / Open BEO. Search from the beginning of its name. |
| Create / Open returns an existing BEO | One current BEO is reused per Opportunity and event date. Use Create revision for an issued or accepted version. |
| Issue BEO & Save PDF is disabled | Save edits and resolve every item under Approval & Documents, including internal approval and any agreement exception. |
| Source edits did not appear in the BEO | BEOs retain their copied snapshot. Review and update the Draft deliberately; use a revision after issue. |
| Create revision is missing | Open the current Issued or Accepted BEO. Edit a current Draft directly. |

See [Create a BEO](../beos/create), [Prepare and issue](../beos/prepare-issue), and [Revisions](../beos/revisions).
