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
- ✅ Entfernung der doppelten Anzeige des Charakternamens

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
```

---

## Aktuelle Aufgabe

Die fachliche Struktur der Charakterdateien festlegen.

Bevor weitere Charakterfelder oder Darstellungen implementiert werden, wird geklärt:

- Welche Charakterdaten in der Markdown-Datei gespeichert werden.
- Welche Daten in der CharacterView angezeigt werden.
- Welche Informationen als Markdown-Inhalt und welche als strukturierte Metadaten gespeichert werden.
- Wie bestehende Charakterdateien mit der neuen Struktur kompatibel bleiben.

Erst nach dieser Festlegung wird die nächste Codeänderung vorgenommen.

---

## Danach geplant

- Minimale Struktur für Charakterdateien umsetzen
- Neue Charakterdateien automatisch mit dieser Struktur erstellen
- Strukturierte Charakterdaten in der CharacterView darstellen
- Weitere Charakterfunktionen
- NPC-System
- Kampagnenfunktionen erweitern

---

## Letzte Aktualisierung

Nach der erfolgreichen gerenderten Anzeige der Charakter-Markdown-Datei und der Entfernung der doppelten Namensanzeige in der CharacterView.

---

## Siehe auch

- **Roadmap** – Geplante Weiterentwicklung und zukünftige Meilensteine.
- **Decisions** – Dauerhaft gültige Architektur- und Projektentscheidungen.
- **Development Rules** – Entwicklungs- und Dokumentationsprozess des Projekts.
- **Datenmodell** – Fachliche Struktur und Grundprinzipien der gespeicherten Daten.
- **Changelog** – Fachlich relevante Änderungen und bisherige Entwicklung.