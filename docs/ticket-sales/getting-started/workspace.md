# Navigate your workspace

Ticketing is a Salesforce **console app**. Records can open in workspace tabs, while the app navigation menu sits beside Home. The Ticket Sales homepage also provides a horizontal row of shortcuts.

![Ticket Sales homepage with an empty personal pipeline and its navigation and follow-up cards](/images/ticket-sales/ticket-sales-home.jpg)

*Current live interface, October 6, 2026. This empty personal view illustrates the layout; it is not a team performance report. The Team view control is permission-dependent.*

## The shortcut row

| Destination | Use it for |
| --- | --- |
| Opportunities | Sales pipeline and deal records |
| Tasks | Assigned work and completed activities |
| Email Templates | Reusable approved email content |
| Contacts | People related to organizations |
| Accounts | Individual and business customer relationships |
| Campaigns | Outreach audiences and campaign records |
| Ticket Orders | Imported ticket purchase information |
| Reports / Dashboards | Detailed analysis and saved reporting |

**New Ticket Opportunity** opens the correct sales creation form. **New Task** creates work to do. **Old Homepage** opens the previous Ticketing dashboard.

## Read the five summary cards

- **Overdue follow-ups:** open Ticketing Opportunities whose Follow-Up By is before today.
- **Due today:** open Ticketing Opportunities with today's follow-up date.
- **Next 7 days:** follow-up dates after today through seven days ahead.
- **Open pipeline:** the total Amount of open Ticketing Opportunities in the current scope.
- **Outbound calls today:** completed outbound-call activities in today's activity window. See the [3CX timing detail](../reporting/hustle-score.md).

Click a follow-up card to move to the work panel. Due today and Next 7 days both open the **This Week** tab, which includes today and the next seven days.

## Understand the panels

**Opportunity Follow-Ups** has Overdue and This Week tabs. Select an Opportunity to work the deal. **Opportunities Requiring Attention** flags missing follow-up dates, overdue dates, missing next steps, or stale/missing activity. Its **Open full list** button expands the small preview.

**Open Opportunities by Stage** summarizes pipeline. **Customer Opportunities** surfaces ticketing signals for customers tied to open Ticketing Opportunities; it is a short selection, not a complete customer list.

**Today's Hustle Score** offers My Activity, Full Team, and Open report. Quota information appears when an applicable active target plan and access are available.

## Personal and team scope

Personal mode selects your owned Ticketing Opportunities. The permission-controlled **Team view** toggle broadens the workspace to Ticketing records you can access. It does not automatically limit the view to the Division displayed by your user profile.

The Hustle Score **Full Team** tab is its own activity view. Do not treat it as identical to the Team view toggle or a division-only report. See [manager guidance](../reporting/manager-review.md).

::: info When a count and a preview differ
The follow-up preview is capped at 100 records, attention preview at 8, and customer signals at 8. The expanded attention table displays up to 2,000 records and reports the total. Use list views or reports for a complete large workload.
:::
