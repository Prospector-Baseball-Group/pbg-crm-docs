# Price an event with products

Build an event's price from the club's menu of **event products** on the opportunity's **Revenue** tab. The products set the opportunity's Amount, the client total that's billed on the Payments tab, and the Usage Fee on the agreement.

::: info Akron RubberDucks only, for now
Event products are live for Akron (November 9, 2026). Jacksonville and Lancaster events keep the older **Split revenue** view on the Revenue tab until their menus are set up, and [Finalize Event](../operations/finalize-event#events-without-products) works as before for them.
:::

These steps use the **PBG Sales** app.

## The club's menu

Each club has its own menu of event products. Akron's menu includes a room fee, catered food, a beverage package, host bar, cash bar, cash bar tax, net concessions, staffing & services, pass-through, misc., an 18% gratuity, and 6.75% sales tax.

The menu is maintained by the club's event lead and the Salesforce admin. See [Manage the event product menu](../administration/event-products).

## Add products to an event

1. Open the Akron Event Sales opportunity.
2. Select the **Revenue** tab. It shows **Add this event's products**.
3. Select **Add products**. **Gratuity (18%)** and **Sales Tax (6.75%)** are added automatically.
4. In **Add a product**, choose an item from the club's products. Repeat for everything the client is buying.
5. On each line, complete the fields that apply:
   - **Details**: free text such as the menu, package, or notes.
   - **Qty (guests)**: the guest count for per-person items. It starts at the event's expected attendance.
   - The rate field. Its label depends on the product's [price basis](#how-each-product-starts-price-basis).
   - **Amount**: calculated from the quantity and rate.
   - **Taxable** and **Gratuity applies**: whether tax and gratuity apply to the line.
6. If the client doesn't pay sales tax, check **Tax exempt (for example a 501(c)(3))**. Tax becomes $0.
7. Check the summary at the top: **Revenue (Amount)**, **Client total**, **Tax**, **Gratuity**, and **Paid at event**.
8. Select **Save products**. Select **Cancel** to discard your changes.

**Expected result:** the *Event products saved* message appears. The Revenue tab lists the event's lines and the button now reads **Edit products**. The opportunity's Amount matches **Revenue (Amount)**, and the Payments tab expects the client total.

::: tip Still seeing Split revenue?
If an Akron opportunity's Revenue tab still shows the old **Split revenue** view, refresh the browser page once.
:::

## Change a line

- **Remove a line:** select the **X** on the line.
- **Override the calculation:** type a different **Amount**. The line keeps your amount even if the quantity or rate changes.
- **Undo an override:** select **Recalculate** on the line.
- **Change the price:** reps can change any rate or amount on any deal, including the room fee and the tax and gratuity percentages.

Tax and gratuity recalculate as you add and change lines. Select **Edit products** to change a saved event; the same editor opens.

## How each product starts: price basis

Every product has a price basis that decides how it starts on a deal.

| Price basis | Typical products | Rate field | What you do |
| --- | --- | --- | --- |
| Standard Price | Room fee, sales tax %, gratuity % | **Rate** (or **Percent** for tax and gratuity) | Nothing. It starts at the product's default rate; change it if the deal differs |
| Set Per Event | Catered food, beverage package, rentals, staffing | **Price**, required, starts empty | Enter this event's price. The line reads *Priced on each event: enter this event's price.* |
| Actual After Event | Host bar, cash bar, cash bar tax, net concessions | **Estimated rate** and **Estimate**, both optional | Enter an estimate if you have one. The line reads *Billed on actual: an estimate is optional. Enter the actual at Finalize Event.* |

While a Set Per Event line has no price, **Save products** stays disabled and the editor shows *Enter a price for [product], or remove it until it's quoted.* Enter the price, or remove the line until the item is quoted.

An Actual After Event line with no estimate shows **After the event** in the saved view instead of $0. You enter the actual amount when you [finalize the event](../operations/finalize-event).

## What the numbers mean

| Figure | Meaning |
| --- | --- |
| Revenue (Amount) | The event's revenue: everything except tax, gratuity, and pass-through. It includes cash bar sales paid by guests. The opportunity's Amount follows it |
| Client total | What's billed to the client: billed revenue plus tax, gratuity, and pass-through. The Payments tab and the agreement's Usage Fee follow it |
| Tax / Gratuity | Calculated from the lines marked **Taxable** and **Gratuity applies** |
| Paid at event | Collected from guests at the event, such as cash bar. It counts as revenue but isn't billed, so it never becomes a payment |
| Commissionable | Shown on the saved view. Tax and gratuity aren't commissionable; cash bar is |

The saved view groups lines by reporting group, such as Facility Rental or Food & Beverage, and shows **Paid at the event** separately. Food & Beverage holds Food, Beverage, Cash Bar, and Concessions. Tax and gratuity lines are tagged **Not revenue**.

Once an event has products, you can't type its Amount. Change the products instead.

### Example

All amounts are fictional. In this example, gratuity applies to food and the host bar, and sales tax applies to every billed line and to the gratuity.

| Line | Price basis | Entered | Amount |
| --- | --- | --- | ---: |
| Room fee | Standard Price | Default rate | $500.00 |
| Catered food | Set Per Event | 40 guests × $35.00 | $1,400.00 |
| Host bar | Actual After Event | Estimate | $800.00 |
| Gratuity (18%) | Standard Price | 18% of $2,200.00 | $396.00 |
| Sales tax (6.75%) | Standard Price | 6.75% of $3,096.00 | $208.98 |
| **Revenue (Amount)** | | | **$2,700.00** |
| **Client total** | | | **$3,304.98** |

The agreement's Usage Fee and the Payments tab both use the $3,304.98 client total. The saved view shows $2,700.00 as **Commissionable**.

## Agreements and changes after signing

Products set the agreement's Usage Fee. See [Create an agreement](../agreements/create#events-priced-with-products) for how the Usage Fee and Exhibit A follow them.

- **Before signing:** while the agreement is a Draft, saving products updates its Usage Fee and a single unpaid Usage Fee Balance payment.
- **Out for signature or signed:** saving products doesn't change the agreement or its payments. The Revenue tab shows a notice that the signed agreement differs from the client total, and Finalize Event bills or credits the difference after the event.

## Who can change products

Anyone who can edit the deal can add and change its products until commission is earned. After that, only a commission admin can. Once the event is finalized, the button becomes **Correct final amounts**; see [Correct final amounts](../operations/finalize-event#correct-final-amounts).

## If something looks wrong

| What you see | What to do |
| --- | --- |
| The Revenue tab shows **Split revenue** on an Akron event | Refresh the page once |
| **Save products** is disabled | A Set Per Event line has no price. Enter its price, or remove it until it's quoted |
| *No event products are set up for [club] yet.* | The club's menu isn't set up. Jacksonville and Lancaster use **Split revenue** until it is |
| *This event's Amount comes from its products. Change them on the Revenue tab.* | Change the products instead of typing the Amount |
| *This event has a revenue split from before event products. Adding products replaces it.* | Adding products replaces the older split. Check the lines before saving |
| *You need edit access to this deal to change its products.* | Ask the deal's owner or your manager |
| *Commission on this deal is [status], so only a commission admin can change its products.* | Ask a commission admin |

Next: [Create an agreement](../agreements/create) · [Finalize the event](../operations/finalize-event) · [Track payments on a deal](/general/payments)
