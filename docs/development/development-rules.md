# Entwicklungsregeln

## Ziel

Die Nachlese dient als technische Dokumentation des Projekts
"Codex des Abenteuers" und soll den aktuellen Entwicklungsstand
automatisch nachvollziehbar machen.

---

## Entwicklungsablauf

1. Immer nur einen Entwicklungsschritt gleichzeitig.
2. Nach jedem Schritt testen.
3. Erst nach erfolgreichem Test weitermachen.
4. Keine Vermutungen über bestehenden Code.
5. Änderungen nachvollziehbar halten.

---

## Codeänderungen

- Wenn möglich komplette Dateien ersetzen.
- Nur bei sehr großen Dateien gezielte Änderungen.
- Keine unnötigen Refactorings.
- Fokus auf den eigentlichen Nutzen.
- Wenn eine Änderung manuell eingefügt werden muss, stellt ChatGPT den vollständigen einzufügenden Text bereit und nennt die genaue Datei sowie die Stelle, an der er eingefügt oder ersetzt werden soll.
- Nach jeder erfolgreichen Änderung erinnert ChatGPT an eventuell notwendige manuelle Schritte (z. B. Dokumentation aktualisieren, Navigation erweitern oder Konfiguration anpassen).

---

## Dokumentation

Nach größeren Änderungen:

```bash
npm run docs:generate
```

Dadurch werden automatisch erzeugt:

- Projektstruktur
- Klassenübersicht
- Klassendokumentation

### Nach größeren Änderungen

1. Änderungen testen.
2. Dokumentation aktualisieren.

```bash
npm run docs:generate
```

3. Falls erforderlich folgende Seiten manuell aktualisieren:

- current-status.md
- roadmap.md
- changelog.md
- decisions.md

ChatGPT erinnert nach jeder größeren Änderung an notwendige manuelle Aktualisierungen und stellt den vollständigen Text sowie die genaue Datei und Einfügestelle bereit.
---

## Manuell gepflegt

Folgende Seiten werden weiterhin manuell gepflegt:

- current-status.md
- roadmap.md
- changelog.md
- decisions.md

---

## Grundsatz

Der Codex des Abenteuers ist das Hauptprojekt.

Die Nachlese unterstützt die Entwicklung und soll möglichst wenig zusätzlichen Aufwand verursachen.

### Wissen bewahren

Bei der Überarbeitung bestehender Dokumentationsseiten steht der Erhalt des Projektwissens im Vordergrund.

Vor jeder Überarbeitung wird geprüft:

- Welche Informationen müssen erhalten bleiben?
- Welche Informationen sind veraltet?
- Welche Informationen fehlen inzwischen?
- Welche Informationen helfen zukünftigen Entwicklern oder neuen ChatGPT-Sitzungen beim Verständnis des Projekts?

Bestehende Inhalte werden nicht allein aus stilistischen Gründen ersetzt. Ziel ist es, Wissen zu strukturieren, zu ergänzen und zu aktualisieren, ohne relevante Informationen zu verlieren.

Die Überarbeitung folgt grundsätzlich dem Prinzip:

> **Erhalten → Strukturieren → Ergänzen**

Erst nach dieser Analyse wird eine bestehende Dokumentationsseite vollständig überarbeitet.

### Dokumentations-Review

Nach dem Erstellen oder der grundlegenden Überarbeitung mehrerer Dokumentationsseiten erfolgt eine Dokumentations-Review.

Ziel der Review ist es, die Dokumentation als Gesamtsystem zu betrachten und nicht nur einzelne Seiten.

Dabei wird insbesondere geprüft:

- Sind die Verantwortlichkeiten der einzelnen Seiten klar voneinander abgegrenzt?
- Gibt es doppelte oder widersprüchliche Informationen?
- Fehlen wichtige Querverweise zwischen den Seiten?
- Sind neue Inhalte an der fachlich richtigen Stelle dokumentiert?
- Ist die Dokumentationsstruktur weiterhin logisch und konsistent?

Erst nach dieser Gesamtprüfung gilt ein Dokumentationsabschnitt als abgeschlossen.

Werden während der Review Verbesserungsmöglichkeiten erkannt, werden diese gezielt umgesetzt und anschließend erneut überprüft.

### Einheitlicher Aufbau von Dokumentationsseiten

Neue Dokumentationsseiten folgen möglichst einer einheitlichen Struktur.

Nicht jede Seite benötigt alle Abschnitte, die Reihenfolge sollte jedoch möglichst konsistent bleiben.

Empfohlene Bestandteile sind:

- Ziel oder Zweck der Seite
- Beschreibung des aktuellen Sachverhalts
- Wichtige Details oder fachliche Informationen
- Hinweise zur Pflege oder Aktualisierung
- Verweise auf thematisch verwandte Dokumentationsseiten

Jede Seite sollte möglichst genau eine fachliche Verantwortung besitzen.

Informationen sollen nicht unnötig auf mehreren Seiten gepflegt werden. Stattdessen werden Querverweise verwendet.

## Arbeitsweise mit ChatGPT

Für die Entwicklung des Projekts gelten folgende Regeln:

### Entwicklung

- Änderungen werden schrittweise umgesetzt.
- Es wird immer nur **eine Änderung gleichzeitig** vorgenommen.
- Nach jeder Änderung wird getestet, bevor die nächste Änderung erfolgt.
- Größere Änderungen werden erst nach erfolgreichem Test abgeschlossen.

### Dokumentation

Nach jeder größeren Änderung wird geprüft, ob die Dokumentation angepasst werden muss.

**Falls eine Anpassung erforderlich ist:**

- Es wird genau angegeben:
  - welcher Ordner betroffen ist,
  - welche Datei bearbeitet werden muss,
  - an welcher Position der Text eingefügt werden soll.
- Der vollständige Markdown-Text wird fertig erstellt.
- Der Text wird lediglich kopiert und eingefügt.

**Falls keine Anpassung erforderlich ist:**

> Keine Änderung nötig.

### Abschluss einer Änderung

Nach einer Dokumentationsänderung wird – sofern erforderlich – anschließend ausgeführt:

```bash
npm run docs:generate
```

Danach werden die Änderungen mit Git gespeichert und veröffentlicht.

## Pflege der Projektdokumentation

Die Projektdokumentation (CodexNachlese) ist die zentrale Wissensquelle für den Codex des Abenteuers.

Sie dient nicht nur als Dokumentation, sondern als offizielles Entwicklerhandbuch und Projekt-Wiki.

### Grundsatz

Informationen sollen dauerhaft an einer zentralen Stelle gepflegt werden. Wissen darf nicht ausschließlich in Chatverläufen oder Notizen verbleiben.

### Überarbeitung bestehender Dokumente

Werden ältere Dokumente (z. B. Entwicklerhandbücher, PDFs oder Konzeptdokumente) überprüft, erfolgt dies kapitelweise.

Für jedes Kapitel werden folgende Fragen beantwortet:

- Ist der Inhalt noch aktuell?
- Passt er zur aktuellen Architektur?
- Fehlen inzwischen wichtige Erkenntnisse?
- Gibt es bessere Lösungen?
- Soll der Abschnitt übernommen, angepasst, erweitert oder verworfen werden?

Erst nach dieser Analyse wird die Dokumentation aktualisiert.

### Migrationsplan

Für die Überarbeitung älterer Dokumentationen wird ein Migrationsplan geführt.

Der Migrationsplan dokumentiert den Fortschritt der Überarbeitung und verhindert, dass Kapitel vergessen, doppelt bearbeitet oder unvollständig übernommen werden.

Für jedes Kapitel wird festgehalten:

- Bearbeitungsstatus
- Ergebnis der Analyse
- Verweis auf die neue Dokumentation
- Bemerkungen oder offene Punkte

Der Migrationsplan wird während der gesamten Überarbeitung kontinuierlich aktualisiert.

### Architektur- und Projektentscheidungen

Grundlegende Entscheidungen werden dauerhaft dokumentiert.

Dazu gehören beispielsweise:

- Architekturentscheidungen (ADR)
- Designentscheidungen
- Entwicklungsprinzipien
- Projektregeln
- Best Practices

### Ziel

Am Ende soll die CodexNachlese die einzige Referenz sein, die benötigt wird, um das Projekt zu verstehen und weiterzuentwickeln.

Neue ChatGPT-Sitzungen oder neue Entwickler sollen sich ausschließlich anhand der Dokumentation in das Projekt einarbeiten können.

### Konsistente Dokumentationsstruktur

Die bestehende Struktur der CodexNachlese wird konsequent beibehalten.

Bei neuen Dokumentationsseiten gelten folgende Regeln:

- Vorhandene Ordner werden bevorzugt verwendet.
- Vorhandene Namenskonventionen werden übernommen.
- Neue Oberordner werden nur angelegt, wenn sich Inhalte nicht sinnvoll in die bestehende Struktur einfügen lassen.
- Dateinamen folgen der bestehenden Konvention (englische Dateinamen im kebab-case).
- Der eigentliche Dokumentationsinhalt kann unabhängig davon in deutscher Sprache verfasst werden.

Vor jeder neuen Dokumentationsseite wird geprüft, ob sie in die bestehende Struktur integriert werden kann.

Ziel ist eine langfristig übersichtliche, konsistente und leicht navigierbare Projektdokumentation.