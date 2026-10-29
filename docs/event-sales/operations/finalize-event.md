# Finalize the event

After the event, record the food, beverage, bar, and other charges billed after the event day. Finalizing adds them to the deal's payments and amount. A deal can't become **Fully Paid**, and its commission can't be earned, until the event is finalized.

::: info Applies with the payments release
Finalize Event is part of the payments and commissions update. See [Recent changes](../reference/recent-changes) for its verification status.
:::

## Before you start

- The opportunity's Stage is **Contract Signed** or **Closed Won**.
- The event has happened: today is on or after its last date (Event End Date, or Event Start Date for a single-day event).
- You know the post-event charges, or that there were none. Check the current [BEO](../beos/overview) for consumption and additional charges.

## Finalize

1. Open the Event Sales opportunity.
2. Select **Finalize Event** in the header actions.
3. Enter the **Post-event charges** billed after the event. When the current BEO lists additional and consumption charges, the form shows that amount as a guide.
4. If nothing was billed after the event, check **No additional charges** instead.
5. Select **Finalize Event**.

**Expected result:** the *Event finalized* message appears. Charges above zero become a **Post-Event F&B** payment due 30 days after the event, and the Opportunity Amount rises by the same amount. The event's finalized date is recorded either way, and Payment Status no longer shows **Awaiting Event Finalization**.

## Example

A fictional event signed for a $5,000 usage fee with $640 of bar charges billed afterward:

| Item | Amount |
| --- | ---: |
| Contracted amount | $5,000 |
| Post-event charges | $640 |
| New Opportunity Amount | $5,640 |
| New payment | Post-Event F&B, $640, due 30 days after the event |

## If you forget

Each morning, the owner of a won event that has ended, has payments, and isn't finalized gets a **Finalize event** task, one per deal. Finalize the event, then complete the task.

## If Finalize Event doesn't work

| Message | What to do |
| --- | --- |
| *Finalize Event is available after the event ends.* | Wait until the event's last date |
| *Finalize Event is available once the event is Contract Signed or Closed Won.* | Update the Stage to reflect the signed outcome first |
| *This event was already finalized on [date].* | Nothing more to do. To bill another charge, add a payment on the [Payments tab](/general/payments#add-a-payment) |
| *Enter post-event charges of zero or more, or check No additional charges.* | Enter an amount, or check the box |
| **Finalize Event** isn't in the header | It appears on won Event Sales opportunities. Check the Stage, then the overflow menu |

Next: [Track payments on a deal](/general/payments) · [Prepare the event handoff](./handoff)
