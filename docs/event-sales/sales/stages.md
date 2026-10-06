# Move through stages

Choose the stage that reflects the customer’s actual progress. Salesforce supplies the corresponding probability.

| Stage | Probability | Use it when |
| --- | ---: | --- |
| Interested | 10% | You are qualifying the inquiry and learning what the customer needs |
| Quoted | 40% | A quote has been provided and you are following up |
| Walkthrough | 60% | The opportunity is in the walkthrough stage of your sales process |
| Contract Sent | 80% | The contract has actually been sent to the customer |
| Contract Signed | 100% | The contract has been signed and the sale is won |
| Closed Lost | 0% | The customer will not proceed, or you have declined the booking |

## Update a stage

1. Open the opportunity in Event Sales.
2. Use the Stage field or stage path available on the record.
3. Complete any required fields shown by Salesforce.
4. Save and check the Stage and Booking Status.
5. Update the next step and follow-up task.

Event Date can be blank at Interested. It is required at Quoted, Walkthrough, Contract Sent, and Contract Signed. Closed Lost is exempt from that event-date requirement.

## Stage and reservation work together

Moving to **Contract Signed** sets Booking Status to **Booked** and clears the hold expiration. Moving to **Closed Lost** sets Booking Status to **Released** and clears the expiration.

Quoted, Walkthrough, and Contract Sent do not by themselves mean the location is reserved. Check Booking Status and every selected location.

::: tip Keep status evidence aligned
A generated PDF or a Ready to Send agreement is not evidence that a contract has been sent. Check the agreement’s actual Adobe status before recording Contract Sent. Confirm execution before recording Contract Signed.
:::

## Tasks can be created by stage changes

The workflow can create **Follow up on quote**, **Prepare for walkthrough**, and **Follow up on contract** tasks. Review the task’s due date and owner after changing stage. A task is a reminder; it does not mean an email was sent.

To record a loss with the required reason, use [Close lost or turn down](./close-lost).
