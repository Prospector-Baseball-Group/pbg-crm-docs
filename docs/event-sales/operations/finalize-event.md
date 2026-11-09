# Finalize the event

After the event, record what it actually came to. Finalizing bills any charges that weren't already scheduled and marks the event finalized. A deal can't become **Fully Paid**, and its commission can't be earned, until the event is finalized.

Finalize Event works in one of two ways:

- **Events with products** (Akron RubberDucks): you confirm each product's final quantity or amount. See [Price an event with products](../sales/event-products).
- **Events without products** (Jacksonville, Lancaster, and any event without saved products): you enter one total for post-event charges.

::: info Applies with the payments release
Finalize Event is part of the payments and commissions update. The itemized form for events with products was released on November 9, 2026. See [Recent changes](../reference/recent-changes) for verification status.
:::

## Before you start

- The opportunity's Stage is **Contract Signed** or **Closed Won**.
- The event has happened: today is on or after its last date (Event End Date, or Event Start Date for a single-day event).
- You know the final charges, or that there were none. Check the current [BEO](../beos/overview) for counts, consumption, and additional charges.

## Events with products

1. Open the Event Sales opportunity.
2. Select **Finalize Event** in the header actions.
3. Read the note at the top. If the current BEO changed a guest count or amount, the form fills it in and says so, for example *Filled in 1 final amount from BEO version 2. Check them before finalizing.*
4. Review each line. **Contracted** shows what was agreed; enter the **Final** amount, or change the guest count for a per-person item.
5. Enter the actual for every line tagged **Enter actual**. These are Actual After Event products such as a host bar. Under Contracted they show the estimate, as *est. $X*, or *No estimate*.
6. Use **Add something from the event** to add cash bar, cash bar tax, or extra consumption, then enter its amount. Remove a line you added with its **X**.
7. Check **Tax exempt** if the client doesn't pay sales tax.
8. Review the summary: **Final revenue (Amount)**, **Final client total**, **Already scheduled**, **New post-event payment**, and **Paid at the event (no payment)**.
9. Select **Finalize Event**.

**Expected result:** the *Event finalized* message appears. Any billed amount that isn't already scheduled becomes a **Post-Event Charges** payment due 30 days after the event. The Amount becomes the final revenue, and Payment Status no longer shows **Awaiting Event Finalization**. On the Revenue tab, lines added here read *Added at finalize*.

### How the BEO is used

Finalize Event starts from the BEO, but only where someone changed a quantity or amount on the BEO after it was created. Lines nobody changed on the BEO keep the deal's current product amounts. BEO charges tagged with a product are added as lines. If some BEO charges have no product, the note says how much, for example *$60.00 of BEO charges have no product; add them below.*

### What gets billed

- **Cash bar** and anything else **paid at the event** counts as revenue but never creates a payment.
- Tax and gratuity recalculate from the final lines. You can type over a calculated amount to match the final invoice.
- If payments already scheduled are more than the final client total, the form says so. Reduce a scheduled payment or record the refund on the [Payments tab](/general/payments).

### Example

All amounts are fictional. This continues the [products example](../sales/event-products#example): the client total was $3,304.98, and the Deposit and Usage Fee Balance already cover it.

| Line | Contracted | Final |
| --- | ---: | ---: |
| Room fee | $500.00 | $500.00 |
| Catered food | $1,400.00 (40 guests) | $1,540.00 (44 guests) |
| Host bar | est. $800.00 | $860.00 |
| Cash bar, added at the event | | $300.00 |
| Cash bar tax, added at the event | | $20.25 |

| Summary | Amount |
| --- | ---: |
| Final revenue (Amount), including cash bar | $3,200.00 |
| Final client total: lines, $432.00 gratuity, and $224.91 tax | $3,556.91 |
| Already scheduled | $3,304.98 |
| New post-event payment, due 30 days after the event | $251.93 |
| Paid at the event (no payment) | $320.25 |

## Correct final amounts

If the final invoice changes after you finalize, correct it on the **Revenue** tab.

1. Open the opportunity's **Revenue** tab.
2. Select **Correct final amounts**.
3. Change the final amounts, then select **Save products**.

**Expected result:** the Amount and client total update. What happens to payments depends on what was paid:

| Situation | Result |
| --- | --- |
| The post-event payment is unpaid | It's updated to the corrected amount, or removed if nothing is left to collect |
| Already paid, and the total went up | A new **Post-Event Charges** payment is added for the difference |
| Already paid, and the total went down | A warning says payments are more than the corrected client total. Reduce a scheduled payment or record the refund on the Payments tab |

**Who can correct:** anyone who can edit the deal, until commission is earned. After that, only a commission admin can. A change after commission is earned flags the deal **Reversal Needed** for commission review. See [Commission & revenue splits](/general/commission#for-commission-admins-commission-review).

## Events without products

1. Open the Event Sales opportunity.
2. Select **Finalize Event** in the header actions.
3. Enter the **Post-event charges** billed after the event. When the current BEO lists additional and consumption charges, the form shows that amount as a guide.
4. If nothing was billed after the event, check **No additional charges** instead.
5. Select **Finalize Event**.

**Expected result:** the *Event finalized* message appears. Charges above zero become a **Post-Event F&B** payment due 30 days after the event, and the Opportunity Amount rises by the same amount. The event's finalized date is recorded either way, and Payment Status no longer shows **Awaiting Event Finalization**.

### Example

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
| *This event was already finalized on [date].* | Nothing more to do. On an event with products, use **Correct final amounts** on the Revenue tab. Otherwise, add a payment on the [Payments tab](/general/payments#add-a-payment) |
| *You need edit access to this deal to finalize it.* | Ask the deal's owner or your manager |
| *Enter post-event charges of zero or more, or check No additional charges.* | Enter an amount, or check the box |
| **Finalize Event** isn't in the header | It appears on won Event Sales opportunities. Check the Stage, then the overflow menu |

Next: [Track payments on a deal](/general/payments) · [Prepare the event handoff](./handoff)
