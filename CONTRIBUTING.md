# Updating the handbook

1. Confirm the workflow in deployed Salesforce and check which divisions and permissions it applies to.
2. Update the relevant article, using the exact visible action labels and an explicit expected result.
3. Review links from adjacent articles and update the glossary or troubleshooting table if needed.
4. Use fictional examples. Review every screenshot for customer names, contact details, financial information, internal identifiers, and unrelated browser content.
5. Add a dated entry to Recent changes. Distinguish deployed functionality from outstanding end-to-end verification.
6. Run `npm run check` and `npm run build`, preview desktop and narrow layouts, and check search for a newly added term.
7. Open a pull request with the user-visible change and verification performed.

Never report customer-specific Salesforce issues in a public issue or pull request. Use the internal support channel.
