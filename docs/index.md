# Codex des Abenteuers

## Willkommen zur CodexNachlese

Die CodexNachlese ist die zentrale Wissensbasis des Projekts **Codex des Abenteuers**.

Sie dient als offizielle Referenz für die Entwicklung und bündelt sämtliche dauerhaft relevanten Informationen an einem Ort.

Dazu gehören unter anderem:

- Projektvision
- Architektur
- Entwicklungsregeln
- Coding-Standards
- Designentscheidungen
- Architekturentscheidungen
- Roadmap
- Changelog
- automatisch erzeugte Code-Dokumentation

## Ziel

Die CodexNachlese verfolgt das Ziel, den aktuellen Projektstand vollständig und nachvollziehbar zu dokumentieren.

Sie dient als gemeinsame Wissensquelle für:

- die laufende Entwicklung,
- zukünftige Erweiterungen,
- neue Entwickler,
- sowie zukünftige ChatGPT-Sitzungen.

Grundlegende Entscheidungen werden dauerhaft dokumentiert, sodass ihre Hintergründe auch nach längerer Zeit nachvollziehbar bleiben.

## Grundsatz

Die CodexNachlese ist die **Single Source of Truth** des Projekts.

Chatverläufe, Notizen oder ältere Dokumente dienen ausschließlich als Arbeitsmaterial und historische Referenz.

Der offizielle Projektstand wird ausschließlich in der CodexNachlese gepflegt.

Neue Funktionen, Architekturänderungen und grundlegende Entscheidungen werden zeitnah dokumentiert und mit dem Projekt synchron gehalten.
---

# Entwicklungsworkflow

1. Neue Funktion im Codex des Abenteuers entwickeln.
2. Änderungen testen.
3. Dokumentation aktualisieren.

```bash
npm run docs:generate
```

4. Falls erforderlich folgende Seiten manuell aktualisieren:

- Aktueller Stand
- Changelog
- Entscheidungen
- Roadmap

---

# Inhalt der Nachlese

## Projekt

- Projektübersicht
- Entwicklungsregeln
- Aktueller Stand
- Roadmap
- Changelog
- Architekturentscheidungen

## Architektur

Dokumentation der Projektstruktur und Architektur.

## Code-Referenz

Automatisch erzeugte Dokumentation aus dem Quellcode.

Unter anderem:

- Projektstruktur
- Klassenübersicht
- Klassendokumentation

---

# Hinweis

Die Inhalte unter **Code-Referenz** werden automatisch aus dem aktuellen Quellcode erzeugt.

Nach größeren Änderungen sollte daher ausgeführt werden:

```bash
npm run docs:generate
```