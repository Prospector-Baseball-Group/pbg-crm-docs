# Accounts & contacts

Start with the correct customer record. It connects the opportunity, onsite contact, and agreement signer.

## Search first

1. Open **Accounts** and search the customer’s name.
2. Review likely matches, including corporate accounts and locations with similar names.
3. Open the correct record and check the customer details and related people.
4. Create a new record only if no appropriate record exists.

If two records appear to represent the same customer, ask your Salesforce administrator to review them. Do not create a third record to work around uncertainty.

## Choose the right customer structure

| Customer | Typical structure | Opportunity contact |
| --- | --- | --- |
| Business or organization | Business Account plus related Contacts or related individuals | Select the person coordinating the sale |
| Individual booking personally | Person Account | Salesforce uses the Person Account’s contact identity |

A person can be related to more than one business. Use the existing relationship when it is valid rather than duplicating the person.

## Create an account

1. Open **Accounts → New**.
2. If Salesforce asks for a record type, select the appropriate business or person type.
3. Complete the required name and customer fields. Use the correct division where prompted.
4. Enter reliable phone, email, and address details that are known.
5. Select **Save**, then review the saved record.

For a business, add or relate the appropriate contact through the account’s related-person or Contacts section. Use **New** for a genuinely new person, or the available relationship action for an existing individual. Required fields and available actions depend on your record type and permissions.

## Keep customer context in Notes

On a **Business Account** or **Person Account**, choose **Notes → New**. On a **Contact**, choose **Related → Notes → New**. Add a title and the useful context, then choose **Done** and reopen the saved note to check it.

This is available in Event Sales, Ticketing, and Partnership. See [Keep customer context in Notes](../sales/notes) for the record paths, saving steps, and the difference between Notes and activities.

## Choose the Primary Contact

The Event Sales opportunity form’s **Primary Contact** search becomes useful after you select a business account. It prioritizes people related to that account. Event Sales requires a contact who belongs to or is related to the company. The chosen person is also maintained as a primary Opportunity Contact Role.

For a Person Account, the form indicates that the selected person is the opportunity contact. Do not create an extra business contact solely to satisfy the opportunity form.

## A coordinator is not automatically the legal signer

The Primary Contact seeds agreement information, but the authorized **Client Signer** may be someone else. The agreement also separates **Onsite Contact** from **Legal Notice Contact**. Review each role before sending.

[Choose & check signers →](../agreements/signers)
