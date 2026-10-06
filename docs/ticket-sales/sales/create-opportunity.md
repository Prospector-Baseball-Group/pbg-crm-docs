# Create a Ticketing Opportunity

Create an Opportunity when you have a ticket sale to pursue and track. Keep separate sales decisions in separate opportunities; reuse the existing deal when you are only updating a conversation or correcting its details.

## Before you start

Find the customer Account, identify the main contact, and confirm the division and season. Search the Account's related opportunities to avoid entering the same sale twice.

## Create the record

1. Open **Ticketing → Home → New Ticket Opportunity**. From another entry point, select **Ticketing Opportunity** when Salesforce asks for the record type.
2. Enter **Name** and select **Account Name**.
3. Select **Primary Contact** after choosing the Account.
4. Confirm **Division**, **Type**, **Season**, **Stage**, and **Close Date**.
5. Add the sales details, **Follow-Up By**, and **Next Step**.
6. Choose **Save**. Open the saved record and verify the resulting name, customer, stage, and follow-up details.

![Blank New Ticketing Opportunity form showing customer, division, season, follow-up, and product fields](/images/ticket-sales/new-ticket-opportunity.jpg)

*Current live form. The pictured division is a default in the inspected session; always choose the division for your sale. No record was saved for this screenshot.*

## Fill the fields deliberately

| Field | What to enter |
| --- | --- |
| Name | A useful description of this sale. Review the final name after save because naming automation may apply. |
| Account Name | The buyer's Person Account or Business Account. |
| Primary Contact | The main person for the deal. Select the account first. |
| Division | The team selling the tickets. It controls available Ticket Products. |
| Type | New, Renewal, Upsell, or Addon, matching the actual transaction. |
| Season | The season being sold. New records currently default to **2027**; change it when appropriate. |
| Stage | The actual progress of the sale. See [stages](stages.md). |
| Close Date | The date you expect the sale to close, updated as the deal develops. |
| Lead Source / Primary Campaign Source | The known source of the prospect or relevant campaign. |
| Follow-Up By | The date you need to act on the deal again. |
| Next Step | A specific action, including the person or decision you are waiting on. |
| Ticket Category | The broad offering, such as Full Season, Group, Picnic, or Suite. |
| Ticket Product | Optional, more specific offering available for the selected Division. |
| Amount / Number of Tickets | The intended deal value and ticket quantity. |
| Quota Credit Rep | The approved rep for quota attribution, if your workflow requires it. Confirm rather than guessing. |

**Primary Division**, if shown, is a separate division lookup. It does not replace the **Division** field that controls Ticket Product choices. Follow your team's setup for this field.

## Dates are not interchangeable

Season describes what you are selling. Close Date describes when the sale closes. Follow-Up By describes the next action date. Changing one is not a substitute for updating the others.

## Before closing won

Complete **Season** and **Ticket Category**. If Ticket Product is populated, it must match the category and be valid for the division. Confirm Amount and closing information with your team's sales process.

Leave integration-maintained ticket revenue, backfill identifiers, and transaction timestamps to the data process. See [ticket revenue](../customers/revenue.md).

**Success looks like:** one Opportunity on the correct customer, the correct Ticketing record type, an accurate Stage, and a dated Next Step visible from Home.
