# Build the payment schedule and preview

A ready agreement has complete signer information and a payment schedule that exactly matches **Total Sales Price**.

## Set the schedule

1. Open **Payment Schedule**.
2. Review the first payment, which starts with the Opportunity Amount. Enter its date.
3. Use **Add Payment** to split the amount into installments, up to **six payments**.
4. Give every payment a date and an amount greater than zero.
5. Use the arrows to put payments in the intended order; use **Delete** to remove an unwanted row.
6. Confirm **Scheduled total = Total Sales Price** and wait for changes to save.

![Payment Schedule tab showing three installments in a signed demo agreement](/images/ticket-sales/payment-schedule.png)

*JG demo screenshot from the earlier walkthrough. Gray fields are locked because this example is Signed. Drafts use the same controls with editing enabled. The pictured dates and amounts are examples, not recommended terms.*

## Worked example

For a fictional **$1,200** agreement, you could schedule three agreed payments of **$400**. The total is $1,200. Two $400 payments leave a $400 gap and will not pass readiness. A zero-dollar row also blocks preview, even if the other payments add up correctly.

Payment sequence is visible in the document. Check the dates and order rather than assuming the rows sort themselves chronologically.

## Generate Preview

1. Resolve every item in **Complete before preview**.
2. Choose **Preview**.
3. Open the generated PDF and read it in full.
4. Check team, season, customer, signer, Order ID, total, payment dates, payment order, and terms.
5. Return to the workspace. Confirm **Preview Ready** before sending.

Preview prepares the Adobe draft and document; it does not send the signature email to the customer.

::: warning Changed details after preview?
A changed customer detail, signer, total, or payment schedule can make the preview stale. Generate and review a fresh **Preview** before sending. The send action requires a current preview of the saved agreement data.
:::

Continue to [Send and track](send-track.md).
