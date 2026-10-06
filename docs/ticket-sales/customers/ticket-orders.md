# Ticket orders and customer history

Ticket Orders bring purchase information into Salesforce so you can serve the customer in context. They are related to customer records and can link to the relevant Ticketing Opportunity.

## Inspect a purchase

1. Open the customer Account and review its ticketing information and related Ticket Orders, or use **Home → Ticket Orders**.
2. Open the order and confirm the source Order ID, buyer, team/division, season, and order date.
3. Review the line items for games/events, ticket quantity, section/row/seat range, product details, and attendance where populated.
4. Check **Matching Opportunity** to understand which sale is associated with the order.
5. Compare the latest available synchronization information before reporting a discrepancy.

Field availability varies with the source system and incoming data. A blank value is not proof that a purchase or attendance event did not occur.

## Buyer and business relationships

An individual can buy on behalf of a business. **Buyer Account** identifies the buyer relationship; **Business Account** can associate the purchase with the organization. Business-account ticketing rollups depend on these relationships being correct.

Creating an Opportunity on the same Account does **not** automatically prove that it matches every order. The order's **Matching Opportunity** is the explicit connection. If a link is missing or wrong, use your approved matching process or send both record links to an administrator.

## Opportunity review flags

Orders can be flagged for Opportunity review when they meet the configured review criteria and have no Matching Opportunity. A review flag is a work item, not proof that a duplicate sale should be created. Search the customer's existing opportunities first.

Individual-ticket orders are excluded from the current review-candidate rule. Older orders and incomplete source information can also fall outside the rule. An unflagged order is not a guarantee that every relationship has been reconciled.

## Use customer signals thoughtfully

The homepage can show next game, last purchase, upcoming tickets, attendance, or lifecycle signals for accounts connected to open Ticketing Opportunities. Use these as prompts to check the customer record before calling.

Examples: confirm the group is ready for an upcoming game; follow up after a recent purchase; ask whether a low-attendance season-ticket holder needs help using tickets. Read the underlying dates and quantities before drawing conclusions.

## Report a data issue

Include the Salesforce order link, source Order ID, team, season, expected value, and what you observed. Do not edit source identifiers or duplicate imported orders to make a report look right. See [revenue definitions](revenue.md).
