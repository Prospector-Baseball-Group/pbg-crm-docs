# Upload files and create public links

Use **Salesforce Files** to keep a PDF, brochure, schedule, or other document in Salesforce. Create a **Public Link** when an outside recipient needs to open it without a Salesforce login.

::: tip Before you start
Use a file approved for external sharing, such as a customer-facing schedule or brochure. Anyone with a public link can forward it. Keep customer lists, signed agreements, payment details, and internal documents in their approved sharing workflow.
:::

::: info Access check — October 12, 2026
A live Sales Rep test confirmed that uploading and previewing a PDF works through Files home. **Files was absent from App Launcher, and Public Link was unavailable for that rep.** If you see the same issue, ask your administrator for the Files page link and an access review. The public-link steps below apply once the required access and organization settings are enabled.
:::

## Upload a file

1. Open the **App Launcher** (the nine dots), search for **Files**, and select **Files**. If it is already in your app's navigation bar, select it there.
2. Choose **Owned by Me**, then **Upload Files**.
3. Select the file from your computer. Give it a clear name first—for example, **2027 Team Schedule.pdf**—and remove duplicate-download suffixes such as **(1)**.
4. Wait for the upload to finish, then choose **Done**.
5. Open the file from the list and check that its title and contents are correct.

**Expected result:** the document appears in **Owned by Me**. Uploading on Files home does not automatically attach it to an Account or Opportunity or make it publicly accessible. See [Salesforce's upload guidance](https://help.salesforce.com/s/articleView?id=experience.collab_files_uploading.htm&language=en_US&type=5).

### Put a file on a customer or opportunity record

If the document belongs with a particular record, open that record and find its **Files** related list, usually under **Related**. Choose **Upload Files**, or **Add Files → Upload Files** when shown. To attach a file already in Salesforce, use **Add Files** and select the existing file. Confirm it appears on the intended record.

Record pages differ. If there is no Files list, use Files home and ask your administrator how that record's files should be organized. Files added to a shared library inherit that library's sharing settings.

### Correct the title after uploading

Open the file's action menu (**Show more actions** or **Show Actions**), select **Edit File Details**, change **Title**, and save. Reopen the file to confirm the display name. Renaming the title in Salesforce does not rename the original file on your computer.

## Create a public link

These steps require public links to be enabled and appropriate access to the file. If the option is missing, use the troubleshooting section below.

1. Open the uploaded file and select **Public Link**, if available. Another route is the file's action menu → **Share**, then **Who Can Access → Public Link Sharing**.
2. Review the expiration and password options shown. Choose an expiration that covers the intended use. If you enable a password, retain it for the recipient.
3. Select **Create Link** and confirm any sharing prompt.
4. Select **Copy Link**, or copy the generated URL.

An existing link can be copied again from the same dialog. Public-link recipients can read or download the file; this does not make them editors. Salesforce documents these controls in [Share Files Via Link](https://help.salesforce.com/s/articleView?id=sf.collab_files_sharing_via_link.htm&language=en_US&type=5).

## Test the link before sending it

1. Open a private/incognito browser window where you are not signed in to Salesforce.
2. Paste the copied public link.
3. Confirm the intended document opens and its title and contents are correct. If password protection is enabled, verify the password works. Check the download if that is what the recipient needs.
4. Paste the tested link into your email using descriptive text, such as **View the 2027 schedule**. Include any password or expiration instructions the recipient needs.

**Expected result:** the recipient can reach the file without a Salesforce account. A Salesforce login prompt usually means you copied an internal file or record URL. Return to **Public Link** and copy the generated link instead of the browser address bar.

A link to a PDF opens the document; it does not turn the PDF into the body of an email. Use your email editor for the message itself.

## Stop sharing or replace the file

Return to the file's **Public Link** dialog and delete the link when it should no longer work. Confirm the old URL no longer opens the file in a signed-out window. Deleting a public link leaves the stored file in Salesforce; it cannot recall copies someone already downloaded. A replacement link has a different URL, so update any reusable email templates that contain the old one.

To revise the document, use **Upload New Version** on the existing file when appropriate. Recheck the public link afterward to confirm exactly which content recipients see. Uploading a separate file does not update links to the original.

## If something is missing or does not work

| What you see | What to do |
| --- | --- |
| Files is missing from the navigation bar | Search **Files** in App Launcher. If it is missing there too, ask your administrator to check Files tab visibility and app access. |
| Upload fails | Note the displayed error. Check the file type, file size, and whether you can add files in that location; ask your administrator if the error persists. |
| Public Link or Public Link Sharing is missing | Ask your administrator to check the organization's public-link settings, your **Create Public Links** permission, and your access to this file. Library files also depend on library permissions. |
| Recipient sees a Salesforce login page | Copy the generated public link instead of an internal Salesforce URL. |
| Link has expired or no longer works | Reopen the link settings, check expiration or deletion, and test the current link before resending. |
| Recipient sees the wrong document | Check the file title and version. Test the exact link from your email in a signed-out window. |

For an access problem, send the file's internal Salesforce link and the error to your administrator through your internal support channel. Salesforce's [public-link setup reference](https://help.salesforce.com/s/articleView?id=experience.admin_files_libraries_content_deliveries_public_links.htm&language=en_US&type=5) explains the required permissions.
