# Schedule payments

A valid payment schedule explains what the customer owes and when. The core schedule must reconcile to the agreement’s Usage Fee.

## The rule to remember

**Exactly one Deposit + exactly one Usage Fee Balance = Usage Fee.**

The Deposit row is required even when its amount is **$0**. The Usage Fee Balance needs a **Due Date**. These are payment-term rows, not just values displayed in Event Details.

## A worked example

All amounts in this example are fictional.

| Item | Amount | Meaning |
| --- | ---: | --- |
| Usage Fee | $2,400 | Agreed usage fee in Event Details |
| Deposit payment | $600 | First part of the usage fee |
| Usage Fee Balance payment | $1,800 | Remaining usage fee, with a due date |
| Core payment total | **$2,400** | Matches the Usage Fee |

A Deposit of $600 plus a Balance of $2,400 would be incorrect: it totals $3,000. The balance is the remaining amount, not another copy of the full fee.

## Add or edit terms

1. Open **Scheduled Payments**.
2. Review existing rows before adding a term.
3. Select **Add Payment Term** when the needed type does not already exist.
4. Select **Payment Type**, enter **Amount**, and set the required **Due Date**.
5. Add invoice or notes information if useful.
6. Select the form’s **Add Payment Term** button to create the new row.
7. To change an existing row, edit its fields and wait for autosave.
8. Use **Recheck details** and review the validation banner.

Do not add a second Deposit or a second Usage Fee Balance to correct an amount. Edit the existing core term. If historical duplicate terms exist, review which row belongs in the contract and use the available correction controls or ask an administrator for help.

![Blank Add payment term form with type, amount, due date, receipt, invoice, and notes fields](/images/agreement-payment-form.jpg)

<p class="caption">Live agreement control, cropped to the blank entry form. No payment was added for this screenshot.</p>

## What receipt fields mean

**Received Amount**, **Received Date**, and **Invoice Number** record information about payment collection. Enter confirmed details when the fields are editable in your workflow. They do not charge a card, collect money, or prove a bank deposit by themselves.

An executed agreement can lock the everyday workspace. If post-signature receipt fields are unavailable, have the authorized administrator or finance owner use the established process; do not unlock the contract to edit payment history.

## Fix the common blockers

| Message or issue | Correction |
| --- | --- |
| No Deposit | Add one Deposit, including a $0 row if that is the agreed arrangement |
| More than one Deposit or Balance | Reconcile the existing rows instead of adding another |
| Missing Balance Due Date | Enter the agreed date on the Usage Fee Balance payment row |
| Total differs from Usage Fee | Correct the fee or the payment amounts to match the actual agreement |

Signing does not recalculate payment dates or turn these terms into an external payment transaction.

[Practice the payment check →](../reference/practice)
