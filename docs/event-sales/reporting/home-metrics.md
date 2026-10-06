# Read the home metrics

The Event Sales Home cards currently show a **fixed FY2027** period: **October 1, 2026–September 30, 2027**.

## What each card counts

| Card | Meaning |
| --- | --- |
| Total Closed Won $ | Amount on won Event Sales opportunities in the home fiscal scope |
| Closed Won $ Completed Events | Won amount where Event Date is before today |
| Closed Won $ Upcoming Events | Won amount where Event Date is today or later |
| Pipeline $ | Amount on open Event Sales opportunities in the home fiscal scope |
| Overdue Tasks | Open overdue tasks related to opportunities qualifying for that fiscal scope, with the selected ownership/division rules |

An event occurring **today** belongs in Upcoming, not Completed. “Completed Events” is a date-based classification, not evidence that an operational checklist has been completed. Opportunity Amount is a sales value, not a payment receipt total.

## Which fiscal period is used

For a dated opportunity, the Home metrics use **Event Date**. For an undated opportunity, they use its assigned **Season**. A dated record’s conflicting Season label does not override its Event Date for these cards.

The home fiscal year is fixed in the current implementation. Do not assume these cards automatically advance to another year without an update.

## Scope matters

**My Data** uses your opportunity ownership. **Team Data** respects the current user’s division and Salesforce record access. Users with no Division can have a broader accessible Team Data view.

The task and opportunity work previews and calendar retain their broader working scope; they are not restricted to the same FY2027 population as the cards. A record appearing below the cards does not mean it is counted in a card above them.

## Reconcile a number

1. Confirm My Data or Team Data.
2. Use an Event Sales report with the same ownership/division scope.
3. Apply Event Date from October 1, 2026 through September 30, 2027.
4. Account separately for undated opportunities assigned to Season 2027.
5. Apply the matching open/won condition.
6. Compare Opportunity Amount, not agreement payment receipts.

Native Opportunity fiscal filters generally follow **Close Date**. A report filtered by a native fiscal-year setting can therefore differ from the home cards, which use Event Date and the undated-Season fallback.
