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

## Campaigns

Campaign guidance verified **October 16, 2026**.

### How do I create an active campaign?

1. Open **Campaigns** from the app navigation menu. If it is not in your menu, use **App Launcher**, search for **Campaigns**, and open it.
2. Click **New**.
3. Enter a **Campaign Name**, choose your **Division**, and complete the other details for the initiative.
4. Check **Active** if the campaign should appear in active-campaign lists. **Active is unchecked by default**; PBG is retaining that Salesforce default.
5. Click **Save** and confirm the campaign opens successfully.

**Active** and **Status** are separate fields. Choosing a Status such as **In Progress** is not a substitute for checking **Active**. If you intentionally leave Active unchecked, the saved campaign remains inactive and can still be found using the steps below.

### I saved a campaign. Why is it missing from My Active Campaigns?

**My Active Campaigns** includes only campaigns you own with **Active** checked. Creating a campaign and owning it are not always the same thing, so also check **Campaign Owner**.

**All Active Campaigns** includes active campaigns you can access across owners; it still excludes inactive campaigns. There is currently no general **All Campaigns** list in the standard selector. A missing row in an active list does not mean your save failed—find the existing campaign before creating another one.

### How do I find and activate an inactive campaign?

**Start with Recently Viewed if you just created or opened it:**

1. Open **Campaigns**.
2. Click the list-name dropdown beside **My Active Campaigns** (or whichever list is selected).
3. Choose **Recently Viewed**, then open the campaign by name. This list can include inactive campaigns, but it is your recent history, not a complete campaign inventory.

**If it is not there, use global search:**

1. Click **Search** at the top of Salesforce. This is separate from **Search this list**, which only searches the selected list and cannot recover a row excluded by that list's filters.
2. Enter the campaign name and press **Enter**.
3. Open the matching result under **Campaigns**. If Campaigns is not in the results, use the search box's **Search by object type** dropdown to choose **Campaigns**, then search again. You can also select Campaigns in the search-results sidebar when shown.
4. On the campaign, click **Edit**, check **Active**, then click **Save**.
5. Return to **Campaigns → My Active Campaigns** and click **Refresh**. The campaign belongs there when you are its owner and Active is checked. If another user owns it, use **All Active Campaigns** or global search, subject to your record access.

A newly saved record may take a little time to appear in global search. Use the record opened after **Save** or **Recently Viewed** in the meantime. If you still cannot find it, or **New**, **Edit**, or **Active** is unavailable, ask your administrator to check campaign access. Include the campaign name, approximate creation time, and record link if available; do not create a duplicate as a workaround.

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

Use **Notes** for durable customer context and **Company Email** for a shared business inbox. On a Business Account or Person Account, choose **Notes → New**. On a Contact, choose **Related → Notes → New**. See [how to save and reopen Notes](/general/notes). Use a Task for outreach or a follow-up; see [customer data guidance](../customers/data-quality.md#keep-reference-notes-separate-from-outreach).

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

Do not assume it does. Check the imported Ticket Order, its buyer/business relationships, and **Matching Opportunity**, and link it from the right opportunity's **Tickets.com Orders** card. Historical backfills and review flags do not guarantee a new opportunity for every purchase. See [Ticket orders](../customers/ticket-orders.md).

### Why does an export repeat the same opportunity?

A report joining opportunities to several contacts or line items can have several rows for one opportunity. Check what each row represents before counting deals or summing Amount. See [Reports and dashboards](../reporting/reports.md).

## Agreements and access

### Does a payment schedule charge the customer?

No. It records the planned installments, which are the opportunity's payments. A sent or signed agreement is also separate from collecting payment or issuing tickets. Received payments come from the deal's linked Tickets.com orders. Follow [Payments and preview](../agreements/payments-preview.md) and your team's collection process.

### What does a User External Credential error mean?

It needs an administrator's access/integration check. Send the exact error, agreement link, and action you attempted. Changing the customer or creating another opportunity is not the remedy. See [agreement troubleshooting](troubleshooting.md#adobe-or-credential-error).

### I can use one sales module but another is missing. What should I do?

Check **App Launcher** first. Ask your administrator to verify the app, record-type, object, field, and record access needed for your role. Being able to see another module's records does not necessarily let you edit them. See [Access and onboarding](../administration/access.md).

Still stuck? Use the [support-request checklist](troubleshooting.md#a-useful-support-request). Share customer details through the internal support channel.

## How do I send a PDF or schedule as a link?

Upload the document to **Files**, create a **Public Link** if your access allows it, and test it in a signed-out window. Follow [Files & public links](/general/files-public-links) for the steps and help with missing permissions.
