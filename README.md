# PBG CRM handbook

Public, task-oriented documentation for Prospector Baseball Group’s Salesforce Event Sales and Ticket Sales modules.

**Read the guide:** https://prospector-baseball-group.github.io/pbg-crm-docs/

The Event Sales handbook covers accounts and contacts, opportunities, pipeline stages, locations and holds, calendar, activities, the Akron Special Event Agreement workflow, reporting, and troubleshooting. Includes customer-free Salesforce screenshots and an interactive, fictional send-readiness exercise. The companion Ticket Sales section covers the seller workspace, pipeline, activities, ticket history, reporting, and ticketing agreements. Both modules share search, navigation, and publishing. No voice-over video is required.

## Develop

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
```

## Check and publish

```sh
npm run check
npm run build
npm run preview
```

The build fails on unresolved documentation links. The content check validates local links and image references and flags common private-data patterns. Pull requests run the checks and build. Pushes to main deploy the generated static site through GitHub Pages Actions.

## Maintaining the guide

- Write task-focused steps using the visible Salesforce labels.
- Verify changes against deployed behavior and the affected seller’s access.
- Keep verification dates and release limitations current in `docs/event-sales/reference/recent-changes.md`.
- Capture customer-free views or crop to generic controls; inspect every image before committing it.
- Never add customer records, internal chat exports, signed agreements, diagnostic evidence, credentials, or Salesforce session links.
- Keep private evidence in the internal Salesforce workspace, outside this repository.
- Use an internal channel for customer-specific support. Public issues are for documentation feedback only.

The guide follows the organization of the Agilitek Partnerships CRM reference, with original instructions for PBG’s Event Sales implementation. It does not claim Partnership features apply to Event Sales.

The stable VitePress release uses a Vite override to 6.4.3 for patched build/development tooling. Keep this override under review when upgrading VitePress. The published output is a static site and contains no Salesforce integration or credentials.
