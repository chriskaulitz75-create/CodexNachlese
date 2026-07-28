# Aktueller Stand

## Projekt

**Codex des Abenteuers**

Ein Obsidian-Plugin zur Verwaltung von Pathfinder-2e-Kampagnen.

---

## Version

**0.1 (Entwicklungsstand)**

---

## Status

🟢 Entwicklung aktiv

---

## Aktuelle Entwicklungsphase

Die Grundarchitektur ist abgeschlossen.

Der Fokus liegt jetzt auf der funktionalen Erweiterung und strukturierten Darstellung der Charakteransicht.

---

## Bereits umgesetzt

- ✅ Dashboard
- ✅ Kampagnenverwaltung
- ✅ Kampagnennavigation
- ✅ CodexContext
- ✅ CharacterManager
- ✅ CampaignManager
- ✅ CharacterView
- ✅ DataManager
- ✅ ViewManager
- ✅ NavigationManager
- ✅ CampaignNavigationManager
- ✅ Auswahl eines Charakters über die Kampagnenansicht
- ✅ Navigation zur CharacterView
- ✅ Suche der ausgewählten Charakterdatei
- ✅ Laden des Inhalts einer Charakter-Markdown-Datei
- ✅ Gerenderte Anzeige des Markdown-Inhalts mit dem Obsidian MarkdownRenderer

---

## Aktuelle Architektur

Die Anwendung basiert auf:

- CodexContext
- BaseView
- ViewManager
- DataManager
- Manager-Architektur
- Zentraler Navigation

Der aktuelle Datenfluss der Charakteransicht lautet:

```text
CampaignCharactersView
        │
        ▼
currentCharacter
        │
        ▼
ViewManager
        │
        ▼
CharacterView
        │
        ▼
CharacterManager
        │
        ▼
Charakter-Markdown-Datei
        │
        ▼
Obsidian MarkdownRenderer