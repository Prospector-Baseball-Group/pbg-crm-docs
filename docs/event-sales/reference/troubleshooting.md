# Troubleshooting

Start with the visible message and the record’s current state. The fastest fix is usually in the field, scope, or action named below.

## Workspace and customer records

| Problem | First check | Next step |
| --- | --- | --- |
| Event Sales app is missing | App Launcher search and assigned access | Ask the administrator to check Event Sales access |
| Agreement shows a generic layout | Current Salesforce app | Switch to Event Sales and reopen |
| Primary Contact is disabled | Has a business account been selected? | Choose the account first; allow related people to load |
| Contact is not available | Relationship to the selected customer | Verify the existing account relationship; do not duplicate the person |
| Event cannot save without a date | Current Stage | Supply Event Date at Quoted or later active stages |
| Event Type is disabled | Event Category | Select the category first |
| Location choices are missing | Division and active location catalog | Correct Division or ask the catalog administrator |

## Locations, calendar, and metrics

| Problem | First check | Next step |
| --- | --- | --- |
| Hold cannot be saved | Location and Hold Expires At | Complete both and resolve any conflict |
| Conflict message appears | Other held/booked events in every selected location | Agree a valid time/location with the booking owner |
| Event is absent from calendar | Month, Event Date, status, space, owner scope | Adjust filters and check record access |
| Calendar includes an unreserved event | Booking Status | All active includes Not Held |
| Home card differs from report | Event Date versus Close Date, fiscal scope, ownership | Reconcile with the [metric definitions](../reporting/home-metrics) |
| Team Data shows more than expected | User Division and accessible records | Ask the administrator to confirm the intended scope |

## Agreement preparation

| Problem | Correction |
| --- | --- |
| New Agreement says opportunity details are missing | Complete the named fields on the opportunity, then create again |
| No active template for the division | Confirm availability with the administrator; the verified active template is Akron |
| Missing signer Street or ZIP | Select Edit [signer name], then Save contact & recheck |
| No Deposit row | Add exactly one Deposit; a $0 deposit still needs a row |
| Duplicate Deposit or Balance | Reconcile existing payment rows instead of adding more |
| Fee mismatch | Deposit plus Usage Fee Balance must equal Usage Fee |
| Balance missing Due Date | Set the date on the payment row |
| Conditional access will not save | Complete Access Detail |
| A service selection does not save | Complete required hours or quantity and wait for the save |
| Bar selection requires bartenders | Enter Number of Bartenders as a whole number of at least one |
| Send remains disabled with no blockers | Check status: Submit for Review, then Approve for Send |
| Refresh from Opportunity is disabled | It is available only for an unlocked Draft |

## Adobe and documents

**A preview opens, but no one received a signing email.** A preview does not send. Check whether the agreement was actually sent and whether Adobe confirmed Out for Signature. The Company signer goes first.

**Send failed or the request is still processing.** Read the error, then sync the existing request where available. Do not create a duplicate request to escape an uncertain status. Ask the administrator to reconcile the current copy.

**The PDF shows an old address, signer, or amount.** Verify the new data was saved, then generate a new preview. Existing PDF copies preserve their original data.

**Cancellation pending appears.** Use Refresh status and confirm the returned status. Pending is not the same as cancelled.

**The agreement is Executed, but a file is missing.** Confirm that you are viewing the current request, sync, and report whether the signed PDF or audit trail is absent.

## Give support something actionable

Use your internal support channel and include the agreement/opportunity reference, action attempted, exact message, time, current status, and a screenshot when helpful. Never paste customer contact details, contract PDFs, or session links into this public documentation repository.
