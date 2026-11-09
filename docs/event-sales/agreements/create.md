# Create an agreement

Start on the Event Sales Opportunity so the agreement is connected to the correct event and customer.

## Before you begin

Confirm these opportunity details:

- Account and Primary Contact, or the primary Opportunity Contact Role.
- Division with an active agreement template.
- Event Start Date, Event Start Time, and Event End Time. Add Event End Date for a consecutive multi-day booking.
- Primary Event Location and all additional event locations.
- A clear event description and the correct owner.

The active template verified for this guide is **Akron Special Event Agreement v2**. If another division has no active template, ask your administrator about availability.

## Create the Draft

1. Open the opportunity in the **Event Sales** app.
2. Find **Special Event Agreements**.
3. Check whether the event already has a current agreement.
4. Select **New Agreement**.
5. If Salesforce identifies missing opportunity details, correct them on the opportunity and try again.
6. Open the agreement and review **Overview**.

## Review what was copied

The Draft copies the opportunity’s customer, event information, primary contact, and selected locations. The onsite-contact details are seeded from the opportunity contact. For a new Akron agreement, the Company Signer defaults from the opportunity owner; verify that the owner is the right authorized signer.

The agreement’s **Effective Date** is read-only. Every newly generated PDF version uses the current date for the Salesforce user generating it, whether the Client Signer is selected or TBD. It is distinct from Event Start Date and the later date of signature completion. Opening an existing PDF does not change that copy’s date.

## Events priced with products

When an Akron event has [products](../sales/event-products) on its Revenue tab, the agreement's Usage Fee is the event's **client total**: billed products, tax, gratuity, and any city pass-through. The header **Create Agreement** window labels it **Usage Fee (client total)**. Save the event's products before you create the agreement.

- **Event Details** shows the products under **Financial Details**. The Usage Fee is read-only there; change the products on the opportunity's Revenue tab instead.
- The PDF's **Exhibit A** includes an **Itemized Usage Fee** table with each product, its quantity, rate, and amount, then subtotal, gratuity, tax, and the **Total Usage Fee**.
- An Actual After Event line, such as a host bar, prints its rate as *Billed on actual* and its amount as *est. $X*, or *After the Event* when there's no estimate. A note explains that these are estimates and that the actual is invoiced or credited after the Event. Estimates count in the Usage Fee.

**While the agreement is a Draft,** saving products updates its Usage Fee and a single unpaid Usage Fee Balance payment. Regenerate the PDF afterward.

**Once it's out for signature or signed,** product changes don't change the agreement or its payments. The Revenue tab shows a notice that the signed agreement differs from the client total, and [Finalize Event](../operations/finalize-event) bills or credits the difference after the event.

Events without products keep a Usage Fee you enter in Event Details.

## Refresh after an opportunity change

While the agreement is an unlocked **Draft**:

1. Correct the source opportunity.
2. Return to the agreement.
3. Open **More agreement actions → Refresh from Opportunity**.
4. Review copied event details, onsite contact information, and locations again.
5. Regenerate the PDF after the changes are saved.

Refresh can replace information copied from the opportunity, including its location list. Review any agreement-specific work before using it. Explicit signer choices, including **TBD — leave blank for download**, are preserved by Draft refresh, but still confirm the recipients before sending.

Once an agreement is no longer an editable Draft, do not expect Refresh from Opportunity to be available. Use the [correction workflow](./cancel-correct) instead.

**Next:** [Event details & contacts](./event-details).
