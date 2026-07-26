import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'de-DE',

  title: 'Codex Nachlese',

  description: 'Technische Dokumentation des Codex des Abenteuers',

  themeConfig: {
    nav: [
      { text: 'Start', link: '/' }
    ],

    sidebar: [
      {
        text: 'Projekt',
        items: [
          { text: 'Start', link: '/' }
        ]
      },
      {
        text: 'Architektur',
        items: [
          { text: 'Übersicht', link: '/architecture/overview' },
          { text: 'Navigation', link: '/architecture/navigation' },
          { text: 'Datenmodell', link: '/architecture/datamodel' }
        ]
      },
      {
        text: 'Entwicklung',
        items: [
          { text: 'Entwicklungsregeln', link: '/development/development-rules' },
          { text: 'Aktueller Stand', link: '/development/current-status' },
          { text: 'Roadmap', link: '/development/roadmap' },
          { text: 'Changelog', link: '/development/changelog' },
          { text: 'Entscheidungen', link: '/development/decisions' }
        ]
      },
      {
        text: 'Code-Referenz',
        items: [
          { text: 'Übersicht', link: '/code/' },
          { text: 'Projektstruktur', link: '/code/generated/project-structure' },
          { text: 'Klassenübersicht', link: '/code/generated/classes' }
        ]
      }
    ]
  }
})