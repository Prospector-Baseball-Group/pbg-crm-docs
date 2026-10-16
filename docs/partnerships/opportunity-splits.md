# Split opportunity revenue between reps

Use **Opportunity Splits** when more than one rep shares a partnership opportunity. Record each rep’s percentage now; deductions, separate revenue streams, and commission calculations are later work.

::: info Current scope
Only **Revenue** splits are enabled. The percentages must total **100%** and the split amounts use Salesforce’s standard **Amount**. This records the allocation; existing PBG goal dashboards still use their current credit logic and are not yet connected to these splits.
:::

## Before you start

- Open the **Agilitek Partnership Module** and the correct partnership opportunity.
- Agree on the allocation with your manager. Existing opportunities start with **100% for the opportunity owner**; this default does not mean an agreed split has already been entered.
- For a multi-year agreement, check each applicable annual opportunity. A split on one opportunity does not automatically set the allocation for every year of the agreement.
- Use an opportunity you own or have appropriate access to manage. If the edit action is unavailable, ask your Salesforce administrator to check your access.

## Enter the split

1. Open the opportunity’s **Related** tab.
2. Scroll to **Opportunity Splits** and select **Edit Opportunity Splits**.
3. In the **Revenue** tab, edit the existing owner’s **Percent (%)**.
4. In the empty row, edit **Team Member**, search for the other rep, and select the matching user. Team members can be added while editing splits; a separate team setup step is not required.
5. Enter that rep’s **Percent (%)**. Use **Add Row** for additional reps and add a **Note** if the allocation needs an explanation.
6. Check that **Total Percent** is **100%**, then save your changes. Close the editor with **Done** when finished.
7. Refresh or reopen the opportunity and confirm each rep’s percentage and amount in **Opportunity Splits**.

## Example

This is a fictional example using a standard opportunity Amount of **$10,000**:

| Team member | Percent | Split amount |
| --- | ---: | ---: |
| Rep A | 60% | $6,000 |
| Rep B | 40% | $4,000 |
| **Total** | **100%** | **$10,000** |

A revenue split assigns portions of the same opportunity amount. It does not change the opportunity owner or calculate a commission payment.

## Understand the amount

Salesforce calculates the split from its standard **Amount** field. The partnership page can also display Agilitek **Deal Value**, **Cash Amount**, **Barter Amount**, and manual pricing fields. These are not interchangeable: manual pricing can cause Deal Value to differ from the standard Amount.

If the total shown in the split editor differs from the amount you expected, confirm the pricing with your administrator before using it in reporting. Do not alter agreed percentages just to force a desired dollar result.

## What comes later

The current workflow does not:

- Deduct costs or other exclusions to calculate net eligible revenue.
- Separate corporate partnership revenue from ticketing, food and beverage, events, or other revenue streams.
- Calculate commission rates or payments.
- Automatically feed the allocation into PBG’s existing goal dashboards.

For now, record the agreed rep percentages here. Revenue-category rules, deductions, and reporting integration can build on that allocation after the business rules are agreed.

## Troubleshooting

| What you see | What to do |
| --- | --- |
| The list shows only the owner at 100% | This is the starting allocation. Open the editor to enter the agreed split. |
| The percentages do not total 100% | Adjust the rows so their combined percentage is exactly 100%, then save. |
| An extra empty row shows a required-field error | Complete the rep and percentage, or remove the unused row. |
| A rep is missing from the search results | Confirm the user is active and ask your administrator to check team-member access. |
| No Opportunity Splits list or edit action | Confirm you opened a partnership opportunity in the Partnership module. Refresh once, then ask your administrator to check the page layout and your access. |
| A goal report still credits one rep | The existing goal calculation has not yet been connected to native splits. Recording a split alone does not update that calculation. |

See [Recent changes](./recent-changes) for the verification date and scope.
