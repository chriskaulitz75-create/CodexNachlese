# Codex des Abenteuers

Willkommen zur **Codex Nachlese**.

Diese Dokumentation dient als zentrale Wissensbasis für die Entwicklung des Projekts **Codex des Abenteuers**.

Sie bündelt Projektinformationen, Architektur, Entwicklungsregeln und automatisch erzeugte Code-Dokumentationen an einem Ort.

---

# Ziel

Die Nachlese soll den aktuellen Entwicklungsstand jederzeit nachvollziehbar machen und den Einstieg in das Projekt erleichtern.

Sie unterstützt die Entwicklung, ersetzt jedoch nicht den eigentlichen Quellcode.

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