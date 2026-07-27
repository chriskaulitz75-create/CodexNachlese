# Architekturübersicht

## Ziel der Architektur

Die Architektur des **Codex des Abenteuers** bildet die Grundlage für eine langfristig wartbare, erweiterbare und nachvollziehbare Software.

Der Codex ist keine Sammlung einzelner Funktionen, sondern ein modular aufgebautes Gesamtsystem. Jede Komponente besitzt eine klar definierte Aufgabe und trägt zu einer stabilen Gesamtarchitektur bei.

Obsidian dient dabei als technische Plattform. Der Codex entwickelt darauf eine eigene Anwendungslogik und Benutzeroberfläche, die unabhängig von der Bedienung Obsidian-spezifischer Funktionen verstanden werden kann.

---

## Grundprinzipien

Die Architektur folgt den folgenden Grundsätzen:

- Modulare Komponenten mit klaren Verantwortlichkeiten
- Lose Kopplung zwischen den einzelnen Bereichen
- Hohe Erweiterbarkeit ohne umfangreiche Änderungen bestehender Komponenten
- Wartbarkeit durch klare Strukturen
- Trennung von Daten, Geschäftslogik und Darstellung
- Nachvollziehbare Architekturentscheidungen
- Dokumentation als Bestandteil der Softwarearchitektur

Diese Prinzipien bilden den Rahmen für sämtliche zukünftigen Erweiterungen des Projekts.

---

## Hauptkomponenten

Die Anwendung besteht aus mehreren logisch getrennten Bereichen.

Zu den wichtigsten Komponenten gehören unter anderem:

- Navigation
- Datenmodell
- Benutzeroberfläche (Views)
- Services
- Persistenz
- Plugin-Integration
- Dokumentation

Jede Komponente besitzt eine klar definierte Verantwortung und kommuniziert möglichst über klar definierte Schnittstellen mit anderen Bereichen.

---

## Zusammenspiel der Komponenten

Die Komponenten arbeiten gemeinsam, bleiben jedoch möglichst unabhängig voneinander.

Neue Funktionen sollen bestehende Komponenten erweitern, anstatt sie grundlegend zu verändern.

Dieses Prinzip reduziert Abhängigkeiten und erleichtert Wartung, Tests und zukünftige Erweiterungen.

---

## Architekturprinzipien

Während der Entwicklung gelten insbesondere folgende Regeln:

- Eine Aufgabe besitzt genau eine Verantwortung.
- Verantwortlichkeiten werden nicht vermischt.
- Abhängigkeiten werden möglichst gering gehalten.
- Erweiterungen sollen bestehende Komponenten möglichst wenig beeinflussen.
- Architekturentscheidungen werden dokumentiert.
- Dokumentation und Implementierung werden gemeinsam gepflegt.

---

## Warum diese Architektur?

Der Codex ist als langfristiges Softwareprojekt konzipiert.

Eine klare Architektur erleichtert:

- die Weiterentwicklung,
- die Fehlersuche,
- die Einarbeitung neuer Entwickler,
- zukünftige ChatGPT-Sitzungen,
- sowie die langfristige Pflege des Projekts.

Die Architektur dient deshalb nicht ausschließlich der technischen Umsetzung, sondern bildet gleichzeitig die Grundlage für eine nachvollziehbare und nachhaltige Projektentwicklung.

---

## Verwandte Dokumente

- Navigation
- Datenmodell
- Projektstruktur
- Entwicklungsregeln
- Architekturentscheidungen

---

## Dokumentationsstruktur

Die CodexNachlese gliedert sich in mehrere fachlich getrennte Bereiche.

### Architektur

Dokumentiert den strukturellen Aufbau des Projekts sowie die Beziehungen der wichtigsten Komponenten.

### Entwicklung

Dokumentiert den Entwicklungsprozess, den aktuellen Projektstand, die Roadmap, den Changelog sowie grundlegende Projektentscheidungen.

### Code

Dokumentiert die technische Struktur des Quellcodes und enthält automatisch erzeugte Dokumentationsseiten.

### Diagramme

Enthält Architektur- und Ablaufdiagramme zur Visualisierung technischer Zusammenhänge.

### Bilder

Enthält Grafiken und sonstige Medien, die in der Dokumentation verwendet werden.

### PDF

Archivbereich für historische oder exportierte Dokumente. Diese dienen als Referenz und ersetzen nicht die aktuelle Projektdokumentation.

## Siehe auch

- **Navigation** – Beschreibt die Navigationsstruktur des Projekts.
- **Datenmodell** – Dokumentiert die zentralen Datenstrukturen.
- **Current Status** – Zeigt den aktuellen Entwicklungsstand der Architektur.
- **Decisions** – Erläutert grundlegende Architekturentscheidungen.
- **Code** – Beschreibt die technische Projektstruktur und deren Umsetzung.