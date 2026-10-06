# Resolve duplicates and missing history

Keep one coherent customer history. Before adding a replacement record, check whether the information is on another record, hidden by a filter, or waiting for review.

## Flag a potential duplicate

1. Open both records and compare the organization or person's identity, email, phone, address, and sales history. A similar name alone is not enough.
2. On the Account you are reviewing, open the header actions or overflow menu and choose **Flag Duplicate**.
3. Select the matching **Business Accounts to Flag** or **Person Accounts to Flag**, as appropriate. The current picker accepts up to ten selections.
4. Complete the flow and look for its confirmation that the potential duplicates were flagged.
5. Keep the record links and any useful explanation available for the reviewer.

Flagging submits records for review; it does not immediately merge them. The scheduled review currently runs daily at **7:00 a.m. Pacific time**, following daylight saving time. Ambiguous identities, relationship conflicts, or a blocked data prerequisite can require further review. The schedule is not a promise that every flag will be merged the next morning.

If the action is missing, the record types differ, or you cannot select the suspected match, send the links to your administrator. Do not delete one record to force the result. A Person Account representing an employee and a Business Account representing the employer are usually two different entities that need a relationship.

## An old ScoreCRM customer or activity is missing

Search Salesforce by name variants, email, and phone, then inspect the likely records. Check **Email 2**, related contacts, Notes, and the Activity timeline with **All time** selected. Imported activity can be attached to a person even when you first searched the business.

The migration involved review of incomplete and duplicate records. Do not assume every historical item was imported simply because a rollout announcement said the migration was complete. Send a specific missing record or activity for investigation, with the legacy reference if available. If a new record is needed for active work, create it only after the duplicate search and your team's review.

Historical activities can show an integration user when the original legacy owner could not be mapped to a Salesforce user. That does not establish who performed the outreach. Preserve the historical context and ask an administrator to review attribution instead of assigning old completed work to yourself.

## Keep reference notes separate from outreach

Use the Account's **Notes** tab for durable relationship context: preferences, decision-making process, or information the next seller should know. Use a Task for a call, meeting, message, or promised action. A note is not a completed outreach activity in Hustle Score.

For a general company inbox, use **Company Email** on the Business Account. Add a named Contact when you know the person. **Phone 1 Extension** stores an extension separately from the main phone number. These fields help preserve useful information without inventing a person for a shared inbox.

## A company already belongs to another rep or club

Account Owner, Opportunity Owner, Division, and Quota Credit Rep serve different purposes. For a separate sale with the same national business, use the existing Account when it represents the same organization, and set the correct owner and Division on your Opportunity. Follow approved quota-credit rules.

Use **Parent Account** for a real branch/subsidiary relationship when separate Business Accounts are appropriate. Do not create a duplicate of the same business just to obtain ownership, or change its Account Owner solely because your club has a new deal. Ask an administrator for access or an approved ownership change when needed.

## A purchase is missing

Start with the [Ticket Order](ticket-orders.md), not a new Opportunity. Verify the source order, buyer, associated business, season, and Matching Opportunity. An imported order, a customer relationship, and a sales opportunity are separate records; one can be correct while another needs attention.

**Success looks like:** the issue is tied to specific record links, the identity is clear, and the reviewer has enough context to correct the right record.
