# Manage the event product menu

Each club's menu of event products is what reps choose from on an event's [Revenue tab](../sales/event-products). This page is for the people who keep that menu up to date: the club event leads and the Salesforce admin.

::: info Akron RubberDucks only, for now
Akron's menu is live. Jacksonville and Lancaster get event products once their menus and rates are confirmed; until then their events keep the **Split revenue** view.
:::

## Who can change the menu

| Permission set | Who gets it | What it allows |
| --- | --- | --- |
| Event Product Admin | The Salesforce admin and anyone who manages every club's menu | Edit any club's event products |
| Event Product Editor | Each club's event lead | Add, reprice, or retire only their own club's event products, matched on the user's **Division** |

Reps don't need either permission set to price an event. They can change any rate or amount on a deal without changing the menu.

An Event Product Editor who tries to change another club's product sees *You can add and change event products for your own club only. Ask an Event Product Admin to change other products.* Check that the user's **Division** is set to their club.

## Change a product's settings

1. In **PBG Sales**, open the event product's **Product** page.
2. Find the **Event product settings** card.
3. Select the pencil next to the field you want to change, edit it, and select **Save**.

**Expected result:** the card shows the new value. New lines on deals use it from then on; lines already on a deal keep their saved rates.

| Setting | What it controls |
| --- | --- |
| Revenue Category | Where the line reports, such as Food, Beverage, Cash Bar, or Facility Rental |
| Price Basis | How the line starts on a deal: **Standard Price**, **Set Per Event**, or **Actual After Event**. See [price basis](../sales/event-products#how-each-product-starts-price-basis) |
| Collection | **Billed to Client**, or **Collected at Event** for money guests pay at the event, such as cash bar |
| Default Rate | The starting rate in dollars, or the percent for Percent pricing (18 means 18%) |
| Pricing Method | **Fixed**, **Per Person**, **Per Unit**, **Per Hour**, or **Percent** |
| Percent Of | For Percent pricing: **Taxable Lines** for tax, or **Gratuity Lines** for gratuity |
| Taxable / Gratuity Applies | Whether new lines start with tax and gratuity applied |
| Commissionable | Whether the product counts toward commission |
| Event Sort Order | The order products appear in on the deal |

Use **Standard Price** only for real menu prices, such as a room fee or the tax and gratuity percentages. Use **Set Per Event** for anything priced on each deal, such as catered food, and **Actual After Event** for anything billed on what was consumed, such as a host bar.

Event products never have **Price Books** or **Inventory by Season**, so those sections are hidden on their Product page. Don't add either: it would make the product appear in Partnership selling.

## Retire a product

Clear **Active** on the product's details. It no longer appears in **Add a product** on deals. Events that already use it keep their lines.

## Add a new menu item

Creating a new event product from the Product page's **New** form isn't available yet. Ask the Salesforce admin to add new menu items to your club's menu.

## If something looks wrong

| What you see | What to do |
| --- | --- |
| *Event products need a Division, Revenue Category, Collection, and Pricing Method. Percent pricing also needs Percent Of.* | Complete the named settings |
| *Event products can't be Partnership products or have an Agilitek family.* | Event products are separate from Partnership inventory. Ask the Salesforce admin |
| The **Event product settings** card is missing | The product isn't an event product, or you're not in PBG Sales |
| A rep says a product is missing from **Add a product** | Check that the product is active and belongs to the rep's club |

Related: [Price an event with products](../sales/event-products) · [Access & administration](./access)
