const section = (text: string, pages: [string, string][]) => ({text, collapsed: false, items: pages.map(([text, path]) => ({text, link: `/ticket-sales/${path}`}))})
export const ticketSalesSidebar = [
  section('START HERE', [['Ticket Sales hub',''], ['Your first 15 minutes','getting-started/quick-start'], ['Navigate your workspace','getting-started/workspace'], ['Accounts & contacts','getting-started/accounts-contacts']]),
  section('SELL & FOLLOW UP', [['Create an opportunity','sales/create-opportunity'], ['Categories & products','sales/products'], ['Move through stages','sales/stages'], ['Track your pipeline','sales/pipeline'], ['Log activities','sales/log-activities'], ['Email & campaigns','sales/email-campaigns']]),
  section('TICKETING AGREEMENTS', [['Agreement workflow','agreements/overview'], ['Create & choose a signer','agreements/create'], ['Payments & preview','agreements/payments-preview'], ['Send, track & documents','agreements/send-track']]),
  section('CUSTOMERS & REPORTING', [['Ticket orders & history','customers/ticket-orders'], ['Understand revenue','customers/revenue'], ['Hustle Score','reporting/hustle-score'], ['Reports & dashboards','reporting/reports'], ['Manager review','reporting/manager-review']]),
  section('REFERENCE & HELP', [['Troubleshooting','help/troubleshooting'], ['Field & record glossary','reference/glossary'], ['Access & onboarding','administration/access'], ['Recent changes','reference/recent-changes']])
]
