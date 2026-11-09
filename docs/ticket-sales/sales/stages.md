# Move through sales stages

Use Stage to communicate the customer's progress. The descriptions below are practical selling guidance; the available stage names and default probabilities are the current Salesforce configuration.

| Stage | Use when… | Default probability |
| --- | --- | --- |
| No Conversation | The prospect is identified, but outreach has not begun. | 10% |
| Attempted Outreach | You have reached out and are working to make contact. | 35% |
| Two-Way Conversation | The prospect is engaged and you are discussing a purchase. | 60% |
| Verbal Agreement | The buyer has verbally committed and final steps remain. | 90% |
| Closed Won | The sale meets your team's criteria for a completed sale. | 100% |
| Closed Lost | This sales opportunity is no longer proceeding. | 0% |

## Update a stage

1. Open the Opportunity.
2. Use the stage path or **Edit** to choose the new Stage.
3. Confirm the Amount and Close Date.
4. Update the Next Step and Follow-Up By for an open deal. In **PBG Sales**, they're key fields on the sales path: select the arrow at the left of the path to show them.
5. Save and verify the displayed Stage.

Default probability is a configured forecast assumption. It is not evidence that the customer has committed or paid.

## Close won

Season and Ticket Category must be populated. A selected Ticket Product must agree with the Ticket Category. Resolve the validation message directly instead of switching to another record type.

After closing, check ticket order linkage and follow the [agreement workflow](../agreements/overview.md) when required. Closed Won alone does not prove that an Adobe agreement is signed, that tickets are issued, or that money has been collected.

## Close lost

Record why the deal ended so the next person understands it. In **PBG Sales**, select **Edit**, set **Stage** to **Closed Lost**, and choose the **Loss Reason** in the **Why it was lost** section; add **Lost To** when you know where the buyer went. Add **Closing Notes** for anything else. **Primary Objection** is for what's holding back a deal that's still open. Keep the historical outcome accurate. A future selling cycle can be a new Opportunity with the correct Season and Type.

## Renewals, upsells, and add-ons

Choose the appropriate **Type** on the Ticketing Opportunity. Preserve the original sale and create a distinct opportunity for a new sales decision when that matches your team's process. Ticketing does not use the Partnerships Agreement renewal and multi-year inventory instructions.

::: warning Wrong stage options
If you see partnership or special-event stages, confirm the Opportunity record type. Ticketing has the six stages listed above. Salesforce rejects a stage that does not belong to the chosen sales process.
:::
