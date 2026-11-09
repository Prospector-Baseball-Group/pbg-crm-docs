# Log activities against a Business Account

Use **Related To** for the business or deal the activity concerns, and **Name / Contacts** (or **Name**) for the people involved. Selecting an individual alone does not reliably put the activity on every business related to that person.

This guide applies to the **PBG Sales** app across Ticket Sales, Event Sales, and Partnerships.

## Choose the business or the deal

| What the activity is about | Related To | People |
| --- | --- | --- |
| The overall relationship with a company, school, or group | The specific Business Account | Select the people involved |
| A particular sale, renewal, or event | The Opportunity whose Account is that business | Select the people involved |
| An individual's personal purchase | The Person Account or its relevant Opportunity | Select the individual |

A Task has one **Related To** record. You can still associate people with it. An activity related to an Opportunity can also appear in its Account's activity history; you do not need a second copy for the business. Check that the Opportunity's **Account** is the intended Business Account.

For example, if Morgan Lee represents the fictional Riverbend Company, use **Name = Morgan Lee** and **Related To = Riverbend Company** for a company-wide conversation. For its suite renewal, use the renewal Opportunity instead. Do not create a duplicate person to achieve the link.

## Log completed work from the Business Account

This is the clearest starting point when you want to choose a specific business.

1. In **PBG Sales**, open **Accounts** and find the Business Account. Confirm you have the organization, not a similarly named Person Account.
2. Open the action dropdown beside the account name and select **Log Task**. This action is in the record header; it need not be inside the **Activity** tab.
3. Enter a useful **Subject** and choose the actual **Type**, such as Call (Outbound), Meeting, or Email (Outbound).
4. Check **Assigned To**, **Due Date**, and **Status**. Use **Completed** for work already done. The form defaults to today, Completed, and Call (Outbound).
5. Use **Name / Contacts** to select the person or people involved. Related contacts appear first; search for an existing person before choosing **New Contact**.
6. Confirm **Related To** shows the Business Account you opened. This field is fixed on this form. To log against another business, cancel and open that business; to log against a deal, start from its Opportunity.
7. Enter the outcome and next action in **Comments**, then choose **Save Task**.
8. Open the business's **Activity** tab and verify the saved entry and people.

The form supports up to 50 contacts; the first selection is the primary person. Selecting a related Person Account's contact keeps the business in **Related To**. An account relationship by itself does not associate every past activity with the business.

::: tip Avoid duplicates
Check whether 3CX or email capture has already logged the interaction. Correct the existing activity's association where possible instead of logging the same call or email again.
:::

## Start from a person or schedule future work

On a Contact or Person Account, open **Activity → Log Task** (or the available header action), select the individual in **Name**, and explicitly set **Related To** to the intended Business Account or Opportunity. If the lookup currently searches a different object, switch its record type to **Accounts** or **Opportunities**, then search and select the record. Do not leave a Person Account selected merely because that is where you started.

For future work, use **New Task** from **Tasks** or an available task action. Keep the task open and set the due date, assigned owner, **Name**, and **Related To**. For a scheduled meeting, check the same person/business relationship on **New Event**, along with the start and end times. A completed Meeting-type Task records work already done; it does not schedule a calendar event.

To correct an existing Task, open the activity, choose **Edit**, and check **Name** and **Related To** before saving. Existing Task and Event layouts expose both fields. Email associations use the separate workflow below.

## Emails and Einstein Activity Capture

EAC captures email and attempts to associate it with Salesforce records. It does **not** guarantee that an email to a Person Account will be related to the Business Account you intended, and it does not use our 3CX-specific linking rule.

When sending from Salesforce, check **To** and **Related To**. If the composer says that **Related To** is for templates and merge fields and EAC determines the saved associations, do not treat that selection as proof of the final business link. Check the captured email after it arrives in Salesforce.

### Correct a captured email's associations

1. Open the captured email from the activity timeline to reach its email record.
2. Choose **Manage Associations**.
3. In the record-type dropdown, choose **Account** for a Business Account, or **Opportunity** for a specific deal.
4. Search for and select the intended record. Check **Related To** and retain the appropriate **Related People**.
5. Review **Apply associations to all emails in this thread** before saving. It was checked by default in the verified form. Leave it checked only when the association applies to the entire conversation; clear it when correcting just this email.
6. Choose **Save**, then reopen the intended business or Opportunity and verify the email association and timeline entry.

If you cannot find the record or do not have **Manage Associations**, ask your administrator to check access and the email record. Do not create a second email activity simply to make it appear in another place. Do not assume an email visible on a person's timeline qualifies that business for a particular activity report.

See Salesforce's [email matching guidance](https://help.salesforce.com/s/articleView?id=sales.eac_email_activity_flow.htm&language=en_US&type=5) for how EAC associations are selected.

## What 3CX handles automatically

For eligible 3CX calls with one clearly associated Business Account, the deployed automation retains the individual and chooses:

- **Exactly one open Opportunity:** that Opportunity; the call also rolls up to its Business Account.
- **No open Opportunities or several open Opportunities:** the Business Account.
- **No clear business, or multiple associated businesses:** no automatic business selection; review the activity manually.

Existing explicit business or Opportunity links are preserved. The historical 3CX backfill is complete for calls with a clear match. It did not relink historical emails or all other activity types. If a call concerns a different deal from the automatic selection, edit the existing call's **Related To**.

## Check the result before relying on a report

- Confirm the saved **Related To**, the people, date, status, and owner.
- On the intended Business Account, open **Activity**, refresh, and check the timeline filters. Use **All time** and include the relevant activity type when troubleshooting.
- For an Opportunity-linked activity, confirm the Opportunity belongs to that business.
- If the activity is still missing, check the actual record and your access before creating anything else. Share the record links and date through internal support.

A report's filters, owner scope, and chosen activity field still determine what it counts. A visible timeline entry is not proof that a particular redistribution report includes it.

For long-term customer reference information, use [Notes](./notes). For future work and timeline filters, see [Tasks & reminders](./future-tasks).

*Verified November 9, 2026: PBG Sales Business Account Log Task and captured-email Manage Associations forms inspected without saving customer changes; Sales Rep layout assignments and activity relationship fields checked in live metadata. The existing layouts support these workflows; no new fields were required.*
