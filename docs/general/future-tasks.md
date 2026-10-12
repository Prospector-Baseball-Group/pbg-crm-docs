# Schedule and find future tasks

Use an open Task for work you still need to do. These scheduling and Activity Timeline checks apply across Salesforce apps where the controls are available.

## Create a future task

1. Open the Account, Contact, or Opportunity that provides the context.
2. Choose **New Task** from the available actions or create it from **To Do List**.
3. Enter a specific subject, such as **Confirm the customer's requirements**.
4. Set the due date and **Assigned To**. Keep the status open.
5. Check **Name / Contacts** and **Related To**. Relate it to the Opportunity when it concerns that deal.
6. Save and reopen the task to confirm the date, owner, status, and relationship.

The general **Log Task** action defaults to Completed and is designed for outreach that already happened. If you use it for future work, change the status and date deliberately. Use the activity instructions for [Ticket Sales](/ticket-sales/sales/log-activities) or [Event Sales](/event-sales/sales/activities).

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

## Keep the sale's next step current

A Task's due date and status describe that task. **Next Step** and **Follow-Up By** on an Opportunity describe the sale's next action. Creating a Task does not, by itself, update those Opportunity fields.

Follow [Ticket Sales follow-up fields](/ticket-sales/sales/future-tasks#task-due-date-versus-opportunity-follow-up) or [Event Sales follow-up and automatic tasks](/event-sales/sales/activities#set-the-next-action) for the process-specific behavior.

**Success looks like:** one open Task with the right due date, owner, and related record, visible with the appropriate filters.
