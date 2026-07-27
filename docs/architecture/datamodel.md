# Datenmodell

## Ziel

Das Datenmodell definiert die fachliche Struktur des Codex des Abenteuers.

Es beschreibt, welche Informationen verwaltet werden, wie diese miteinander in Beziehung stehen und welche Grundprinzipien bei der Modellierung gelten.

Das Datenmodell bildet die Grundlage für die Geschäftslogik und ist unabhängig von der Darstellung in der Benutzeroberfläche.

---

## Grundprinzipien

Das Datenmodell folgt den folgenden Leitlinien:

- Klare fachliche Strukturen
- Eindeutige Verantwortlichkeiten
- Trennung zwischen Daten und Darstellung
- Erweiterbarkeit ohne grundlegende Strukturänderungen
- Nachvollziehbare Beziehungen zwischen den Objekten
- Möglichst geringe gegenseitige Abhängigkeiten

Dadurch bleibt das Modell langfristig wartbar und flexibel erweiterbar.

---

## Fachliche Struktur

Das Datenmodell bildet ausschließlich die fachlichen Informationen des Projekts ab.

Es beschreibt beispielsweise:

- Entitäten
- Eigenschaften
- Beziehungen
- Identitäten
- Hierarchien

Die konkrete technische Speicherung ist nicht Bestandteil dieses Dokuments.

---

## Beziehungen

Objekte stehen über klar definierte Beziehungen miteinander in Verbindung.

Diese Beziehungen werden so modelliert, dass

- Redundanzen vermieden werden,
- Änderungen nachvollziehbar bleiben,
- Erweiterungen bestehende Strukturen möglichst wenig beeinflussen.

---

## Erweiterbarkeit

Neue Datentypen sollen sich in das bestehende Modell integrieren lassen, ohne vorhandene Strukturen grundlegend ändern zu müssen.

Dabei gilt:

Bestehende Modelle werden erweitert und nicht ersetzt, sofern keine grundlegende Architekturentscheidung dagegen spricht.

---

## Warum dieses Modell?

Ein klar strukturiertes Datenmodell

- erleichtert die Weiterentwicklung,
- reduziert Fehler,
- verbessert die Wartbarkeit,
- vereinfacht Tests,
- und schafft eine gemeinsame fachliche Grundlage für alle Komponenten.

Es bildet damit einen wesentlichen Bestandteil der Gesamtarchitektur.

---

## Verwandte Dokumente

- Architekturübersicht
- Navigation
- Projektstruktur
- Architekturentscheidungen

---

## Siehe auch

- Übersicht – Gesamtarchitektur des Projekts.
- Navigation – Struktur und Navigation des Projekts.
- Current Status – Aktueller Entwicklungsstand.
- Decisions – Architektur- und Projektentscheidungen.
- Code – Technische Dokumentation der Implementierung.