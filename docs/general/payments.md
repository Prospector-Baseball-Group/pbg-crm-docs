# Track payments on a deal

Every Ticketing, Event Sales, and Partnership opportunity tracks what the customer owes and what has been received on its **Payments** tab. The tab works the same way on all three lines, and agreements read and write the same payments.

::: info Applies with the payments release
This guide describes the Payments tab released with the payments and commissions update. See [Recent changes](./recent-changes) for its verification status.
:::

## Open the Payments tab

1. Open the opportunity.
2. Select **Payments**. It is the second-to-last tab, just before **Commission**.
3. Review the summary bar at the top of the **Payment Schedule** card.

| Summary item | What it shows |
| --- | --- |
| Payment Status | Where the whole deal stands; see the table below |
| Expected | What the customer is expected to pay for this deal |
| Scheduled | The total of the payments on the schedule, not counting waived payments |
| Received | What has been recorded as received |
| Balance Due | What is still owed on the schedule |
| Next Due | The due date of the next open payment |
| Fully Paid | The date the deal became fully paid, once it has |

| Payment Status | Meaning |
| --- | --- |
| Not Scheduled | The deal has no payments yet |
| Scheduled | Payments are scheduled; nothing has been received |
| Partially Paid | Some, but not all, of the schedule has been received |
| Fully Paid | Everything owed has been received. On Ticketing deals, every linked Tickets.com order is paid in full |
| Awaiting Event Finalization | Event Sales only: the payments are in, but the event hasn't been [finalized](/event-sales/operations/finalize-event) |
| Awaiting Ticket Order | Ticketing only: no Tickets.com order is [linked](/ticket-sales/customers/ticket-orders#link-your-tickets-com-orders) to the deal yet |

Two notices can appear under the summary:

- **A yellow note** such as *The schedule is $200.00 short of the deal's expected value.* means the payments don't add up to the deal. Add or correct a payment so the schedule matches what the customer agreed to pay.
- **A red note** such as *1 payment is past due ($600.00).* lists the balance on payments whose due date has passed. The payment's card also shows a **Past due** badge.

## Read a payment card

Each payment is a card with its type, number, and status: **Scheduled**, **Invoiced**, **Partially Paid**, **Paid**, or **Waived**.

| Field | Use it for |
| --- | --- |
| Payment Type | Deposit, Installment, Balance, Full Payment, Trade (Barter), Post-Event F&B, Add-On, F&B/BEO, Staffing, or Other |
| Due Date | When the customer agreed to pay |
| Amount Due | The agreed amount; it must be greater than zero |
| Balance | What is still owed on this payment |
| Amount Received, Received Date, Payment Method, Receipt Reference | The receipt, once money or a trade is received |
| Invoice Number, Invoiced Date | Your invoice, when one is sent |
| Notes | Anything the next person needs to know |

Changes save on their own. **Saving…** appears while a change saves. Picklists and dates save as soon as you choose them; text and amounts save when you leave the field.

## Add a payment

1. Select **Add Payment**. A **New payment** card opens with the amount that is not yet scheduled.
2. Choose the **Payment Type**, set the **Due Date**, and confirm the **Amount Due**.
3. Add an **Invoice Number** or **Notes** if they help.
4. Select **Add Payment** on the card. Select **Cancel** to discard it.

**Expected result:** the payment appears on the schedule and the summary bar updates.

When a deal is won and has no payments yet, Salesforce adds a starting schedule within a few seconds. Edit or split these payments to match what the customer agreed to.

| Line | Starting schedule |
| --- | --- |
| Partnership | A Full Payment for the cash amount and a Trade (Barter) payment for the barter amount, both due at contract start |
| Event Sales | A Balance for the deal amount, due a week before the event |
| Ticketing | A Full Payment for the deal amount, due at close and paid through Tickets.com |

### Example

All amounts are fictional. A $10,000 sponsorship with $8,000 in cash and $2,000 in barter could use this schedule:

| Payment Type | Due Date | Amount Due |
| --- | --- | ---: |
| Installment | March 1 | $4,000 |
| Installment | June 1 | $4,000 |
| Trade (Barter) | June 1 | $2,000 |
| **Scheduled** | | **$10,000** |

## Record a payment you received

1. On the payment's card, enter **Amount Received**.
2. Enter the **Received Date**.
3. Choose the **Payment Method**.
4. Enter a **Receipt Reference**: a check number, transaction ID, or short trade note.

The receipt saves once all four are filled in. Until then the card shows *To record this receipt, add the Received Date, Payment Method, and Receipt Reference.*

**Expected result:** the card's status changes to **Partially Paid** or **Paid**, the deal's Payment Status updates, and the card shows who recorded the receipt. Finance reviews receipts that deal owners enter before commission is approved.

Recording a receipt doesn't charge a card or move money. It records a payment that has already been received.

## What you can't change

- **Tickets.com receipts.** On Ticketing deals, received amounts come from the linked Tickets.com orders. Those fields are locked on the card, which says *Received through Tickets.com.* See [Link your Tickets.com orders](/ticket-sales/customers/ticket-orders#link-your-tickets-com-orders).
- **A signed or sent plan.** Once the deal's agreement is out for signature or signed, each payment's type, amount, and due date lock, and payments can't be deleted. You can still record receipts and add new payments, such as post-event charges. To change the plan itself, revise the agreement.
- **Waiving or deleting.** Only finance can. If a payment shouldn't be collected, ask finance to waive it.

## For finance

- **Waive or Restore** on a card keeps the payment on the schedule but stops it counting. The card says *Waived by finance. It no longer counts toward the schedule.*
- **Delete** removes a payment after you confirm. It isn't available once the agreement is out for signature or signed.
- Finance can see every deal's payments and edit them, including deals they don't own.
- The **Opportunity Payments** tab lists every payment, with the **Open Payments**, **Past Due Payments**, **Due This Month**, **Received This Month**, and **All Payments** list views.
- The **Collections** report folder and the **Commissions & Collections** dashboard summarize collections. See [Commission & splits](./commission#reports-and-the-dashboard).

## If something looks wrong

| What you see | What to do |
| --- | --- |
| *You need the Opportunity Payment User permission set to see payments.* | Ask your Salesforce administrator for the **Opportunity Payment User** permission set |
| *Payment Type, Due Date, and an Amount Due above zero are required.* | Complete all three on the card |
| *Enter the Payment Method and a Receipt Reference…* | Finish the receipt fields; a receipt entered by hand needs both |
| The payment fields are gray | The agreement is out for signature or signed, the payment is waived, or you can't edit this deal |
| **Waive** and **Delete** are missing | Only finance can waive or delete payments |
| Payment Status says **Awaiting Ticket Order** | Link the deal's Tickets.com order on its Ticketing page |
| Payment Status says **Awaiting Event Finalization** | Use **Finalize Event** after the event ends |

Related: [Commission & splits](./commission) · [Event agreement payments](/event-sales/agreements/payments) · [Ticketing agreement payments](/ticket-sales/agreements/payments-preview) · [Partnership payments](/partnerships/payments)
