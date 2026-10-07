# Frequently asked questions

Practical answers to questions raised during PBG's Salesforce rollout and daily use. Reviewed against current configuration and Salesforce guidance on **October 6, 2026**.

## Activities and follow-up

### Where did Log Task go?

Check the record header and its action dropdown. On Business Accounts, **Log Task** is near the account name; it need not be inside the Activity tab. The available action varies by record and access. Follow [Log activities](../sales/log-activities.md).

### Why did my future task disappear after I saved it?

It may be outside the Activity timeline's date range. Set **All time**, include **Tasks**, choose the appropriate activity scope, and **Apply & Save**. Check the saved task before recreating it. Follow [Find future tasks](../sales/future-tasks.md).

### Can I log one meeting with several people?

Yes. The custom Business Account Log Task form supports multiple contacts, up to 50. Select everyone who participated and keep the Business Account in Related To. This saves one Task; creating one copy per attendee would overstate activity. See the [contact picker](../sales/log-activities.md#business-account-contact-picker).

### Which type should I use for LinkedIn outreach?

Choose **LinkedIn Message** for a LinkedIn conversation. It is a current Activity Type alongside calls, email, Meeting, and SMS / Text. Use the type that describes the actual interaction.

### I logged a call. Why didn't the Opportunity's next step change?

The current transfer automation requires the Task to relate to the Opportunity and requires **both** Opportunity Next Step and Opportunity Follow-Up By. A Business Account task is relationship history, not automatically a deal follow-up. You can also update the two fields directly on the Opportunity.

### Should I log an email again if I sent it from Outlook?

Check whether it was already captured. The Outlook add-in and automatic mailbox capture are separate features; seeing an email in your mailbox does not prove it was saved or related correctly in Salesforce. Avoid another copy until you check the record, filters, and connection. See [captured email](../sales/email-campaigns.md#understand-captured-email).

### Why can I see an activity on a person but not the business?

Check the activity's **Name / Contacts** and **Related To**, plus the actual account relationship and timeline filters. A person being associated with a business does not mean every email or task will appear on every related business or opportunity. Give the administrator a specific activity and both record links if the association looks wrong.

### Why do my activity numbers differ from a report or 3CX?

Compare the actual measures: completed Tasks, outbound calls, and talk minutes are different. Check owner, type, date, time zone, duration availability, and reporting scope. The Ticket Sales homepage also uses a 3CX call's start time when present, while its linked Hustle report currently filters by completion time. Read [Hustle Score](../reporting/hustle-score.md) before comparing totals.

## Customers and ownership

### Is someone with a work email always a Business Account?

No. A person and their employer are separate entities. Use the appropriate Person Account or Contact for the person and the Business Account for the organization. Relate existing records rather than inferring account type from an email domain. See [Accounts and contacts](../getting-started/accounts-contacts.md).

### Can I move a person's ticket opportunity to their business?

Use **Convert to B2B Opportunity** on an eligible Person Account opportunity after the person has the correct business relationship. The current flow updates the existing opportunity and preserves the person as Primary Contact. See the [conversion steps](../getting-started/accounts-contacts.md#move-an-existing-sale-to-the-business).

### I flagged a duplicate. Why are both records still there?

The flag requests review; it does not immediately merge. Reviews are currently scheduled daily at **7:00 a.m. Pacific**, and uncertain cases can remain on hold. See [Flag a potential duplicate](../customers/data-quality.md#flag-a-potential-duplicate).

### Can my club sell to an Account owned by another club's rep?

A separate opportunity can have its own owner and Division on the same business. Confirm your access and team ownership policy. Do not duplicate the business or take over its Account Owner simply to track your deal. See [shared business relationships](../customers/data-quality.md#a-company-already-belongs-to-another-rep-or-club).

### Where should I store general notes or a company inbox?

Use **Notes** for durable customer context and **Company Email** for a shared business inbox. On a Business Account or Person Account, choose **Notes → New**. On a Contact, choose **Related → Notes → New**. See [how to save and reopen Notes](../sales/notes.md). Use a Task for outreach or a follow-up; see [customer data guidance](../customers/data-quality.md#keep-reference-notes-separate-from-outreach).

### Can I assume all old CRM history is in Salesforce?

No. Search likely matches, alternate contact details, and the full timeline before creating another record. Unresolved migration cases require record-specific review. See [missing history](../customers/data-quality.md#an-old-scorecrm-customer-or-activity-is-missing).

## Lists, amounts, and reports

### Why can't I change the columns in a shared list?

You may be able to use the list without permission to change its shared definition. **Clone** it, choose **Only I can see this list view**, and then use **Select Fields to Display**. Follow [Personal list views](../getting-started/list-views.md).

### Why is Amount locked in the Opportunity list?

Standard Opportunity list views do not support inline editing of **Amount**. Open the record and use **Edit**. For other fields, the cause can be record access, field access, layout settings, or the field itself. See [Edit a row](../getting-started/list-views.md#edit-a-row).

### What should I enter for a ticket package that includes food?

Enter the **full agreed package value, including food and beverage**, in Opportunity Amount. Imported gross/net ticket revenue and the agreement total remain separate measures to reconcile. Automatic reporting that splits the Ticketing opportunity total into ticket and F&B components is not currently established in this workflow. See [Understand revenue](../customers/revenue.md).

### Does changing the Season also change Close Date or fiscal year?

No. Season identifies what you are selling. Close Date identifies when the sale closes and drives standard Opportunity fiscal reporting. PBG's fiscal year currently starts October 1 and is named for its ending year. See [Season versus fiscal year](../customers/revenue.md#season-versus-fiscal-year).

### Does every ticket purchase automatically create a won opportunity?

Do not assume it does. Check the imported Ticket Order, its buyer/business relationships, and **Matching Opportunity**. Historical backfills and review flags do not guarantee a new opportunity for every purchase. See [Ticket orders](../customers/ticket-orders.md).

### Why does an export repeat the same opportunity?

A report joining opportunities to several contacts or line items can have several rows for one opportunity. Check what each row represents before counting deals or summing Amount. See [Reports and dashboards](../reporting/reports.md).

## Agreements and access

### Does a payment schedule charge the customer?

No. It records the planned installments in the agreement. A sent or signed agreement is also separate from collecting payment or issuing tickets. Follow [Payments and preview](../agreements/payments-preview.md) and your team's collection process.

### What does a User External Credential error mean?

It needs an administrator's access/integration check. Send the exact error, agreement link, and action you attempted. Changing the customer or creating another opportunity is not the remedy. See [agreement troubleshooting](troubleshooting.md#adobe-or-credential-error).

### I can use one sales module but another is missing. What should I do?

Check **App Launcher** first. Ask your administrator to verify the app, record-type, object, field, and record access needed for your role. Being able to see another module's records does not necessarily let you edit them. See [Access and onboarding](../administration/access.md).

Still stuck? Use the [support-request checklist](troubleshooting.md#a-useful-support-request). Share customer details through the internal support channel.
