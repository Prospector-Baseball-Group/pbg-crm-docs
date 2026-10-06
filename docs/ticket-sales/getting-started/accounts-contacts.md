# Find and create accounts and contacts

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
5. If two records appear to represent the same customer, compare them and use **Flag Duplicate** or send their links for review. See [duplicates and missing history](../customers/data-quality.md).

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

## Add the Primary Contact to a deal

In the Ticketing Opportunity form, select **Account Name** first. The **Primary Contact** picker then becomes available and prioritizes people related to that account. Verify the selected person, especially if broader search results are offered.

Primary Contact identifies the main person for the sale. The **Opportunity Owner** identifies who manages the sale. **Quota Credit Rep** is a separate reporting attribution field.

## Move an existing sale to the business

If you created the ticket opportunity on a Person Account and later confirm that the organization is the buyer, use the existing deal's **Convert to B2B Opportunity** action.

1. Confirm that the Person Account has the correct relationship to the existing Business Account.
2. Open the person's Ticketing Opportunity and choose **Convert to B2B Opportunity** in the header or action dropdown.
3. Select the intended **Business**. If the flow reports no related accounts, stop and have the relationship corrected first.
4. Complete the flow and choose **Finished - View Changes**.
5. Verify **Account Name** now identifies the business and **Primary Contact** still identifies the person. Recheck the deal's owner, Division, stage, and amount.

The active flow changes the Account on the same opportunity and sets the person as its primary contact/contact role. It does not convert the Person Account into a company or create another sale. For an opportunity already on a Business Account, or a different correction, ask for the appropriate edit rather than forcing this conversion.

::: tip Log on the record that matches the conversation
Use the Opportunity for deal-specific outreach. Use the Business Account for a broader organizational conversation. Selecting contacts preserves the people involved. See [Log activities](../sales/log-activities.md).
:::

## After saving

Check the account type, owner, spelling, and contact details. Reopen the Opportunity and confirm it points to the intended Account and Primary Contact. Ask an administrator to handle a mistaken account type or a duplicate merge.
