# Make a list view work for you

A list view is your working queue. Customize a personal copy with the columns and filters you need, then pin it for daily use.

## Start with the right list

Open **Opportunities** and choose **My Ticketing Opportunities** or **All Ticketing Opportunities** from the list selector beside the title. Both are currently filtered to the Ticketing record type. **My** adds your ownership scope; **All** still respects your record access.

These lists can include closed deals. Add an open-stage filter if you want a working pipeline. Use the separate Partnership and Event lists for those sales processes.

## Clone a shared list

1. Open the existing list closest to what you need.
2. Choose the **List View Controls** gear beside the list search box, then **Clone**.
3. Give the copy a distinctive name, such as **My 2027 Ticket Follow-Ups**.
4. Choose **Only I can see this list view** for a personal work list, then **Save**.
5. Open **List View Controls → Select Fields to Display**. Move the fields you need into the visible column and arrange their order.
6. Use the **Filters** button to review ownership and add the record type, Division, Season, and Stage conditions you need. Save the filters.
7. Use the pin beside the list title to make it your default for this object.

![Cropped Salesforce List View Controls menu showing Clone and Select Fields to Display](/images/ticket-sales/list-view-controls.jpg)

*Live controls, October 6, 2026. The underlying list was searched to a JG training opportunity. The gear in this screenshot controls the list; it is separate from the Salesforce Setup gear.*

Cloning gives you a separate view definition. It does not copy the opportunities or grant more access to them. If Clone or field selection is unavailable, ask your administrator to check your list-view permissions. Avoid giving several personal copies the same name.

## Useful columns for ticket sellers

| Column | Why include it? |
| --- | --- |
| Opportunity Name / Account Name | Identify the deal and customer. |
| Stage / Amount | See progress and the value being pursued. |
| Close Date | See expected closing timing. |
| Season / Division | Keep the selling season and team clear. |
| Next Step / Follow-Up By | Know the next action and its due date. |
| Owner Full Name | Identify who manages the opportunity. |
| Opportunity Record Type | Distinguish modules when reviewing a broader list. |

Choose the Ticketing **Season** field, which matches the value on the ticket opportunity. A **Start Season** column from the Partnership workflow is a different field and can be blank on a ticket sale.

## Edit a row

Hover over the cell. A pencil identifies an available inline edit; a lock means that cell cannot be edited there. Make the change and select the list's **Save** button. Refresh afterward if the row no longer belongs in the filtered view.

**Opportunity Amount is not editable in a standard Opportunity list view.** Open the opportunity and use its **Edit** action or editable record field. Current live Ticketing lists show Amount locked even for an administrator; that alone does not indicate missing access. Salesforce documents this field limitation in its [inline-editing considerations](https://help.salesforce.com/s/articleView?id=xcloud.basics_customviews_lv_lex_considerations.htm&language=en_US&type=5).

For another locked field, check the record's Edit form. Formula fields are calculated, and other restrictions can come from field access, the page layout, or record access. A view containing multiple record types also needs the org's multi-record-type inline-edit setting; otherwise, filter it to one record type. See Salesforce's [list-view editing guidance](https://help.salesforce.com/s/articleView?id=customviews_edit_inline_listview_lex.htm&language=en_US&type=0).

## When a record seems missing

Clear the text in **Search this list**, check the selected list, and inspect its filters. Then use Salesforce search or open the known record link. A record can exist without matching your personal list. An empty view does not justify creating the sale again.

**Success looks like:** a clearly named, pinned personal list with the right module, season, columns, and next actions.
