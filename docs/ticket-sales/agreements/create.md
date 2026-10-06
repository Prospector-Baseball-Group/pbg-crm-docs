# Create an agreement and choose the signer

Start from the Closed Won Ticketing Opportunity so the agreement is connected to the right sale.

## Open the agreement workspace

1. Open the Opportunity and find **Ticketing Agreements**, above **Ticket Orders**.
2. If an agreement already exists, click its agreement number and check its status.
3. If none exists, choose **New Agreement**.
4. On the new agreement, open **Customer & Delivery**.

![Ticketing Agreements section showing the New Agreement button and an existing demo agreement](/images/ticket-sales/agreement-launcher.png)

*Previously captured JG training example. The existing agreement is Signed; a new sale may show no agreement yet.*

Only one current agreement is allowed per Opportunity. A duplicate warning means you should open the existing agreement, not create another Opportunity to bypass it.

## Select the signer

Choose **Signer Contact**. The person must belong to the Opportunity Account directly or through an active related-account relationship.

The system initially looks for the Opportunity Primary Contact, then a primary Contact Role, then the Person Account's backing Contact. Always review the choice; a default is not confirmation that this is the authorized signer.

For a Business Account, **Add New Contact** can create and select a missing signer. The form also sets the Opportunity Primary Contact when that field is blank. For a Person Account, use its existing person contact.

## Complete two layers of information

The selected **Contact** needs name, email, phone, mailing street, city, state, and postal code. The **agreement details** also need to be complete.

| Agreement field | Check |
| --- | --- |
| Patron Account Name | Correct customer name for the document |
| Order ID | Correct ticketing-system order number |
| Signer Email (delivery address) | The address that should receive the Adobe Sign email |
| Phone Number | Correct contact number |
| Address | Complete agreement address |
| Total Sales Price | Intended total, greater than zero |

Selecting a signer copies contact details into the agreement. Later edits to agreement details update that agreement snapshot; they do not rewrite the Contact record. If readiness says the **Contact** is incomplete, complete the Contact itself as well.

## Wait for autosave

Fields save automatically after a brief pause. Wait for **Saved** before switching tabs, generating Preview, or sending. If an error appears, resolve it and confirm the save rather than assuming the change took effect.

**Success looks like:** the correct signer and delivery details, the intended total, and no unresolved customer-information blocker. Continue to [Payments and preview](payments-preview.md).
