# Create a product and edit its categories

Create the partnership product, inventory, and rates using [Agilitek’s Creating a Product guide and video](https://agilitek-solutions.gitbook.io/partnerships-crm-agilitek/administration/admin-setup/products/creating-a-product). In Salesforce, open the **App Launcher**, search for **Product**, and select **Product Creator**. It can be available there even when it is absent from the PBG Sales navigation menu.

After creating the product, complete the PBG category setup below. **Reporting Category** and **Revenue Category** are on the saved Product’s edit screen; they are not fields in Product Creator.

## Edit the categories

1. Open the saved **Product**. If you start in **Inventory Manager** or an **Inventory by Season** record, follow the **Product** link to the Product itself.
2. Click **Edit**.
3. In **Product Information**, find **Reporting Category**, near **Revenue Category** and **Product Sub-Family**. Select the reporting group for the asset, such as **Concourse**.
4. Set **Revenue Category** if an explicit financial classification is needed. Leave it blank to use the existing product-family mapping. See [Product revenue categories and Pass-Through](./product-revenue-categories) for financial treatment and examples.
5. Click **Save**, then confirm the values on the Product details screen.

## Which category should I change?

| Field | Purpose |
| --- | --- |
| **Reporting Category** | Groups the asset in Partnership reports; **Concourse** is a choice here |
| **Revenue Category** | Controls financial treatment, including **Pass-Through** |
| **Product Family / Product Sub-Family** | Organizes the inventory catalog |
| **Finance Category** | A separate Agilitek lookup; it is not the Reporting Category dropdown |

For example, to place a signage asset in **Concourse** reporting, edit **Reporting Category**. That does not require changing Revenue Category or Finance Category.

**Reporting Category → Pass Through Expense** does not have the same effect as **Revenue Category → Pass-Through**. The reporting label alone does not exclude revenue or commissions. Agilitek’s **Configure as Passthrough / Is Passthrough Cost** setting is also separate: it controls proration.

Categories belong to the **Product**, not to one season. Revenue Category changes recalculate existing partnership deals using that product, including prior seasons. Review the [revenue-category guide](./product-revenue-categories) before changing an established product’s financial treatment.

## If a field is missing or read-only

Confirm that you are editing the **Product**, rather than Inventory by Season or a rate. An administrator can check the assigned Product layout, product-edit access, and category field-edit access.

**Verified November 18, 2026:** the Product edit screen was inspected using Salesforce Login As for an Akron partnership manager. Reporting Category was editable and included Concourse. The form was canceled without saving; the check did not test a final save.
