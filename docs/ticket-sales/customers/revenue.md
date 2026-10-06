# Understand ticket revenue

Sales pipeline and imported ticket revenue answer different questions. Choose the measure that matches the decision you are making.

| Measure | Use it to understand |
| --- | --- |
| Opportunity Amount | The value carried on the sales opportunity and in pipeline views |
| Gross Ticket Revenue | The imported gross ticket revenue measure |
| Revenue Deductions | Deductions provided by the ticketing data process |
| Net Ticket Revenue | The imported net ticket revenue measure after deductions |
| Agreement Total Sales Price | The total used in the agreement document and payment schedule |
| Scheduled payment total | The sum of agreed agreement installments, not a cash receipt total |

Do not assume Amount, gross revenue, net revenue, and agreement total will always be equal. Differences need reconciliation against the underlying order, linked sale, timing, and approved reporting definition.

## Reconcile a difference

1. Confirm the same customer, source order, Division, and Season.
2. Confirm the order's **Matching Opportunity**.
3. Open line items and inspect the revenue fields and transaction dates.
4. Check whether the report uses Amount, gross, or net revenue.
5. Check filters, date field, owner/credit rep, and refresh timing.
6. Escalate a remaining difference with the two record/report links and the values being compared.

Source-driven fields should be corrected through the owning data process. Manual edits to a synchronized value can be overwritten or obscure the underlying cause.

## Season versus fiscal year

Season describes the selling season. Standard Opportunity fiscal reporting follows **Close Date** and the organization's fiscal calendar. The current fiscal calendar starts in **October**. A 2027-season opportunity can have a Close Date in a different fiscal period; inspect the report's filters instead of assuming Season and Fiscal Year are interchangeable.

The Ticket Sales homepage's open pipeline is not the Event Sales homepage's fixed FY2027 KPI view. Use the right module and date definition when comparing totals.
