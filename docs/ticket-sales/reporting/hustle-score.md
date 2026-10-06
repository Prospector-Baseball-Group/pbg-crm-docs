# Understand Hustle Score

Hustle Score is a **count of completed Tasks**, grouped by rep and Activity Type. It is not a weighted score or a completion percentage.

## What counts today

A Task must be closed, and its Activity Type must not be **Email (Inbound)**. The current homepage then chooses the activity day as follows:

| Task | Timestamp used for today's window |
| --- | --- |
| Task with an imported 3CX Call Start Time | The 3CX call start timestamp |
| Task without a 3CX Call Start Time | Salesforce Completed Date/Time |

The day boundaries use the viewing Salesforce user's timezone. A call imported later can therefore count on the day it actually started rather than the day its Task was created or completed.

**Task Due Date is not the homepage's completed-activity date filter.** Open tasks due today use due date separately.

## Read My Activity and Full Team

**My Activity** shows your completed-task count and Activity Type breakdown, plus calls, call minutes, and open Ticket Sales tasks due today. **Full Team** groups visible activity by assigned rep.

The activity count is not restricted to Tasks attached to Ticketing Opportunities. It can include other completed Tasks accessible to the viewer. The separate **Open Ticket Sales tasks due today** metric is restricted to that context.

The top **Outbound calls today** card counts eligible **Call (Outbound)** Tasks. The personal calls metric includes both inbound and outbound calls. These can correctly differ.

## Use Open report

Choose **Open report** from the Hustle Score panel for the saved activity report. Before comparing its total to the homepage, check its date field, completion status, inbound-email exclusion, assignee scope, and timezone. Custom reports may use different date definitions, especially for imported calls.

::: info Verified difference in the linked report
On October 6, 2026, the linked **Activities - Today's Hustle Score** report used **Completed Date/Time = Today**, closed Tasks only, and the same inbound-email exclusion. The homepage also uses the 3CX call-start rule above. Their totals can therefore differ when a call's start day and Task completion day differ. Compare the timestamps before treating a difference as missing activity.
:::

## Troubleshoot a missing activity

1. Open the actual Task and confirm its assigned rep and completed/closed status.
2. Check the Activity Type; inbound email is intentionally excluded.
3. If 3CX Call Start Time is present, check that time and day.
4. Otherwise, check Completed Date/Time.
5. Refresh Home and compare the same scope.
6. If still different, share the Task and report links with your administrator.

An email in a mailbox or an item visible on an activity timeline is not enough to prove there is an eligible reportable Task. Avoid logging a duplicate just to increase the displayed count.
