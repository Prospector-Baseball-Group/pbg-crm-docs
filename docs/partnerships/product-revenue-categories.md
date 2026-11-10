# Product revenue categories and Pass-Through

Use **Revenue Category** on a Product to control how its partnership line is reported. Choose **Pass-Through** for an expense reimbursement or money collected for another party that should stay in the contract but be excluded from revenue and commissions.

Product Family and Product Sub-Family still organize inventory. Revenue Category is a separate financial classification.

## Configure a product

1. Open **Products** in the app navigation and select the product. If you start in **Inventory Manager** or an **Inventory by Season** record, follow the **Product** link to the product itself.
2. Click **Edit**. In **Product Information**, find **Revenue Category**, near Product Family and Product Sub-Family.
3. Select **Pass-Through**, then **Save**.
4. Allow the background recalculation to finish, then refresh an affected opportunity's **Revenue** tab. The amount should appear under **Pass-Through**, marked **Not revenue**.

The field is available to users with product-edit and Revenue Category edit permission. If it is missing or read-only, ask your Salesforce administrator to check both permissions and the assigned product layout.

**Creating a new product:** create its inventory and rates through Agilitek's Product Creator as usual. Then open the saved Product and set Revenue Category using the steps above. Revenue Category is on the Product edit layout; it is not a field inside Agilitek's managed Product Creator wizard.

::: warning Product-wide setting
Changing Revenue Category recalculates existing partnership opportunities that use that Product, including prior seasons. Future deals use it too. Use a dedicated reimbursement product when only that asset should be excluded. Do not reclassify a shared sponsorship product just to change one deal.
:::

## Example: a t-shirt reimbursement

This is a fictional example. A partner agrees to **$10,000**: **$9,000** for sponsorship and **$1,000** to reimburse t-shirt purchases.

Create or use a dedicated **T-Shirt Expense Reimbursement** product. Set its **Revenue Category** to **Pass-Through**, and include it in the agreement at the contracted reimbursement amount.

| Measure | Result |
| --- | ---: |
| Deal value / full amount owed | $10,000 |
| Sponsorship allocation | $9,000 |
| Pass-Through allocation | $1,000 |
| Net corporate revenue | $9,000 |
| Commissionable basis | $9,000 |

The payment schedule still covers **$10,000**. Classification does not change the partner's obligation, the product's price, or Agilitek's contract value.

On a deal with tickets, food and beverage, or other revenue, those amounts retain their existing revenue and commission treatment. They remain part of net corporate revenue; only allocations classified as non-revenue are excluded.

## How the category is chosen

- A populated **Revenue Category** overrides the Product Family/Sub-Family mapping.
- A blank category uses the existing family mapping. For example, Tickets and Suites map to Ticketing, and unmapped families default to Sponsorship.
- Clearing an explicit category restores that family mapping after recalculation.

The **Corporate Partnership** category displays as **Sponsorship** in the Revenue tab. **Tax**, **Gratuity**, and **Pass-Through** do not count toward revenue or commissions. Other categories use their configured revenue and commission treatment.

## Check the result

- **Revenue tab:** Deal value remains the full contract. **Net corporate revenue** excludes pass-through, tax, and gratuity. The category rows still reconcile to the full contract.
- **Reports:** Partnership Corporate Totals, Won Revenue by Category, and the Akron OFP/OFS pipeline reports use **Net Corporate Partnership Revenue**. The original **Corporate Partnership Revenue** field remains the gross partnership total; custom reports still using it must switch to the net field when exclusions are required.
- **Commission:** the partnership basis is Deal Value less noncommissionable allocations. If commission is already Eligible, Approved, or Paid, its saved base remains frozen and a changed basis is flagged for commission-admin review.
- **Payments:** the amount owed and scheduled payments are unchanged. A classification change does not initiate payment or send an agreement.

Recalculation runs in the background. If the old classification persists after refreshing, ask an administrator to check the **PartnershipProductRevenueBatch** job in Apex Jobs before repeating edits.

## Similar names with different purposes

| Setting | Purpose |
| --- | --- |
| **Revenue Category → Pass-Through** | Excludes the allocation from revenue and commissions while retaining its contract value |
| **Is Passthrough Cost / Configure as Passthrough** | Agilitek pricing control that prevents proration; it does not establish the revenue classification |
| **Hard Cost / Production Cost** | Tracks actual fulfillment expenses; entering a cost does not automatically exclude the corresponding revenue |

Use [Agilitek's product configuration guide](https://agilitek-solutions.gitbook.io/partnerships-crm-agilitek/administration/admin-setup/products/creating-a-product) for inventory, rates, costs, and proration. See [Commission & revenue splits](/general/commission) for commission review and payout tracking.
