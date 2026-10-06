# Schedule and find future tasks

Use an open Task for work you still need to do. Keep **Next Step** and **Follow-Up By** on the Opportunity current so the deal also appears correctly in your pipeline.

## Create a future task

1. Open the Account, Contact, or Opportunity that provides the context.
2. Choose **New Task** from the available actions or create it from **To Do List**.
3. Enter a specific subject, such as **Confirm the group's final ticket count**.
4. Set the due date and **Assigned To**. Keep the status open.
5. Check **Name / Contacts** and **Related To**. Relate it to the Opportunity when it concerns that deal.
6. Save and reopen the task to confirm the date, owner, status, and relationship.

The general **Log Task** action defaults to Completed and is designed for outreach that already happened. If you use it for future work, change the status and date deliberately. See [Log activities](log-activities.md).

## A task appeared, then disappeared

Start with the timeline filters. With Einstein Activity Capture enabled, Salesforce's default **Within 2 months** date range can hide work scheduled further into the future. A task due three months from now can save successfully and then disappear when the timeline refreshes. Salesforce explains that the date filter covers both past and future activities in its [Activity Timeline settings guidance](https://help.salesforce.com/s/articleView?id=sales.activity_timeline_filters.htm&language=en_US&type=5).

1. Open the record's **Activity** timeline and its filter/settings gear.
2. Set **Date Range → All time**.
3. Select **My activities** for work involving you, or **All activities** to include other activities you have access to.
4. Make sure **Tasks** is included under Activity Types.
5. Choose **Apply & Save**, then expand **Upcoming & Overdue**.

![Salesforce timeline settings showing date range, activity scope, Tasks, and Apply and Save](/images/ticket-sales/timeline-filters.jpg)

*Current filter panel, captured on a JG training opportunity on October 6, 2026. The image shows Within 2 months selected; choose All time to include more distant tasks. The panel was closed without saving a preference change.*

These filters change what you see; they do not change the task's due date or owner. **All activities** does not bypass sharing permissions. Check the filters in your own session rather than assuming someone else's settings apply to you.

## Check outside the timeline

Open **To Do List** in the bottom utility bar, or **Tasks** through app navigation where available. Review its own due-date, owner, and status filters. If you have the task link, open it directly.

If the task is still missing, give your administrator the task or related-record link, subject, due date, and assignee. They can check the saved record and your access. Check for an existing task before entering it a second time.

## Task due date versus Opportunity follow-up

| Field | What it controls |
| --- | --- |
| Task due date | When the individual task is due. |
| Task status | Whether that task is still open or completed. |
| Opportunity Next Step | The next action on the sale. |
| Opportunity Follow-Up By | When that sales follow-up is due. |

Creating a Task does not, by itself, update the Opportunity's follow-up fields. When using the Opportunity Log Task action, provide **both** Opportunity Next Step and Opportunity Follow-Up By to use the current transfer automation. Otherwise, update the Opportunity fields directly.

**Success looks like:** one open Task with the right due date and record, plus a clear next step on the sale.
