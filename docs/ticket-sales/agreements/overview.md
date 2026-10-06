# Ticketing Agreements

The Ticketing Agreement workspace prepares a season-ticket agreement, sends it through Adobe Sign, and keeps the preview, signed document, and audit trail with the sale.

<div class="ts-journey"><span>Closed Won</span><b>→</b><span>Draft</span><b>→</b><span>Preview Ready</span><b>→</b><span>Out for Signature</span><b>→</b><span>Signed</span></div>

## When to use it

Use this workflow when your team needs to send the customer a season-ticket agreement from Salesforce. Confirm the correct channel with your ticket operations process. **Lancaster's rollout guidance uses Salesforce for people who do not complete renewals online**, so do not send a second agreement automatically when the online process already handles it.

Active templates are configured for Akron RubberDucks, Jacksonville Jumbo Shrimp, and Lancaster Stormers. Preview the actual document to confirm the season, team, and terms before sending. The selected Opportunity Division determines the configured template; do not infer template currency from a template's internal name.

## Before you start

- The record is a **Ticketing Opportunity** with Stage **Closed Won**.
- You can edit the Opportunity and have Ticketing Agreement access.
- The correct Account and Division are present.
- Amount is the intended agreement total.
- The signer is known and has complete contact information.
- You have the ticketing-system **Order ID** and agreed payment schedule.

## Follow the workflow

1. [Create the agreement and complete Customer & Delivery](create.md).
2. [Set payments and generate a preview](payments-preview.md).
3. [Send, track, and retrieve documents](send-track.md).

## Keep the records distinct

The Opportunity records the sale. The Ticket Order records imported purchase details. The Ticketing Agreement records the signature process. A payment schedule on an agreement records agreed dates and amounts; it is not proof of payment collection.

::: warning Agreement type matters
These instructions apply to **Ticketing Agreements**. Special Event Agreements and Agilitek Partnership Agreements have different workspaces, validation rules, and lifecycles.
:::
