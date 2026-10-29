# Sell tickets for a special event

Use a **Ticketing Opportunity** when you sell a customer suites, picnic tickets, or other tickets for Cosmic, Banana Ball, or a similar special event. The **Special Event Ticket Sale** checkbox puts that opportunity into Special Events opportunity reporting while keeping your normal ticket-sales workflow.

For regular baseball ticket sales, leave the checkbox unchecked. The extra event fields stay hidden.

## Create or update the opportunity

1. Find the customer's existing opportunity first. Reuse it if it represents the same sale.
2. Create a **Ticketing Opportunity**, or open the existing ticket opportunity and edit its details.
3. Complete the normal customer, Division, Season, Stage, Close Date, and follow-up information.
4. Under **Product Details**, check **Special Event Ticket Sale**. Four event fields appear.
5. Select **Event Category** and **Event Type**. Both are required when the box is checked. For Cosmic or Banana Ball, select **Sports → Alternate Baseball Game**.
6. Enter **Event Title** and **Event Start Date** when known. Both are required before **Closed Won**.
7. Keep **Ticket Category** and **Ticket Product** set to the actual offering. Save and confirm the checkbox and event details on the record.

| Example field | Illustrative Akron suite sale |
| --- | --- |
| Record type | Ticketing Opportunity |
| Special Event Ticket Sale | Checked |
| Ticket Category | Suite |
| Ticket Product | Nightly Suite |
| Event Category | Sports |
| Event Type | Alternate Baseball Game |
| Event Title | Cosmic Takeover Tour |
| Event Start Date | The performance date being purchased |
| Amount | The package value agreed with the customer |

For an Akron picnic sale, use **Picnic → All You Can Eat Picnic** instead. Product choices depend on Division. The event classification describes the event; it does not replace the ticket offering.

## Work the sale normally

Continue using the normal [ticket stages](stages.md), owner, activities, **Follow-Up By**, and **Next Step**. The opportunity remains in ticket reps' working views. Checking the box does not create a second opportunity, an event agreement, or a venue reservation.

**Close Date** is the expected or actual sales close date. **Event Start Date** is when the event happens. Keep both accurate; they answer different reporting questions.

If the box was checked by mistake, uncheck it and save. The event fields hide, and the opportunity no longer qualifies for Special Events reporting through this checkbox. Existing event details are retained so an accidental toggle does not erase them; the saved checkbox determines classification.

## Where the sale appears in reports

- **Event Opportunities by Division** includes Event Sales opportunities plus Ticketing Opportunities with **Special Event Ticket Sale** checked. Review the record type, Stage, Division, Season, and dates when interpreting totals.
- **Total Amount Won This Fiscal Year** and **LC Total Amount Won This Fiscal Year** exclude checked special-event ticket sales.
- Operational ticket pipeline and weekly wins views still include the sale so reps can manage and review their work.

These reports summarize opportunity values. They do not establish collected revenue. Ticketing uses **Closed Won**; Event Sales uses its own stages, including **Contract Signed**. A combined report should not assume both workflows use the same stage names.

Older special-event ticket opportunities must be checked and classified before they appear through the new reporting rule. An event name in the opportunity name does not classify it automatically.

## Connect the ticket order without counting the sale twice

Process the transaction in the ticket system as usual. When its Ticket Order is available in Salesforce, link it to this opportunity on the **Tickets.com Orders** card. Follow the [ticket order guide](../customers/ticket-orders.md).

Use opportunity **Amount** for sales pipeline and bookings. Use the approved, reconciled ticket-system revenue for financial actuals. Do not add both values together for the same sale. Ticket Order totals also summarize their lines; do not count the order and its lines twice.

If an order spans multiple events, reconcile revenue by its event lines. A separate organizer or venue agreement must not repeat the same ticket receipts in a combined total. See [revenue definitions](../customers/revenue.md).

The checkbox changes opportunity reporting. It does not change ticket-system imports, commission rules, quota calculations, or event calendar bookings.

## If something is missing

Refresh Salesforce after a setup update. If you cannot see **Special Event Ticket Sale**, or checking it does not reveal the event fields, ask for an access check. Do not switch the opportunity to Event Sales just to expose the fields.
