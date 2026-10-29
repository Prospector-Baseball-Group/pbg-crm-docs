# Schedule payments

A valid payment schedule explains what the customer owes and when. The core schedule must reconcile to the agreement's Usage Fee.

The payment terms on an agreement are the opportunity's payments. They also appear on the opportunity's [Payments tab](/general/payments), and they stay with the opportunity if the agreement is revised.

## The rule to remember

**Deposit (only when one is charged) + one Usage Fee Balance = Usage Fee.**

- Add a **Deposit** only when the customer pays one. There are no $0 payments.
- The **Usage Fee Balance** covers the rest of the fee and must be due **before the event date**. A Deposit for the whole fee needs no Balance.
- Use at most one of each. Waived payments don't count toward the total.

The opportunity's Payments tab and reports call the Usage Fee Balance a **Balance**. Agreements and PDFs keep the name Usage Fee Balance.

## A worked example

All amounts in this example are fictional.

| Item | Amount | Meaning |
| --- | ---: | --- |
| Usage Fee | $2,400 | Agreed usage fee in Event Details |
| Deposit payment | $600 | First part of the usage fee |
| Usage Fee Balance payment | $1,800 | Remaining usage fee, due before the event |
| Core payment total | **$2,400** | Matches the Usage Fee |

A Deposit of $600 plus a Balance of $2,400 would be incorrect: it totals $3,000. The balance is the remaining amount, not another copy of the full fee.

## Add or edit terms

1. Open **Scheduled Payments**. The line at the top compares the Usage Fee with Deposit + Usage Fee Balance.
2. Review the existing **Payment terms** before adding one. A new agreement starts with the opportunity's existing payments, or with a Usage Fee Balance and, when one is charged, a Deposit.
3. Select **Add Payment Term** when the needed type does not already exist.
4. Choose **Payment Type**, enter **Amount** (greater than zero), and set the required **Due Date**.
5. Add invoice or notes information if useful.
6. Select the form's **Add Payment Term** button to create the new row.
7. To change an existing row, edit its fields and wait for autosave.
8. Use **Recheck details** and review the validation banner.

Payment types on the agreement are **Deposit**, **Usage Fee Balance**, **Add-On / Service**, **Food & Beverage**, **Staffing**, and **Other**.

Do not add a second Deposit or a second Usage Fee Balance to correct an amount. Edit the existing core term. If duplicate terms exist, decide which row belongs in the contract and correct the extra row's type, or ask an administrator for help.

![Blank Add payment term form with type, amount, due date, receipt, invoice, and notes fields](/images/agreement-payment-form.jpg)

<p class="caption">Earlier live capture of the blank entry form, cropped. The current form also includes Payment Method and Receipt Reference.</p>

## Record a receipt

When a payment is received, enter **Received Amount**, **Received Date**, **Payment Method**, and **Receipt Reference** (a check number or transaction ID) on its row. All four are required to record a receipt. They record a payment already collected; they don't charge a card or move money.

You can record receipts at any time, including after the agreement is sent or signed.

## After the agreement is sent

Once the agreement is **Out for Signature** or signed, each payment's type, amount, and due date lock, and payments can't be deleted. You can still record receipts and add new payments, such as post-event charges. To change the plan itself, revise the agreement through the correction process.

Charges billed after the event are added with [Finalize Event](../operations/finalize-event), not by editing the signed terms.

## Fix the common blockers

| Message or issue | Correction |
| --- | --- |
| *Add a Usage Fee Balance payment for the $… of the Usage Fee that the Deposit doesn't cover.* | Add one Usage Fee Balance for the remaining amount |
| *Only one Deposit payment is allowed…* or *Only one Usage Fee Balance payment is allowed…* | Correct the extra row's type instead of adding more rows |
| *Deposit + Usage Fee Balance total … but the Usage Fee is … These amounts must match.* | Correct the fee or the payment amounts to match the actual agreement |
| *The Usage Fee Balance must be due before the event date.* | Move the Balance due date before the event |
| *Amount must be greater than zero.* | Payments can't be $0. If no deposit is charged, don't add a Deposit |

Signing does not recalculate payment dates or turn these terms into an external payment transaction.

[Practice the payment check →](../reference/practice)
