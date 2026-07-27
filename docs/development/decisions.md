# Entscheidungen

## Ziel

Diese Seite dokumentiert grundlegende Entscheidungen des Projekts **Codex des Abenteuers**.

Sie dient dazu, Architektur-, Design- und Entwicklungsentscheidungen dauerhaft nachvollziehbar festzuhalten.

Dabei wird nicht nur dokumentiert, **welche** Entscheidung getroffen wurde, sondern auch **warum**.

---

# Entscheidungsprotokoll

## Entscheidung: Die CodexNachlese ist die Single Source of Truth

### Status

✅ Gültig

### Entscheidung

Die CodexNachlese ist die offizielle Wissensbasis des Projekts.

Alle dauerhaft relevanten Informationen werden hier dokumentiert.

### Begründung

Wissen soll nicht ausschließlich in Chatverläufen, Notizen oder älteren Dokumenten verbleiben.

Neue Entwickler oder neue ChatGPT-Sitzungen sollen das Projekt ausschließlich anhand der Dokumentation verstehen und weiterentwickeln können.

---

## Entscheidung: Dokumentation gehört zur Entwicklung

### Status

✅ Gültig

### Entscheidung

Code und Dokumentation werden gemeinsam gepflegt.

Nach größeren Änderungen wird geprüft, ob Dokumentationsseiten angepasst werden müssen.

### Begründung

Dokumentation darf dem Projekt nicht hinterherlaufen.

Sie bildet gemeinsam mit dem Quellcode den offiziellen Projektstand.

---

## Entscheidung: Entwicklung in kleinen Schritten

### Status

✅ Gültig

### Entscheidung

Es wird immer nur eine überschaubare Änderung gleichzeitig umgesetzt.

Nach jeder Änderung erfolgt ein Test, bevor die nächste Entwicklung beginnt.

### Begründung

Kleine Entwicklungsschritte erleichtern Fehlersuche, Qualitätssicherung und Nachvollziehbarkeit.

---

## Entscheidung: Wissen bewahren

### Status

✅ Gültig

### Entscheidung

Bestehende Dokumentation wird vor jeder Überarbeitung vollständig analysiert.

Ziel ist es, Wissen zu erhalten, zu strukturieren und zu ergänzen.

### Begründung

Historisch gewachsenes Projektwissen besitzt einen hohen Wert und soll nicht durch stilistische Überarbeitungen verloren gehen.

---

## Entscheidung: Bestehende Dokumentationsstruktur beibehalten

### Status

✅ Gültig

### Entscheidung

Neue Dokumentationsseiten werden bevorzugt in die bestehende Struktur integriert.

Neue Ordner werden nur angelegt, wenn dies fachlich notwendig ist.

### Begründung

Eine konsistente Struktur erleichtert Orientierung, Wartung und langfristige Pflege der CodexNachlese.

---

## Entscheidung: Entscheidungen werden mit ihrer Begründung dokumentiert

### Status

✅ Gültig

### Entscheidung

Grundlegende Entscheidungen werden grundsätzlich zusammen mit ihrer Begründung dokumentiert.

### Begründung

Die eigentliche Entscheidung ist häufig auch Jahre später noch sichtbar.

Die Gründe für diese Entscheidung gehen dagegen oft verloren.

Durch die Dokumentation der Motivation bleiben Zusammenhänge dauerhaft nachvollziehbar.

---

# Hinweise

Diese Seite dokumentiert ausschließlich langfristig gültige Entscheidungen.

Kurzfristige Entwicklungsaufgaben gehören in die Roadmap oder den aktuellen Projektstatus.

Historische Dokumente dienen lediglich als Quelle für neue Entscheidungen und werden nicht unverändert übernommen.