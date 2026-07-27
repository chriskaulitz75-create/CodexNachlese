# Navigation

## Ziel

Die Navigation bildet das zentrale Bindeglied zwischen den Funktionen des Codex des Abenteuers und der Benutzeroberfläche.

Sie sorgt dafür, dass Anwender jederzeit schnell, nachvollziehbar und konsistent auf alle relevanten Bereiche zugreifen können.

---

## Grundprinzipien

Die Navigation folgt folgenden Leitlinien:

- einfache Orientierung
- konsistente Bedienung
- möglichst wenige Klicks
- klar erkennbare Zuständigkeiten
- einheitliche Navigationselemente
- Erweiterbarkeit ohne bestehende Bereiche umzubauen

Die Navigation soll den Benutzer unterstützen und niemals zum Hindernis werden.

---

## Aufbau

Die Navigation gliedert die Anwendung in logisch zusammengehörende Bereiche.

Dabei orientiert sie sich an den Aufgaben des Benutzers und nicht an der internen technischen Struktur.

Dadurch bleibt die Bedienung verständlich, auch wenn sich die interne Architektur weiterentwickelt.

---

## Navigation und Architektur

Die Navigation ist Bestandteil der Gesamtarchitektur.

Sie bildet die Verbindung zwischen

- Benutzeroberfläche
- Datenmodell
- Funktionen
- Ansichten

ohne selbst Geschäftslogik zu enthalten.

Dadurch bleibt sie unabhängig von der eigentlichen Implementierung.

---

## Erweiterbarkeit

Neue Bereiche sollen sich möglichst ohne Änderungen bestehender Navigationsstrukturen ergänzen lassen.

Navigationselemente werden deshalb so gestaltet, dass zukünftige Module problemlos integriert werden können.

---

## Warum dieses Konzept?

Eine konsistente Navigation

- reduziert die Einarbeitungszeit,
- verbessert die Benutzerfreundlichkeit,
- erleichtert zukünftige Erweiterungen,
- und verhindert unterschiedliche Bedienkonzepte innerhalb des Projekts.

Die Navigation orientiert sich daher konsequent an den Aufgaben der Benutzer und nicht an der technischen Umsetzung.

---

## Verwandte Dokumente

- Architekturübersicht
- Datenmodell
- Projektstrukturs