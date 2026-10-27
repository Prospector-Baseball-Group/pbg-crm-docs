# Create a BEO

Open the **Event Sales** app. Check the Opportunity’s club, event date, contacts, and locations before creating a BEO. The normal starting point is the current signed Event Agreement.

## From an Event Agreement

1. Open **Special Event Agreements** and select the agreement for the event.
2. Confirm that you are viewing the intended agreement version. For the normal signed workflow, its status should be **Executed**.
3. Scroll to the **Banquet Event Orders** card below the agreement workspace.
4. Select **Create / Open BEO**.
5. Review **Event & Operations** and use **View source agreement** to confirm the source.

The new Draft copies that exact agreement version’s event details, contacts, billing information, locations, selected services, menu and service notes, and payment instructions. Check any blank fields before proceeding.

[![Banquet Event Orders card on an Event Agreement with Create / Open BEO](/images/beos/agreement-launcher.jpg)](/images/beos/agreement-launcher.jpg)

<p class="caption">The card below the agreement workspace opens the current BEO or creates its first Draft. The screenshot uses a fictional Draft agreement to demonstrate the entry point; the usual workflow starts after signing.</p>

## From an Opportunity

1. Open the event’s Opportunity in the **Event Sales** app.
2. Find the **Banquet Event Orders** card; scroll down if necessary.
3. Select **Create / Open BEO**.
4. Review the new Draft’s **Event & Operations** tab and its source agreement link, if present.

Salesforce uses the current Event Agreement whose event date matches the Opportunity. If no matching agreement exists, it starts with the Opportunity’s available event, customer, contact, and primary-location information. Review all locations and complete the time zone and operational details.

[![Banquet Event Orders card on an Opportunity with Create / Open BEO](/images/beos/opportunity-launcher.jpg)](/images/beos/opportunity-launcher.jpg)

<p class="caption">Use this card on the Opportunity to reuse the event information already entered.</p>

## From the Banquet Event Orders tab

This route works like the Event Agreement **New** pathway: choose the Opportunity before creating the document.

1. Open **Banquet Event Orders** from the Event Sales navigation bar. Check **More** if the tab is hidden by the window width.
2. Select **New**.
3. Search **Event Opportunity** and select the correct Event Sales Opportunity. The results also show the account name.
4. Select **Create / Open BEO**.

Search using the beginning of the Opportunity name, including the season when present, for example **2027 - Example Company**. The button stays disabled until you select a result.

[![New BEO search results showing the Opportunity and its account](/images/beos/new-opportunity-picker.jpg)](/images/beos/new-opportunity-picker.jpg)

<p class="caption">New opens an Opportunity selector, rather than an empty BEO record form.</p>

[![Selected Opportunity with Create / Open BEO enabled](/images/beos/new-opportunity-selected.jpg)](/images/beos/new-opportunity-selected.jpg)

<p class="caption">After selecting the result, Create / Open BEO becomes available. Select any screenshot to view it at full size.</p>

## Review the result

An existing current BEO for the same Opportunity and event date opens without copying over its saved work. To change an issued or accepted BEO, use [Create revision](./revisions), not New.

A new BEO is a snapshot, not a live synchronization. If the source changes afterward, review the BEO and update its Draft deliberately. Starting from a different agreement does not replace the source or details of an already existing current BEO.

You can prepare a Draft before the agreement is signed. Before issuing, an unsigned or missing source agreement requires a legitimate, documented **Reason for BEO Without Signed Agreement** under **Event & Operations → Review**. Follow your club’s authorization process; do not use an exception simply to skip a pending signature.

**Next:** [Prepare, issue & record approval](./prepare-issue).
