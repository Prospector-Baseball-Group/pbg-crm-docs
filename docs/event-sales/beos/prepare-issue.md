# Prepare, issue & record approval

Start with an editable **Draft** BEO. Review the copied information before adding the final operating instructions.

## Complete Event & Operations

Open each section and confirm the details relevant to your event:

| Section | Review |
| --- | --- |
| Event and locations | Event name, end date, event times, explicit time zone, every location, expected and guaranteed guests, guarantee deadline |
| Contacts and billing | Customer, primary and onsite contacts, event-day phone numbers, sales representative, billing address |
| Food and beverage | Menu, menu deadline, service times, dietary requirements, allergens, bar instructions |
| Setup and instructions | Room setup, access or wristband instructions, special instructions, payment and billing terms |
| Review | Internal approval and any authorized agreement exception |

Select **Save BEO details** before switching tasks, previewing, or issuing. Times describe the local event time in the entered time zone; confirm them with the venue team.

## Add Timeline & Details

1. Open **Timeline & Details** and select **Add detail**.
2. Choose a section: **Timeline**, **Setup**, **Food**, **Beverage**, **Staffing**, **Equipment**, or **Other**.
3. Enter the description, location, activity date and times where applicable, and instructions.
4. Choose the charge basis. For priced items, enter quantity, unit price, and hours when needed.
5. Select **Save detail**. Use a row’s action menu to **Edit** or **Remove** a Draft detail.

[![BEO Timeline and Details with a food row, guest-arrival activity, and separate charge totals](/images/beos/revision-details.jpg)](/images/beos/revision-details.jpg)

<p class="caption">Fictional example: a buffet is an additional charge and guest arrival is a no-charge timeline activity. The prices shown are test data, not a club price list.</p>

| Charge basis | Use it for |
| --- | --- |
| Included in agreement | An already contracted item. It does not increase the additional-charge or consumption-estimate total. |
| Additional charge | A separately priced BEO addition. |
| Consumption estimate | Estimated usage that will need final reconciliation. |
| To be confirmed | An unresolved pricing decision. Resolve it before issuing. |
| No charge | An operational activity or item with no charge. |

Line amounts are **quantity × hours × unit price**; blank hours count as one. Additional charges and consumption estimates are separate. The source agreement value is a reference, not an amount to enter again as an additional charge. These totals are not an invoice balance. Record applicable taxes, service charges, gratuity, and billing terms in **Payment / Billing Instructions**.

## Review and issue

1. Save all changes and select **Preview draft PDF**.
2. Check the full document with the operating team, including menu, quantities, dietary requirements, locations, times, and charges.
3. Open **Approval & Documents** and resolve every item under **Before issuing**. Enter the internal approval under **Event & Operations → Review**, then save.
4. Select **Issue BEO & Save PDF** and wait for PDF generation to finish.
5. Confirm **Issued** status and use **View issued PDF** to open the saved copy.

An unsigned or absent source agreement needs a documented exception before issue. Missing required event information, guest guarantee, internal approval, or unresolved/incomplete pricing can also block issuance. Follow the checklist shown for your BEO.

Issuing freezes the BEO’s content and saves its PDF in Salesforce. If PDF generation fails, the BEO remains Draft and shows an error. Address the problem before retrying; if generation is still running, refresh the record shortly to check its result.

## Record customer approval

After receiving actual customer approval:

1. On the current **Issued** BEO, open **Approval & Documents**.
2. Attach supporting evidence under **Supporting files** if needed.
3. Enter **Customer approval name** and **Approval reference (email date or attached file)**.
4. Select **Record acceptance** and confirm **Accepted** status.

This action records approval you already received. It does not email the customer, send an Adobe Sign request, or collect a signature. Share the issued PDF through your club’s approved process and keep the evidence with the record.

**Next:** [Handle revisions](./revisions).
