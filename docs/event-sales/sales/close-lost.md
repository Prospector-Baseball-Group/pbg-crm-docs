# Close lost or turn down

Record why a booking did not happen. Event Sales requires a **Loss Reason** before an event can be closed lost.

## Close the opportunity

1. Open the Event Sales Opportunity.
2. Select **Close Lost / Turn Down** from the record actions. Check the action overflow if it is not immediately visible.
3. Select **Loss Reason**.
4. If PBG declined the event, select **Turned Down by Us**, then a **Turned Down Reason**.
5. Enter **Lost To** when the customer chose a known alternate destination.
6. Add **Closure Notes**. Notes are required for an Other reason.
7. Save and confirm **Closed Lost** and **Released**.

## Or close it from the Edit window

In **PBG Sales**, the **Why it was lost** section (**Loss Reason**, **Turned Down Reason**, and **Lost To**) appears in the **Edit** window on any deal that isn't won.

1. Open the opportunity and select **Edit**.
2. Set **Stage** to **Closed Lost**.
3. In **Why it was lost**, choose the **Loss Reason**. Add **Turned Down Reason** and **Lost To** when they apply.
4. Select **Save**.

**Expected result:** the deal saves as **Closed Lost** with its reason. If no Loss Reason is chosen, Salesforce shows *Select a Loss Reason before closing this event. Use Turned Down by Us when we declined the booking.*

## Choose an accurate reason

| Situation | Loss Reason |
| --- | --- |
| The client's preferred date was already taken | **Preferred Date Unavailable** |
| PBG declined the booking | **Turned Down by Us**, with a **Turned Down Reason** |
| The customer chose not to proceed | The customer-loss reason that fits, such as **Price** or **Lost to Competitor** |

Use Turned Down by Us when the venue could not accommodate or chose not to accept the event. Use the appropriate customer-loss reason when the customer chose not to proceed. Do not infer a competitor or reason you have not confirmed.

**Preferred Date Unavailable** and the Turned Down Reason **Date unavailable** overlap. Use **Preferred Date Unavailable** when the client wanted a date that was already booked. Use **Turned Down by Us → Date unavailable** when PBG declined the booking for date reasons.

If you change Loss Reason away from Turned Down by Us, clear Turned Down Reason as well.

**Primary Objection**, in the Closing section, is a different field. Use it for what's holding back a deal that's still open, not for why a deal was lost.

## What happens next

Closed Lost releases the opportunity’s reservation and clears the hold expiration. Review open tasks so they do not continue prompting outreach for a closed sale.

If a signature request is already active, closing the opportunity is not the same action as cancelling that request. Follow [Cancel or correct](../agreements/cancel-correct) and verify the agreement’s status separately.

## Report on the result

Use **Event Sales Reports → Event Sales Lost & Turned Down**. It groups outcomes, loss reasons, and turn-down reasons, with counts and estimated opportunity Amount. Historical blanks appear as **Not recorded (historical)** rather than an invented reason.
