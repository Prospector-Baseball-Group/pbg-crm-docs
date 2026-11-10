# Merge duplicate Business Accounts

Managers can use **Duplicate Record Sets** in **PBG Sales** to combine two records for the same business, even when their names differ and Salesforce shows no duplicate warning.

## Open the native merge tools

1. Open **PBG Sales** from the App Launcher.
2. Open the navigation dropdown beside the current section and choose **Duplicate Record Sets**.
3. Click **New**.
4. In **Duplicate Rule**, type **Standard**. If the rule is not suggested, choose **Search Duplicate Rules** to open the full results. Select **Standard Account Duplicate Rule** for **Account**; the selected value can appear as **Standard_Account_Duplicate_Rule**.
5. Click **Save**. Salesforce assigns a name beginning **DRS-**. Creating this set does not change or merge the Accounts.

If the section is missing, refresh Salesforce. You can also search for **Duplicate Record Sets** in the App Launcher. Contact your administrator if you still cannot open it or create a set.

## Add the two Accounts

1. Open the set's **Related** tab.
2. In **Duplicate Record Items**, click **New**.
3. Select the first Account in **Record** and save.
4. Repeat for the second Account.

For example, **JG Cedar Mechanical** and **JG Cedar Heating** can be added to the same set after you confirm they represent the same company. Their names do not have to match the duplicate rule. Start with two records so the comparison is easy to review.

## Compare and merge

1. Return to the Duplicate Record Set. Refresh the page after adding both Accounts, then choose **Compare and Merge** in the record header (or its action dropdown). The button appears only after the set has at least two records.
2. Select the Accounts to combine and click **Next**.
3. Choose the principal Account to keep. Prefer the established working record with the correct ownership and business history.
4. Review the available fields and select the values to retain, including the Account name and owner. Salesforce initially shows fields with different values; use **Show All Fields** to review more. Copy useful alternate names or context into a customer Note before merging.
5. Click **Next**, review **Confirm merge**, then click **Finish**.
6. Open the retained Account. Check its owner, Contacts, Opportunities, agreements, Notes, Files, and activity history. Report any missing relationship immediately with the retained record's link and the duplicate set number.

**Success looks like:** one retained Business Account, the expected related history, and an automatic internal follow-up record for later data reconciliation.

## When to send the records for review

Use this workflow only for a confirmed duplicate business within your approved management responsibility. Separate branches, subsidiaries, departments, employers, and individual customers can be legitimately different records.

Use **Flag Duplicate** or send both record links to your administrator when:

- One or both records are **Person Accounts**, or the record types differ.
- Different clubs own the customer relationship and the retained ownership is unclear.
- Both records contain different ticketing IDs, external source identifiers, or conflicting information you cannot preserve confidently.
- You cannot see a field or related history needed for the decision, or Salesforce rejects the merge.

Do not delete an Account as a substitute for merging, or rename it just to force a duplicate alert. The native comparison chooses retained field values; it does not automatically combine every conflicting custom value. A merge has no simple user-facing undo.

For the existing review workflow, see [Flag duplicates and investigate missing history](/ticket-sales/customers/data-quality).

## FDP follow-up is automatic

Successful Account merges automatically leave an internal **Pending** FDP review record containing the original and retained Account IDs, original identity/source values, merge time, and who performed the merge. Managers do not need to set a checkbox or submit a second request.

This records a Salesforce merge for later review; it does **not** merge FDP identities or confirm that FDP is reconciled. Person Accounts continue through the administrator's FDP review process.

## Access and troubleshooting

This workflow is enabled for the current club/function managers. The Duplicate Record Sets permission and Account merge authority are separate. If **New**, **Compare and Merge**, or an Account is unavailable, send the administrator the record links and the exact message. Do not request full Salesforce administrator access.

