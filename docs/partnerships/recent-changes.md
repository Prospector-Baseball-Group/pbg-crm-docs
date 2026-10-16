# Recent changes and verification

## October 16, 2026 — Native opportunity revenue splits

Enabled native **Revenue** splits and added **Opportunity Splits** to the Partnership opportunity layout. Existing opportunities were initialized with 100% assigned to their owner. Revenue splits use the standard opportunity **Amount** and must total 100%; Overlay splits are not enabled.

**Verified as a partnership seller:** opened a temporary partnership opportunity in the Agilitek Partnership Module, added another team member in the native editor, and saved a 60% / 40% allocation. Salesforce calculated $600 / $400 on a $1,000 test amount, displayed both saved rows, and recorded the updates under the seller’s user. The editor flagged a total below 100%. The temporary account, opportunity, team membership, and splits were removed after testing.

This verifies entering and saving the allocation. Deductions, separate revenue streams, commission calculations, and integration with existing PBG goal dashboards remain future work.

Follow the [Opportunity revenue splits guide](./opportunity-splits) for the current workflow.
