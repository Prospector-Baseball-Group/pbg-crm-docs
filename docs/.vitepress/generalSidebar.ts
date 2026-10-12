const guideItems = [
  { text: 'Files & public links', link: '/general/files-public-links' },
  { text: 'Customer notes', link: '/general/notes' },
  { text: 'Accounts & contacts', link: '/general/accounts-contacts' },
  { text: 'Personal list views', link: '/general/list-views' },
  { text: 'Future tasks & reminders', link: '/general/future-tasks' }
]

export const sharedGuides = {
  text: 'GENERAL', collapsed: false,
  items: [{ text: 'General hub', link: '/general/' }, ...guideItems]
}

export const generalSidebar = [
  sharedGuides,
  { text: 'REFERENCE', items: [{ text: 'Recent changes', link: '/general/recent-changes' }] },
  { text: 'SALES HANDBOOKS', items: [
    { text: 'Event Sales', link: '/event-sales/' },
    { text: 'Ticket Sales', link: '/ticket-sales/' },
    { text: 'Partnerships ↗', link: 'https://agilitek-solutions.gitbook.io/partnerships-crm-agilitek' }
  ] }
]
