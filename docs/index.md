# Codex des Abenteuers

## Willkommen zur CodexNachlese

Die **CodexNachlese** ist die zentrale Wissensbasis des Projekts **Codex des Abenteuers**.

Sie dokumentiert den aktuellen Stand des Projekts, grundlegende Architektur- und Entwicklungsentscheidungen sowie die technische Struktur des Quellcodes.

Ziel ist es, Projektwissen langfristig nachvollziehbar zu bewahren und unabhängig von einzelnen Entwicklern oder Chatverläufen verfügbar zu machen.

---

## Ziel

Die CodexNachlese dient als offizielle Referenz für die Entwicklung des Projekts.

Sie unterstützt:

- die laufende Entwicklung,
- zukünftige Erweiterungen,
- neue Entwickler,
- sowie zukünftige ChatGPT-Sitzungen.

Neben dem aktuellen Projektstand werden auch die Hintergründe wichtiger Entscheidungen dokumentiert, damit deren Motivation dauerhaft nachvollziehbar bleibt.

---

## Grundsatz

Die CodexNachlese ist die **Single Source of Truth** des Projekts.

Alle dauerhaft relevanten Informationen werden ausschließlich hier gepflegt.

Chatverläufe, Notizen oder historische Dokumente dienen lediglich als Arbeitsmaterial oder Referenz und ersetzen nicht die Projektdokumentation.

---

# Dokumentationsbereiche

Die Dokumentation gliedert sich in drei Hauptbereiche.

## Architektur

Beschreibt den Aufbau des Projekts.

Unter anderem:

- Architekturübersicht
- Datenmodell
- Navigation
- Strukturentscheidungen

---

## Entwicklung

Dokumentiert den aktuellen Entwicklungsstand und die Projektorganisation.

Unter anderem:

- Entwicklungsregeln
- Aktueller Stand
- Roadmap
- Entscheidungen
- Changelog

---

## Code

Beschreibt den technischen Aufbau des Projekts.

Unter anderem:

- Projektstruktur
- automatisch erzeugte Code-Dokumentation
- technische Zusammenhänge

---

# Entwicklungsworkflow

Zur Pflege der Dokumentation gehört der folgende Ablauf:

1. Neue Funktion entwickeln.
2. Änderungen testen.
3. Dokumentation prüfen und gegebenenfalls aktualisieren.
4. Automatisch erzeugte Dokumentation aktualisieren.

```bash
npm run docs:generate
```

5. Änderungen lokal überprüfen.
6. Änderungen committen und nach GitHub übertragen.

---

# Dokumentationsprinzipien

Für die CodexNachlese gelten folgende Grundsätze:

- Wissen bewahren
- Erhalten → Strukturieren → Ergänzen
- Eine Dokumentationsseite besitzt genau eine fachliche Verantwortung.
- Dokumentation gehört zur Entwicklung.
- Nach größeren Änderungen erfolgt eine Dokumentations-Review.

Diese Regeln sind im Bereich **Development Rules** ausführlich beschrieben.

---

# Hinweis

Die automatisch erzeugten Dokumentationsseiten werden aus dem aktuellen Quellcode erstellt.

Nach Änderungen an Klassen, Modulen oder der Projektstruktur sollte deshalb ausgeführt werden:

```bash
npm run docs:generate
```

---

# Siehe auch

Die wichtigsten weiterführenden Bereiche der CodexNachlese:

- Architektur – Dokumentation des Projektaufbaus und der Systemstruktur.
- Entwicklung – Entwicklungsprozess, Roadmap, Entscheidungen und aktueller Projektstatus.
- Code – Technische Dokumentation und automatisch erzeugte Code-Referenz.