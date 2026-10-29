# Field & status glossary

## Customer and event fields

| Term | Meaning |
| --- | --- |
| Account | Customer business or Person Account |
| Primary Contact | Main opportunity contact; must be related to a business customer |
| Event Title | Short description used to generate the opportunity name |
| Type | New or Renewal sales classification |
| Event Category / Event Type | Event-specific classification, with dependent type choices |
| Division | Team/venue context used for access, locations, and templates |
| Season | Assigned fiscal season; FY2027 covers October 1, 2026–September 30, 2027 |
| Close Date | Sales closing date |
| Event Start Date | First date of the event reservation; also used for fiscal attribution |
| Event End Date | Last date of a continuous reservation; blank means the start date |
| Event Locations | All spaces used by one opportunity |
| Primary Event Location | One selected space used as the primary reference |
| Booking Status | Not Held, Tentative Hold, Booked, or Released |
| Hold Expires At | Date and time by which a tentative hold should be reviewed |
| Next Step / Follow-Up By | Planned action and follow-up date |

## Agreement fields

| Term | Meaning |
| --- | --- |
| Client Legal Entity Name | Customer entity entering into the agreement |
| Effective Date | Current date when a new agreement PDF version is generated; read-only in the workspace and distinct from event and execution dates. Existing copies retain their original date |
| Onsite Contact | Event-day customer coordinator |
| Legal Notice Contact | Formal-notice recipient under the agreement |
| Company Signer | Authorized company user signing first in the current workflow |
| Client Signer | Authorized customer person signing second |
| Usage Fee | Agreement amount reconciled against Deposit plus Usage Fee Balance |
| Deposit | Optional core payment term, added only when a deposit is charged; at most one |
| Usage Fee Balance | Core payment term for the rest of the Usage Fee, due before the event; at most one. The opportunity's Payments tab calls it Balance |
| Additional Access Area | Approved property access separate from the booked event locations |
| Preview | PDF generated from saved details; does not send email |
| Snapshot / signature copy | Preserved details used by a specific generated or sent document |
| Audit trail | Returned record of the signature process |

## Payment and commission fields

| Term | Meaning |
| --- | --- |
| Payments tab | The opportunity's payment schedule; agreements read and write the same payments. See [Track payments on a deal](/general/payments) |
| Payment Status | Not Scheduled, Scheduled, Partially Paid, Awaiting Event Finalization, or Fully Paid |
| Awaiting Event Finalization | Every payment is received, but the event hasn't been finalized |
| Finalize Event | Header action that records post-event charges and marks the event finalized. See [Finalize the event](../operations/finalize-event) |
| Post-Event F&B | Payment created by Finalize Event for charges billed after the event, due 30 days after it |
| Commission tab | The opportunity's Revenue splits and, for finance and commission admins, its commission status. See [Commission & revenue splits](/general/commission) |

## Agreement status is not opportunity stage

An opportunity can be **Contract Sent** while an agreement is **Out for Signature**. The first describes sales progress; the second describes the active agreement workflow. Keep them consistent with the actual outcome, and use [signature tracking](../agreements/tracking) for the detailed status table.
