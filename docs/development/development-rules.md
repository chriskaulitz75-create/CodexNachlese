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