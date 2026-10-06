# Cancel or correct

Start by identifying whether the agreement is still an editable Draft, has an active signing request, or is already Executed.

## Correct an editable Draft

Edit and save the agreement details, then generate a new preview. If the source opportunity changed, **Refresh from Opportunity** is available only while the agreement remains an unlocked Draft. Review copied values after refreshing.

Changing a current field does not rewrite a previously generated PDF.

## Correct a prepared or sent signature copy

Once a signature copy is locked, treat it as a preserved contract record. Do not change recipients or contract terms by editing an earlier preview or trying to bypass the lock. Work with the authorized agreement owner to cancel the outstanding request and prepare a corrected agreement through the supported workflow.

## Cancel an outstanding request

1. Open the correct agreement in Event Sales.
2. Review its current status and the current Adobe request.
3. In **Documents & Signatures**, select **Cancel signature request**. The same action is available in **More agreement actions**.
4. Read the confirmation and enter the required **Reason for cancellation**. Adobe cancellation stops active signing links and notifies recipients.
5. Select **Confirm cancellation** when the agreement owner has decided to stop the request. Select **Keep agreement** to leave it unchanged.
6. Wait for the result. If it says **Cancellation pending**, use **Refresh status** and verify Adobe’s final confirmation.

The workspace reports **Signature request cancelled** only after Adobe confirms. A pending action is not final confirmation. The document and its history are retained.

## Void an unsent agreement

When no Adobe request exists, use **Cancel agreement**, enter **Reason for cancellation**, and select **Confirm cancellation**. The record and documents are kept, and the agreement can no longer be sent. The underlying agreement status is Voided; the document panel displays Cancelled.

## An Executed agreement needs a different process

Executed agreements are not eligible for the ordinary workspace cancellation action. Cancellation is also unavailable for Voided, Superseded, Expired, and Declined agreements, and is disabled while a send is in progress. Escalate corrections, amendments, or termination requests to the authorized agreement owner. A Salesforce status change does not itself rescind a signed contract.

## Check the booking separately

Cancelling an agreement does not by itself establish that the opportunity’s location reservation was released. Review the Opportunity’s Stage, Booking Status, dates, tasks, and any event-day commitments separately.
