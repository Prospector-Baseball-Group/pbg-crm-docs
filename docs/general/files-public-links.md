# Upload files and create public links

Use **Salesforce Files** to keep a PDF, brochure, schedule, or other document in Salesforce. Create a **Public Link** when an outside recipient needs to open it without a Salesforce login.

::: tip Before you start
Use a file approved for external sharing, such as a customer-facing schedule or brochure. Anyone with a public link can forward it. Keep customer lists, signed agreements, payment details, and internal documents in their approved sharing workflow.
:::

## Choose where the file belongs

| Location under **Files → Libraries** | Use it for | Who can manage files |
| --- | --- | --- |
| **Examples** | Reusable examples for all staff | All internal staff |
| **Akron RubberDucks** | Akron team documents | Akron staff and PBG staff |
| **Jacksonville Jumbo Shrimp** | Jacksonville team documents | Jacksonville staff and PBG staff |
| **Lancaster Stormers** | Lancaster team documents | Lancaster staff and PBG staff |

Choose the **top-level Examples library**. The older **Examples folder inside Asset Library** is a separate location and is not the shared staff library. You see libraries available through your membership; a rep does not automatically see every division's library.

Library membership allows uploading, new versions, folder organization, internal sharing, and deletion. **Public links require separate permission.** Sharing within a library does not automatically publish a file on the internet.

## Upload to your division library

1. Open the **App Launcher** (nine dots), search for **Files**, and select **Files**. Choose **Libraries**, then your division, such as **Akron RubberDucks**.
2. Select **Add Files**, then **Upload Files** in the file selector.
3. Choose a clearly named file, such as **2027 Team Schedule.pdf**.
4. Wait for the upload to reach **100%** and show **1 of 1 file uploaded**, then select **Done**.
5. Return to the library and confirm the file is listed. Open it to check the title and preview.

**Do not stop at the upload notification:** confirm that the document actually appears inside the intended library. If it only appears in **Owned by Me**, return to the library, choose **Add Files**, select the uploaded file, and choose **Add**. Reuse that upload instead of creating another copy.

## Upload to Owned by Me

1. Open the **App Launcher**, search for **Files**, and select **Files**. You can also use Files in your app navigation when it is present.
2. Choose **Owned by Me**, then **Upload Files**.
3. Select the file from your computer. Give it a clear name first—for example, **2027 Team Schedule.pdf**.
4. Wait for the upload to finish, then choose **Done**.
5. Open the file from the list and check that its title and contents are correct.

**Expected result:** the document appears in **Owned by Me**. Uploading on Files home does not automatically attach it to an Account or Opportunity or make it publicly accessible. See [Salesforce's upload guidance](https://help.salesforce.com/s/articleView?id=experience.collab_files_uploading.htm&language=en_US&type=5).

### Put a file on a customer or opportunity record

If the document belongs with a particular record, open that record and find its **Files** related list, usually under **Related**. Choose **Upload Files**, or **Add Files → Upload Files** when shown. To attach a file already in Salesforce, use **Add Files** and select the existing file. Confirm it appears on the intended record.

Record pages differ. If there is no Files list, use Files home and ask your administrator how that record's files should be organized. Files added to a shared library inherit that library's sharing settings.

### Correct the title after uploading

Open the file's action menu (**Show more actions** or **Show Actions**), select **Edit File Details**, change **Title**, and save. Reopen the file to confirm the display name. Renaming the title in Salesforce does not rename the original file on your computer.

## Create a public link

1. In the library or Files list, select the file's title to open its preview.
2. Select **Public Link** in the preview toolbar. If the toolbar does not show it, open **Show More → View File Details**, then select **Public Link** on the file details page.
3. In **Create public link**, review **Expiration date**. When it is on, set the date and time through which recipients should have access.
4. Review **Password**. Leave it off for a document intended to be openly accessible, or turn it on if the recipient should need a password.
5. Select **Create Link**. If Salesforce displays **Create unrestricted public link?**, confirm that the file is intended for external sharing and select **Create**.
6. Select **Copy Link**, or select and copy the full value in **Public link URL**.

**Expected result:** the dialog contains a public URL, **Copy Link**, and the **Delete public link** trash icon. You can return to **Public Link** to copy the same link again.

The link lets recipients view and download the file without making them editors. Salesforce documents these controls in [Share Files Via Link](https://help.salesforce.com/s/articleView?id=sf.collab_files_sharing_via_link.htm&language=en_US&type=5).

## Test the link before sending it

1. Open a private/incognito browser window where you are not signed in to Salesforce.
2. Paste the copied public link.
3. Confirm the intended document opens and its title and contents are correct. If password protection is enabled, verify the password works. Check the download if that is what the recipient needs.
4. Paste the tested link into your email using descriptive text, such as **View the 2027 schedule**. Include any password or expiration instructions the recipient needs.

**Expected result:** the recipient can reach the file without a Salesforce account. A Salesforce login prompt usually means you copied an internal file or record URL. Return to **Public Link** and copy the generated link instead of the browser address bar.

A link to a PDF opens the document; it does not turn the PDF into the body of an email. Use your email editor for the message itself.

## Public Links and Content Deliveries

Use **Public Link** for a schedule, brochure, or other approved document that recipients should open without signing in. You can set an expiration date and password in the link dialog.

**Content Deliveries** are a separate sharing workflow that adds view/download tracking. Salesforce documents their creation workflow in Classic; Lightning Email can also generate delivery-based attachment links for users with the feature. They are not a required extra step when using **Public Link**.

If you need tracked deliveries, ask your administrator to confirm the intended workflow and access. See Salesforce's [Content Deliveries setup and tracking guidance](https://help.salesforce.com/s/articleView?id=sf.content_delivery_about.htm&language=en_US&type=5). The walkthrough on this page verifies **Public Link** creation and recipient access.

## Stop sharing or replace the file

Return to the file's **Public Link** dialog, select the **Delete public link** trash icon, and confirm **Delete**. Open the old URL in a fresh private/incognito tab to confirm that it no longer opens the file. A previously loaded preview may remain visible until it is closed. Deleting a public link leaves the stored file in Salesforce; it cannot recall copies someone already downloaded. A replacement link has a different URL, so update any reusable email templates that contain the old one.

To revise the document, use **Upload New Version** on the existing file when appropriate. Recheck the public link afterward to confirm exactly which content recipients see. Uploading a separate file does not update links to the original.

## If something is missing or does not work

| What you see | What to do |
| --- | --- |
| Files is missing from the navigation bar | Search **Files** in App Launcher. If it is missing there too, ask your administrator to check Files tab visibility and app access. |
| Upload fails | Note the displayed error. Check the file type, file size, and whether you can add files in that location; ask your administrator if the error persists. |
| Public Link or Public Link Sharing is missing | Ask your administrator to check the organization's public-link settings, your **Create Public Links** permission, and your access to this file. For a file in a shared library, the assigned library role must allow **Deliver Content**; a personal-file permission alone does not grant this. |
| Recipient sees a Salesforce login page | Copy the generated public link instead of an internal Salesforce URL. |
| Link has expired or no longer works | Reopen the link settings, check expiration or deletion, and test the current link before resending. |
| Recipient sees the wrong document | Check the file title and version. Test the exact link from your email in a signed-out window. |

For an access problem, send the file's internal Salesforce link and the error to your administrator through your internal support channel. Salesforce's [public-link setup reference](https://help.salesforce.com/s/articleView?id=experience.admin_files_libraries_content_deliveries_public_links.htm&language=en_US&type=5) explains the required permissions.

## Worked example: upload, share, and check a schedule

1. Open **Files → Libraries → your division**.
2. Choose **Add Files → Upload Files** and select **2027 Team Schedule.pdf**.
3. When the upload finishes, select **Done** and confirm the schedule appears in the library.
4. Open the schedule, check its preview, and select **Public Link**.
5. Review the expiration and password settings, choose **Create Link**, then **Create** when prompted.
6. Copy the **Public link URL** and open it in a private/incognito window.
7. Confirm the correct schedule appears without a Salesforce login, then choose **Download** and open the downloaded PDF.
8. Share the tested URL with the intended recipients. When it should no longer be accessible, use **Delete public link → Delete** and test the old URL in a fresh private tab.

*Verified October 12, 2026 as a sales rep: division-library upload, PDF preview, public-link creation, access without Salesforce authentication, a download matching the original PDF, and link revocation. The temporary test link and upload were removed afterward.*
