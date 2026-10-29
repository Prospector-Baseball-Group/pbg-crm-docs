# Ticket orders and customer history

Ticket Orders bring purchase information into Salesforce so you can serve the customer in context. They are related to customer records and can link to the relevant Ticketing Opportunity.

## Inspect a purchase

1. Open the customer Account and review its ticketing information and related Ticket Orders, or use **Home → Ticket Orders**.
2. Open the order and confirm the source Order ID, buyer, team/division, season, and order date.
3. Review the line items for games/events, ticket quantity, section/row/seat range, product details, and attendance where populated.
4. Check **Matching Opportunity** to see which sale the order is linked to.
5. Compare the latest available synchronization information before reporting a discrepancy.

Field availability varies with the source system and incoming data. A blank value is not proof that a purchase or attendance event did not occur.

## Buyer and business relationships

An individual can buy on behalf of a business. **Buyer Account** identifies the buyer relationship; **Business Account** can associate the purchase with the organization. Business-account ticketing rollups depend on these relationships being correct.

Creating an Opportunity on the same Account does **not** automatically prove that it matches every order. The order's **Matching Opportunity** is the explicit connection. Link orders from the opportunity, as described below.

## Link your Tickets.com orders

A Ticketing deal is paid when its Tickets.com orders are. Each Ticketing opportunity has a **Tickets.com Orders** card for linking them.

1. Open the Ticketing Opportunity and find **Tickets.com Orders**.
2. Under **Add a Tickets.com order**, enter the **Tickets.com order ID** and select **Find**. The search looks only at your team's orders, because order IDs repeat across teams.
3. Check the buyer, created date, category, total, paid amount, and balance.
4. Select **Link to this opportunity**.

**Expected result:** the order appears on the card with who linked it and when, and the card's totals and Payment Status update.

Use **Remove** on an order card if you linked the wrong order. **Recalculate payments** updates the deal's payment schedule from the linked orders right away; otherwise this happens each night.

### An order can belong to only one deal

If the order is already linked to another deal, the card says *Linked to [deal] ([owner]). Only a commission admin can move it.* Ask a commission admin to move it if it belongs on your deal.

Once a deal's commission is earned, only a commission admin can add or remove its orders.

### The order isn't in Salesforce yet

If the order hasn't synced, the card says it isn't in Salesforce yet. Select **Save pending link**. The order links to this deal when it arrives, and the request shows under **Pending links** until then. Use **Cancel** to withdraw it.

If another deal already has a pending link for the same order, the card names that deal and you can't save a second one. A pending link that can't be completed shows as **Conflict** with the reason.

### How receipts work

Ticketing payments are marked received from the linked orders' paid amounts. The receipt fields on the deal's [Payments tab](/general/payments) are locked for those payments. A deal shows **Awaiting Ticket Order** until an order is linked, and becomes **Fully Paid** when every linked order is paid in full.

## Opportunity review flags

Orders can be flagged for Opportunity review when they meet the configured review criteria and have no Matching Opportunity. A review flag is a work item, not proof that a duplicate sale should be created. Search the customer's existing opportunities first, then link the order from the right one.

Individual-ticket orders are excluded from the current review-candidate rule. Older orders and incomplete source information can also fall outside the rule. An unflagged order is not a guarantee that every relationship has been reconciled.

## Use customer signals thoughtfully

The homepage can show next game, last purchase, upcoming tickets, attendance, or lifecycle signals for accounts connected to open Ticketing Opportunities. Use these as prompts to check the customer record before calling.

Examples: confirm the group is ready for an upcoming game; follow up after a recent purchase; ask whether a low-attendance season-ticket holder needs help using tickets. Read the underlying dates and quantities before drawing conclusions.

## Report a data issue

Include the Salesforce order link, source Order ID, team, season, expected value, and what you observed. Do not edit source identifiers or duplicate imported orders to make a report look right. See [revenue definitions](revenue.md).
