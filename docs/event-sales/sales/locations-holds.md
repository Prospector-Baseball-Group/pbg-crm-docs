# Locations & holds

Reserve the actual spaces an event needs, for the actual time it uses them.

## Select all event locations

1. Open the saved opportunity and find **Event Locations**.
2. Move each required location from **Available** to **Selected**.
3. Choose one **Primary Event Location** from the selected locations.
4. Select **Save Locations**.
5. Confirm the saved selection and check the calendar.

The division must be selected first. Choices are limited to appropriate active locations. All selected locations share the opportunity’s Event Date, start time, end time, and Booking Status.

The primary location continues to appear in older reports and fields. It does not mean the other selected locations are ignored: calendar filtering and reservation conflict checks include them too.

## Understand Booking Status

| Status | Meaning for planning |
| --- | --- |
| Not Held | Inquiry or event record without a location reservation |
| Tentative Hold | A temporary reservation with a Hold Expires At value |
| Booked | A confirmed reservation |
| Released | The location is no longer reserved by this opportunity |

## Place a tentative hold

1. Confirm the Event Date and times with the customer.
2. Check the **Event Calendar** for every required space.
3. Select the locations and primary location on the opportunity.
4. Set **Booking Status → Tentative Hold**.
5. Enter **Hold Expires At**, including the time.
6. Save. Resolve any conflict message before promising the hold.
7. Confirm the hold on the calendar and set a follow-up to review it.

Held or booked events require a location. Tentative holds also require an expiration. The end time must be later than the start time.

## Resolve a conflict

Salesforce checks overlapping held or booked events in the selected locations. Read the error and review the other booking with the responsible seller or manager. Correct the date, time, or location only when that change reflects the actual plan.

A blank calendar result is not a guarantee of availability: filters and record access can hide other work. For an uncertain or disputed booking, have the division’s booking owner confirm availability.

## Review expired holds

Use Hold Expires At and the **Review expiring event hold** task to decide whether to extend, book, or release. Check the saved Booking Status after making that decision; do not treat a passed timestamp alone as confirmation that the hold was released.

## What changes when an agreement already exists

An agreement contains a copy of the event locations. For an editable Draft, update the opportunity, then use **Refresh from Opportunity** on the agreement and review the copied details. Sent documents retain the locations in their signature copy.

[Spaces & access on agreements →](../agreements/spaces-access)
