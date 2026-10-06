# Access & administration

This is a practical checklist for resolving access and configuration questions. It is not an instruction to grant broad administrative permissions.

## When onboarding a seller

Confirm the intended division, sales responsibilities, and required workflows. The production **Event Seller** permission set is the additive Event Sales bundle. Agreement work uses the appropriate Special Event Agreement permissions in addition to the user’s actual record access.

An administrator should verify:

- Salesforce user is active and correctly licensed.
- Event Sales app and Opportunity record type are available.
- Division is correctly set.
- Required account, contact, opportunity, and agreement object/field access is present.
- Record sharing allows the user to open and edit the actual records they need.
- Report-folder access is correct.
- Agreement template and integration permissions are appropriate to the division.

An app assignment or group membership alone does not prove that a user can edit a particular agreement or send through the integration.

## Agreement configuration

The active template verified for this guide is **Akron Special Event Agreement v2**. The template controls document content and whether Spaces & Access, Services & Add-Ons, and Food & Beverage appear. It also controls the supported food-and-beverage fields.

Maintain the division’s active location catalog and approved access areas. Do not add a customer-specific workaround location or use another division’s template to bypass missing configuration.

## Validate changes through the real workflow

For a template or signature integration change, check the seller’s access, required-field behavior, preview, send result, signer order, status update, cancellation, and returned files using the authorized internal test process.

A technical deployment passing does not prove actual email delivery or completed signing. Keep business-data corrections separate from integration repairs.

## Keep support private

Report customer-specific issues through the internal support channel. The public GitHub repository contains user guidance and customer-free examples; it must not contain credentials, Salesforce exports, private agreement PDFs, customer screenshots, or internal diagnostic logs.
