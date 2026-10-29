# Commission & revenue splits

Revenue splits decide who earns commission and quota credit on a deal. Commission is earned once a won deal is fully paid. Both live on the opportunity's **Commission** tab, the last tab on every Ticketing, Event Sales, and Partnership opportunity.

::: info Applies with the payments release
This guide describes the Commission tab released with the payments and commissions update. See [Recent changes](./recent-changes) for its verification status.
:::

## What the Commission tab shows

Everyone who can open the deal sees its **Revenue Splits**: each rep, their split, and the total. The owner's row is tagged **Owner**. A deal with no splits shows *No Revenue splits yet, so the owner gets full credit.*

Finance and commission admins also see the commission summary:

| Item | Meaning |
| --- | --- |
| Commission Status | Not Eligible, Eligible, Approved, Paid, or Hold |
| Commission Base | The amount commission is paid on |
| Fully Paid | The date the deal became fully paid |
| Commission Period / Commission Paid | When commission was paid out, once it has been |
| Commission | Each rep's share of the Commission Base, in the splits table |

Sales reps see the deal's **Payment Status** and **Fully Paid** date in place of the commission fields.

### What commission is paid on

| Line | Commission Base |
| --- | --- |
| Ticketing | Net ticket revenue from the linked Tickets.com orders, not the deal amount |
| Event Sales | The final amount after **Finalize Event**, including post-event charges |
| Partnership | Deal value: cash plus barter |

## When commission is earned

A won deal's commission becomes **Eligible** automatically once the deal is **Fully Paid**. Its base freezes at that point. Finance reviews the deal, a commission admin approves it, and it's marked **Paid** after payroll.

Once commission is earned, the deal's splits, owner, and amounts lock. Only a commission admin can change them.

## Change the splits

You can change a deal's splits if you can edit the deal (you're its owner, or a manager for its division) and it isn't fully paid yet, or if you're a commission admin.

1. Open the deal's **Commission** tab.
2. Select **Edit Splits**.
3. Choose a **Rep** and enter their **Split** on each row. Use **Add Split** for another rep, or the delete icon to remove one.
4. Check that the total reads **Total: 100%**.
5. Select **Save Splits**. Select **Cancel** to discard your changes.

**Expected result:** the *Splits saved* message appears and the table shows the new splits. Commission and quota credit follow the new splits.

- The owner's row can't be removed. To give the owner no credit, set their split to **0%**.
- Each rep can appear only once, and every split must be between 0% and 100%.
- A commission admin editing an earned deal sees *Commission on this deal is Eligible. Changing splits now changes who gets paid.*

### Example

A fictional $8,000 partnership split 60 / 40 between two reps:

| Rep | Split | Commission |
| --- | ---: | ---: |
| Rep A (Owner) | 60% | $4,800 |
| Rep B | 40% | $3,200 |
| **Total** | **100%** | **$8,000** |

The Commission column shows each rep's share of the Commission Base. It is not the commission payment itself, which depends on the rep's rate.

## Quota credit follows splits

Sales Targets credit each rep with their Revenue split of the deal. A rep at 0% earns no credit. The **Quota Credit Rep** field is retired: if a deal's credit should go to someone other than its owner, set the splits instead.

## For commission admins: Commission Review

The **Commission Review** tab lists the deals that need attention. Filter by **Status**, **Line**, **Division**, and **Season**. **Needs Action** shows deals that are Eligible, Approved, on Hold, or flagged for reversal.

1. Select one or more deals.
2. Choose an action:
   - **Approve** approves commission on Eligible deals.
   - **Mark Paid…** asks once for the **Commission Period** (for example, FY2027-02) and **Paid Date**, then marks the approved deals paid.
   - **Hold** pauses a deal. **Release** sends it back through the payment rules; a deal that was Approved before the hold needs approving again.
   - **Clear Reversal** accepts a flagged deal's current base.
3. Read the result. Each deal that couldn't be updated shows its own reason.

A deal is flagged **Reversal Needed** when an earned deal drops below Fully Paid or its base changes. Its Commission column explains why, for example *Eligible · Reversal: No longer fully paid (Partially Paid)*. Review the deal before clearing the flag.

## Reports and the dashboard

| Folder | Who can open it | Reports |
| --- | --- | --- |
| Collections | All internal users | Past Due Payments, Payments Due Next 90 Days, Collections by Month, Won but Not Scheduled, Schedule Variance, Events Awaiting Finalization, Ticketing Awaiting Ticket Order, Ticketing Amount vs Net Revenue, Receipts Entered by Deal Owner |
| Commissions | Commission reviewers | Commission Eligible – Fully Paid, Commission Approved – Awaiting Payout, Commission Paid History, Commission Reversals Needed, Splits Below 100% |

The **Commissions & Collections** dashboard summarizes both folders. Finance reviews **Receipts Entered by Deal Owner** before commission is approved.

## If something looks wrong

| What you see | What to do |
| --- | --- |
| *Splits lock once the deal is fully paid. Ask a commission admin to change them.* | The deal is fully paid, so its commission is earned. Ask a commission admin |
| *Only the deal owner or a division manager (until the deal is fully paid) or a commission admin can change splits.* | Ask the deal's owner, a manager for its division, or a commission admin to make the change |
| *Commission on this deal is earned. Only a commission admin can change its splits.* | The same lock, reported when saving. Ask a commission admin |
| *Revenue splits must total 100%.* | Adjust the rows until the total reads 100% |
| *These splits total 80%. Revenue splits should total 100%.* | An older deal's splits don't add up. Its owner or a commission admin should correct them |
| **Edit Splits** is missing | You aren't the owner, or the deal is fully paid |
| The commission summary is missing | Only finance and commission admins see it; reps see the splits |

Related: [Track payments on a deal](./payments) · [Partnership splits](/partnerships/opportunity-splits)
