# Find and create Accounts and Contacts

Start with the customer relationship, then attach the sale. Searching first prevents duplicate history and saves the next rep from having to piece together the conversation.

## Choose the right record

| Customer | Record to use | Where the people belong |
| --- | --- | --- |
| Individual fan or household buyer | Person Account | Personal details are part of the Person Account |
| Company, school, nonprofit, or organized group | Business Account | Contacts identify the people you work with |
| A person who works with several organizations | Existing Contact plus the appropriate account relationship | Confirm the relationship rather than creating another copy of the person |

## Find an existing record

1. Open **Accounts** and search the list or use Salesforce search.
2. Search for alternate spellings or the company's recognizable name.
3. Open a likely match and compare available email, phone, organization, and history.
4. Review related opportunities before creating another deal for the same sale.
5. If two records appear to represent the same customer, compare them and use **Flag Duplicate** or send their links for review. See [duplicates and missing history](/ticket-sales/customers/data-quality) for the current review process.

A record missing from one list view may exist elsewhere. Clear restrictive list filters or search before concluding that it is absent. Access can also limit what you can see.

## Create a Business Account

1. In **Accounts**, choose **New**.
2. Select **Business Account** when asked for a record type.
3. Enter the organization's name and available phone, website, and address.
4. Complete the required fields shown by your form and confirm the correct ownership/division context.
5. Save and check the resulting record.
6. Add or relate the people you will contact. Keep the company in the Account and the person's details in a Contact.

For a branch or subsidiary, use **Parent Account** when there is a confirmed parent business relationship. Account hierarchy does not itself merge records or combine all sales ownership.

## Create a Person Account

Choose **Person Account** in the Account creation flow. Enter the buyer's name and available contact information, complete the required fields, and save. Do not create an additional standalone Contact just to represent the same individual.

## Keep customer context in Notes

Use **Notes → New** on a Business Account or Person Account, or **Related → Notes → New** on a Contact. Follow [Customer notes](./notes) to save, reopen, and update useful context.

## When someone leaves an organization

Keep the person, the organization, and their customer history. An employment change is not a reason to delete a Person Account, Contact, Business Account, completed activity, order, or historical opportunity. Do not rename the departing person's record to their replacement or create another copy of the same person.

### Update current contact details separately from history

1. Confirm the departure and which email addresses and phone numbers are no longer valid for reaching that person. A personal mobile number can remain valid after a job change.
2. Before clearing obsolete values, add a dated **Note** on the person with the former employer, former role, departure date if known, source of the update, and replacement/new employer if confirmed. Record any old work details needed for customer continuity as **historical — do not use for outreach**. If the departure date is unknown, say so; the date you learned of it is not necessarily the departure date.
3. Clear or replace obsolete work details in the person's current contact fields. Check secondary email and phone fields too. Do not move an invalid work address into **Email 2** simply to retain it: that is another contact field, not a historical archive. Keep verified personal details and preserve existing communication preferences. Leave fields blank if no valid replacement is known; do not invent placeholder values. If validation blocks saving, ask an administrator.
4. Update an outdated current job title or department where applicable, preserving the former role in the Note. Keep the Business Account's valid shared inbox and company phone; one employee leaving does not make those organization-level details obsolete.
5. Review pending outreach, cadences, marketing lists, open opportunities, and unsigned agreements. Stop outreach to obsolete addresses and identify the current contact/signer for ongoing work. A Note or inactive relationship does not by itself guarantee that outbound tools stop sending. Preserve completed work and signed documents.

### Person Account with a business relationship

A Person Account represents the individual. Its relationship to a Business Account is **indirect**, even if someone informally calls that business the person's primary employer. Do not edit the Person Account's backing Contact to turn it into a business Contact.

1. Open the person’s **Related Accounts** or the business’s **Related Contacts**, where available, and find the specific employer relationship.
2. Edit the **relationship**, not the person: clear **Active** and set **End Date** to the confirmed date the relationship ended. Preserve a known Start Date and historical role. Do not use **Remove Relationship** to record a departure.
3. If the person still represents the organization in another capacity, record that fact and adjust the role appropriately instead of treating all involvement as ended.
4. If a new employer is confirmed, search for that Business Account first and add the appropriate relationship to the same person. Keep the old relationship inactive. Do not invent a new employer or create another Person Account.

**Expected result:** the same Person Account retains its history, current fields contain only usable contact details, and the former business relationship remains available as history rather than current employment.

If the related list, relationship edit action, or fields are unavailable, save the departure Note, clean up obsolete contact details, and send the person/business links to an administrator to finish the relationship update. Do not assume these controls are exposed to every user.

### Contact with a Business Account

First distinguish the Contact's **Account Name** (its direct primary account) from additional indirect relationships. **Direct** is derived from Account Name; it is not an employment-status checkbox.

- **Additional/indirect employer relationship:** keep the Contact and mark that relationship inactive with its confirmed End Date, as above.
- **Primary/direct employer, new employer known:** ask an administrator to confirm that changing Account Name preserves the previous relationship. Then change the existing Contact's Account Name to the verified new Business Account. Retain the former employer as an indirect relationship, inactive and end-dated, and verify both relationships after saving. Do not assume the previous relationship is retained automatically; Salesforce's account settings control that behavior. Review sharing/access and activity rollups after the move.
- **Primary/direct employer, new employer unknown:** retain the Contact and, for now, its existing Account Name; document clearly that the employment ended. Set the old relationship inactive and end-dated where editing is available, with administrator help if needed. This is a historical association pending resolution, not evidence of current employment. Do not blank Account Name, invent an “Unknown Employer” account, convert record types, or delete/recreate the Contact as a routine workaround. Account Name-based lists and integrations can still show the former employer; flag that limitation for the administrator.

Keep the original Business Account and its sales history. Search for the replacement employee and relate their own record to the business. Update current deal contacts and signer selections only where appropriate; do not transfer the departing person's historical activity to the replacement or move old company purchases to the person's new employer.

### What is verified, and what needs administrator confirmation

Reviewed October 19, 2026. Existing PBG documentation supports Notes and preserving distinct people/business records. Saved PBG page metadata includes Person Account business relationships, a Business Account related-contact list, and Person Account email/phone fields. This review did **not** include a live-org end-to-end test or verification of each user's field access.

| Item | Evidence and limit |
| --- | --- |
| Current email/phone fields | Saved Person Account page metadata includes Email (`PersonEmail`), Email 2 (`Email_2__pc`), email type fields, Phone, mobile/home/other/assistant phone fields, and phone type fields. PBG integration code also references Contact `Email`, `Email_2__c`, and phone fields. Inspect the actual form; do not assume every field is visible or editable. |
| Relationship lifecycle fields | Salesforce standard Account Contact Relationship fields include Active (`IsActive`), Start Date, End Date, Roles, and read-only Direct (`IsDirect`). These do not require new custom fields, but layouts and field permissions may need configuration. Set Active and End Date explicitly; no automatic synchronization between them was verified. |
| Primary-account changes | Salesforce supports preserving the previous account relationship, subject to administrator settings. PBG's current setting was not verified. Confirm it before moving a Contact. |
| Former Employee role/status | A dedicated value or field was not verified. Use Notes and relationship lifecycle fields; adding a “Former Employee” role/status is a configuration proposal, not an existing required option. |
| Historical work-detail fields and automation | Dedicated historical email/phone fields, automatic departure handling, outreach suppression, and current-employer reporting filters were not verified. Implement and test separately if needed. Do not rely on field history as the only archive; Account Contact Relationship does not support standard field history. |

Administrator acceptance check: verify the relationship edit controls for affected seller profiles; test retaining the former employer during a primary-account change; confirm current-employer reporting excludes ended relationships; and check that integrations, duplicate processing, and outreach tools neither restore obsolete details nor treat historical employment as current. No Salesforce configuration or customer records were changed by this documentation update.

Salesforce references: [relationship fields](https://help.salesforce.com/s/articleView?id=sf.account_contact_relationship_fields.htm&language=en_US&type=5), [Contacts to Multiple Accounts](https://help.salesforce.com/s/articleView?id=shared_contacts_overview.htm&language=en_US), and [relationship considerations and settings](https://help.salesforce.com/s/articleView?id=sales.shared_contacts_considerations.htm&language=en_US&type=5).

## Connect the customer to a sale

After saving, check the account type, owner, spelling, and contact details. Opportunity forms and signer roles differ by sales process:

- [Event Sales contacts and signer roles](/event-sales/getting-started/accounts-contacts)
- [Ticket Sales contacts and moving a sale to a business](/ticket-sales/getting-started/accounts-contacts)
- [Partnerships CRM guide](https://agilitek-solutions.gitbook.io/partnerships-crm-agilitek)

Ask an administrator to handle a mistaken account type or a duplicate merge.
