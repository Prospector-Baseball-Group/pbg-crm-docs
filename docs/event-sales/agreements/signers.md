# Choose & check signers

Open **Documents & Signatures** and verify both recipients before generating the signature copy.

## Choose the Company Signer

New Akron agreements default the Company Signer from the opportunity owner. Confirm that the person is authorized to sign. Select another appropriate active Salesforce user if necessary, then use **Save Company Signer**.

The company user must be active and have an email address. An administrator can help if the authorized signer is unavailable in the lookup or their user record needs correction.

## Choose the Client Signer

Choose the person who is authorized to sign for the customer. The list includes contacts belonging to, or actively related to, the customer account, including supported Person Account relationships.

If the right person is absent, confirm the account relationship. Use **Add New Contact** only for a genuinely new contact; complete the form and select **Create & Select Contact**. Avoid duplicating an existing person to get them into the list.

## Download a draft when the signer is TBD

For an editable agreement whose customer signer is not yet known:

1. Open **Documents & Signatures**.
2. Set **Client Signer** to **TBD — leave blank for download**.
3. Wait for **Client signer updated** to confirm the selection was saved.
4. Select **Preview PDF**, then use the PDF viewer’s download control to save the copy.

The new PDF leaves the client signer’s name, title, and email blank. The Company Signer remains in the document. Refresh from Opportunity preserves the blank client selection.

A missing Client Signer still appears as a send blocker. It does not prevent this draft preview/download. Before approval and **Send via Adobe Sign**, select the authorized client contact, complete the required details below, and generate a new preview for review. Previewing or downloading does not send a signature request.

## Complete the Client Signer record

Before sending, the selected signer needs:

| Required detail | Where to check |
| --- | --- |
| Name and title | Selected contact / person record |
| Email | The actual address that should receive the signing request |
| Phone | Selected contact / person record |
| Mailing Street | Mailing address, not only the account billing address |
| Mailing City and State | Mailing address |
| ZIP / Postal Code | Mailing address |

The persistent validation banner identifies the signer and the missing fields. Select **Edit [signer name]**, correct the details, then choose **Save contact & recheck**. The edit action handles standard Contacts and Person Accounts using the appropriate record fields.

If the issue remains, use **Recheck details**. Do not enter placeholder addresses in a real contract to clear the warning.

## Check the signing order

The current Event agreement workflow prepares the **Company signer first**, then the **Client signer**. Verify the recipients on the current document before sending. The client may not receive an actionable signing request until the first signing step completes.

## Changes and document copies

A generated PDF keeps the signer details captured for that copy. Changing the selected signer afterwards does not rewrite that old PDF. Save the selection and generate a new preview; follow the current send/correction workflow for any existing signature request.

**Next:** [Preview, review & send](./send).
