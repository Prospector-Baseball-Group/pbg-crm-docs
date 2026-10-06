# Create an opportunity

Create one Event Sales Opportunity for the event, even when it uses more than one location.

## Before you begin

Have the customer account, a related person for a business customer, the event’s purpose, the division, and your expected close date. You can qualify an inquiry before its event date is settled.

## Enter the opportunity

1. Open **Event Sales → Home → New Event Opportunity**.
2. Enter a short **Event Title**, such as *Community Celebration*. Leave the automatic Name placeholder when it is supplied.
3. Select **Division** and verify **Season**.
4. Select **Account Name**. For a business account, choose the related **Primary Contact**.
5. Set **Close Date**, **Stage**, and **Type**. The usual starting values are Interested and New.
6. Select **Event Category**, then the appropriate **Event Type** if applicable.
7. Add the estimated **Amount**, Event Date, times, attendance, and primary location when known.
8. Write **Next Step** and set **Follow-Up By**.
9. Select **Save**. Review the record and add any additional locations in **Event Locations**.

![Blank New Event Sales form showing customer, stage, date, booking, and follow-up fields](/images/new-event-opportunity.jpg)

<p class="caption">Live creation form with no customer data. An administrator’s editable controls can differ from a seller’s.</p>

## Fields that matter

| Field | How to use it |
| --- | --- |
| Event Title | Short event description; Salesforce uses it in the generated name |
| Type | New or Renewal; separate from Event Type |
| Event Category / Event Type | What kind of event is being sold; Event Type depends on category |
| Season | Fiscal season, normally 2027 for current creation defaults |
| Close Date | Expected sales close date; required independently of Event Date |
| Event Date | Required from Quoted onward through Contract Signed |
| Primary Event Location | The primary space; additional spaces are added on the saved record |
| Booking Status | Starts at Not Held unless the record is intentionally reserved |
| Probability | Follows the stage; use the stage to reflect sales progress |

## Understand the generated name

New records with an Event Title use:

**Season - Account Name - Event Title**

For example: **2027 - Example Community Group - Community Celebration**.

Edit Event Title to rename the event. Changes to Account or Season also update the generated name. Older opportunities without an Event Title may retain their historical names.

## Check dates and Season together

FY2027 runs **October 1, 2026 through September 30, 2027**. When Event Date changes, Salesforce can derive Season using this October boundary; an explicit Season edit is preserved. Review Season after a date change, especially around October 1.

## Check the result

Confirm the customer, Primary Contact, title, stage, dates, and division. An opportunity saved as **Not Held** does not reserve the venue. Continue to [Locations & holds](../sales/locations-holds).
