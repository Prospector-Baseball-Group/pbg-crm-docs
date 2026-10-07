import { defineConfig } from 'vitepress'
import { ticketSalesSidebar } from './ticketSalesSidebar'

const section = (text: string, pages: [string, string][]) => ({ text, collapsed: false, items: pages.map(([text, link]) => ({ text, link })) })
export default defineConfig({
  title: 'PBG CRM Handbook',
  description: 'The Salesforce handbook for PBG Event Sales and Ticket Sales. Clear workflows, practical examples, and agreement guidance.',
  base: '/pbg-crm-docs/',
  lang: 'en-US',
  cleanUrls: false,
  lastUpdated: true,
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/pbg-crm-docs/mark.svg' }], ['meta', { name: 'theme-color', content: '#153b38' }]],
  sitemap: { hostname: 'https://prospector-baseball-group.github.io/pbg-crm-docs/' },
  themeConfig: {
    logo: '/mark.svg',
    siteTitle: 'PBG CRM',
    nav: [{ text: 'Event Sales', link: '/event-sales/' }, { text: 'Ticket Sales', link: '/ticket-sales/' }, { text: 'Partnerships ↗', link: 'https://agilitek-solutions.gitbook.io/partnerships-crm-agilitek' }],
    socialLinks: [{ icon: 'github', link: 'https://github.com/Prospector-Baseball-Group/pbg-crm-docs' }],
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'On this page' },
    docFooter: { prev: 'Previous guide', next: 'Next guide' },
    editLink: { pattern: 'https://github.com/Prospector-Baseball-Group/pbg-crm-docs/edit/main/docs/:path', text: 'Suggest an improvement' },
    footer: { message: 'Salesforce workflows, explained. Maintained by Prospector Baseball Group.', copyright: '© 2026 Prospector Baseball Group' },
    sidebar: { '/ticket-sales/': ticketSalesSidebar, '/event-sales/': [
      section('START HERE', [['Event Sales hub', '/event-sales/'], ['Your first 15 minutes', '/event-sales/getting-started/quick-start'], ['Open your workspace', '/event-sales/getting-started/workspace'], ['Accounts & contacts', '/event-sales/getting-started/accounts-contacts'], ['Create an opportunity', '/event-sales/getting-started/create-opportunity']]),
      section('MANAGE YOUR PIPELINE', [['Move through stages', '/event-sales/sales/stages'], ['Log activity & follow up', '/event-sales/sales/activities'], ['Customer notes', '/event-sales/sales/notes'], ['Locations & holds', '/event-sales/sales/locations-holds'], ['Use the event calendar', '/event-sales/sales/calendar'], ['Handle incoming inquiries', '/event-sales/sales/inquiries'], ['Close lost or turn down', '/event-sales/sales/close-lost']]),
      section('BUILD AN EVENT AGREEMENT', [['Agreement workflow', '/event-sales/agreements/overview'], ['Create an agreement', '/event-sales/agreements/create'], ['Event details & contacts', '/event-sales/agreements/event-details'], ['Spaces & access', '/event-sales/agreements/spaces-access'], ['Services & food and beverage', '/event-sales/agreements/services-food'], ['Schedule payments', '/event-sales/agreements/payments'], ['Choose & check signers', '/event-sales/agreements/signers'], ['Preview, review & send', '/event-sales/agreements/send'], ['Track signatures & files', '/event-sales/agreements/tracking'], ['Cancel or correct', '/event-sales/agreements/cancel-correct']]),
      section('DELIVER & REPORT', [['Prepare the event handoff', '/event-sales/operations/handoff'], ['Read the home metrics', '/event-sales/reporting/home-metrics'], ['Lists, reports & dashboards', '/event-sales/reporting/reports']]),
      section('REFERENCE & HELP', [['Troubleshooting', '/event-sales/reference/troubleshooting'], ['Field & status glossary', '/event-sales/reference/glossary'], ['Practice the send checklist', '/event-sales/reference/practice'], ['Recent changes', '/event-sales/reference/recent-changes'], ['Access & administration', '/event-sales/administration/access'], ['About this guide', '/event-sales/reference/about']])
    ] }
  }
})
