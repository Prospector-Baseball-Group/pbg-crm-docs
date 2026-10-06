# Send, track, and retrieve documents

**Send for Signature** emails the customer and locks the agreement for editing. Complete the preview review before using it.

## Send the agreement

1. Confirm the latest Preview contains the correct information.
2. Select **Send for Signature**.
3. Read the confirmation: signer email, automatic CC, payment count, and scheduled total.
4. Confirm only when the recipient and terms are correct.
5. Verify that the workspace reports **Out for Signature**. If there is an error, inspect it before attempting another send.

Automatic CC uses the active Opportunity owner's email when it differs from the signer. If that is unavailable, it falls back to the active agreement creator's email when eligible. Check the actual address displayed in the confirmation; do not assume it is your address.

## Read the status

| Status | What it means | Next action |
| --- | --- | --- |
| Draft | Information can be edited and readiness may still be incomplete. | Complete fields and payments, then Preview. |
| Preview Ready | A preview has been created. | Review it and confirm it is current before sending. |
| Out for Signature | The agreement has been sent. | Track the recipient's progress and use Sync Status when needed. |
| Signed | Adobe reports completion. | Open Documents and verify the signed PDF and audit trail. |
| Declined | The recipient declined. | Review the reason and discuss the next step with your manager/admin. |
| Voided | The agreement has been canceled. | Follow the approved correction/revision process. |

## Refresh status

Use **Sync Status** to request the latest Adobe result. A sent email is not a signed agreement. If the customer reports signing but Salesforce still shows an earlier status, sync and check the displayed error before asking the customer to sign again.

## Retrieve the documents

Open **Documents**. Select **Open PDF** beside the document you need. A completed agreement can include **Preview**, **Signed Agreement**, and **Audit Trail**.

![Documents tab showing the signed agreement, Adobe audit trail, and preview for a JG demo record](/images/ticket-sales/signed-documents.png)

*Previously captured JG demo completion. This illustrates where the documents appear; it is not a new customer send performed for this guide.*

## Correct a mistake

While Draft or Preview Ready, correct the information and generate a new preview. Once sent, the record is locked. **Void** is available before signing and cancels the agreement; use it only for an approved cancellation. A signed agreement cannot be voided through this action.

If you need a replacement, revision, or correction after sending, contact your Salesforce administrator. Keep the existing history and confirm the replacement workflow before issuing another contract.

**Success looks like:** Signed status, the expected signed document, and an available audit trail. Verify payment collection and ticket fulfillment in their operational systems separately.
