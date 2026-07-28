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

Der Fokus liegt jetzt auf der strukturierten Verarbeitung und Darstellung der Charakterdaten.

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
- ✅ Minimale fachliche Struktur für Charakterdateien
- ✅ Automatische Erstellung strukturierter Charakterdateien

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

## Struktur einer Charakterdatei

Neue Charakterdateien verwenden folgende minimale Struktur:

```yaml
---
codexType: character
schemaVersion: 1
name: "Charaktername"
level: 1
---
```

Unterhalb des Frontmatters befindet sich frei bearbeitbarer Markdown-Inhalt:

```markdown
# Charaktername

## Notizen
```

### Verantwortlichkeiten

Das Frontmatter enthält strukturierte und maschinenlesbare Charakterdaten.

Der Markdown-Bereich enthält frei formulierbare Inhalte wie:

- Notizen
- Hintergrundinformationen
- Beschreibungen
- kampagnenspezifische Informationen

Bestehende Charakterdateien werden nicht automatisch verändert.

---

## Aktuelle Aufgabe

Die strukturierten Frontmatter-Daten einer Charakterdatei in der `CharacterView` auslesen.

Als erster kleiner Schritt soll der gespeicherte Charakterlevel gelesen und zusätzlich zum gerenderten Markdown-Inhalt angezeigt werden.

Dabei bleibt der vorhandene Markdown-Inhalt vollständig erhalten.

---

## Danach geplant

- Charakterlevel strukturiert in der CharacterView anzeigen
- Weitere grundlegende Charakterfelder festlegen
- Charakterdaten bearbeitbar machen
- Kompatibilität mit älteren Charakterdateien sicherstellen
- Weitere Charakterfunktionen
- NPC-System
- Kampagnenfunktionen erweitern

---

## Letzte Aktualisierung

Nach der erfolgreichen Einführung einer minimalen Struktur für neu erstellte Charakterdateien.

---

## Siehe auch

- **Roadmap** – Geplante Weiterentwicklung und zukünftige Meilensteine.
- **Decisions** – Dauerhaft gültige Architektur- und Projektentscheidungen.
- **Development Rules** – Entwicklungs- und Dokumentationsprozess des Projekts.
- **Datenmodell** – Fachliche Struktur und Grundprinzipien der gespeicherten Daten.
- **Changelog** – Fachlich relevante Änderungen und bisherige Entwicklung.