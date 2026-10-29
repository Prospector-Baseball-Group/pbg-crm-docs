# Partnership payments and barter

Partnership opportunities track their payment schedule on the **Payments** tab, the same tab Ticketing and Event Sales use. It replaces the Scheduled Payments list on the partnership opportunity page.

::: info Applies with the payments release
This page describes the payments and commissions update. See [Recent changes](./recent-changes) for its verification status.
:::

## Where the schedule lives

Open the partnership opportunity in the **Agilitek Partnership Module** and select **Payments**. The [payments guide](/general/payments) explains the summary bar, the payment cards, adding a payment, and recording a receipt.

Existing scheduled payments were moved onto each deal's Payments tab with their amounts, due dates, and any recorded receipts. Add and update payments on the Payments tab. Agilitek's separate Scheduled Payments records no longer feed Payment Status or commission.

When a partnership deal is won without payments, Salesforce adds a starting schedule:

- a **Full Payment** for the cash amount, and
- a **Trade (Barter)** payment for the barter amount,

both due at contract start. Split the Full Payment into installments to match the agreement.

For a multi-year agreement, each annual opportunity has its own Payments tab. Schedule each year on its own opportunity.

## Barter

Barter is scheduled as a **Trade (Barter)** payment so the schedule adds up to the full deal value of cash plus barter.

When the trade has been delivered, record it like any other receipt:

1. Enter the barter value in **Amount Received**.
2. Enter the delivery date as the **Received Date**.
3. Choose **Trade** as the **Payment Method**.
4. Describe what was delivered in **Receipt Reference**, for example *Radio spots, June flight*.

A deal is fully paid only when its barter has been delivered as well as its cash received.

## Example

A fictional partnership with a $25,000 deal value: $20,000 in cash and $5,000 in barter.

| Payment Type | Due Date | Amount Due | Received |
| --- | --- | ---: | --- |
| Installment | April 1 | $10,000 | Check, April 3 |
| Installment | July 1 | $10,000 | |
| Trade (Barter) | July 1 | $5,000 | |
| **Scheduled** | | **$25,000** | |

The deal shows **Partially Paid** until the second installment is received and the barter delivered.

## Commission

Partnership commission is paid on deal value, cash plus barter, once the deal is fully paid. See [Commission & revenue splits](./opportunity-splits) for splits on partnership deals.

[Recent changes →](./recent-changes)
