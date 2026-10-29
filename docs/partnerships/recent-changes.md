# Recent changes and verification

## October 28, 2026 — Payments tab and splits on the Commission tab (with the payments release)

- Partnership opportunities track payments on the **Payments** tab instead of the Scheduled Payments list. Existing scheduled payments move onto each deal. Barter is a **Trade (Barter)** payment, marked received when the trade is delivered. See [Payments & barter](./payments).
- Revenue splits moved to the **Commission** tab. Owners edit them until the deal is fully paid; commission admins can edit them any time. Commission is paid on deal value, cash plus barter, and quota credit follows the splits. See [Revenue splits](./opportunity-splits).

**Verification:** checked in a Salesforce sandbox with fictional records on October 28, 2026. The full automated test suite passed. Automated tests also ran the Payments tab, Commission tab, Tickets.com Orders card, Finalize Event, and Ticketing agreement payments as a sales rep with the permissions sellers hold. Screens were reviewed in an administrator browser session; a separate seller browser session was not used. No agreement was sent for signature and no payment was collected. These changes apply in production when the payments and commissions release goes live; until then, production shows the earlier screens.

## October 16, 2026 — Native opportunity revenue splits

Enabled native **Revenue** splits and added **Opportunity Splits** to the Partnership opportunity layout. Existing opportunities were initialized with 100% assigned to their owner. Revenue splits use the standard opportunity **Amount** and must total 100%; Overlay splits are not enabled.

**Verified as a partnership seller:** opened a temporary partnership opportunity in the Agilitek Partnership Module, added another team member in the native editor, and saved a 60% / 40% allocation. Salesforce calculated $600 / $400 on a $1,000 test amount, displayed both saved rows, and recorded the updates under the seller’s user. The editor flagged a total below 100%. The temporary account, opportunity, team membership, and splits were removed after testing.

This verifies entering and saving the allocation. Deductions, separate revenue streams, commission calculations, and integration with existing PBG goal dashboards remain future work.

Follow the [Opportunity revenue splits guide](./opportunity-splits) for the current workflow.
