# Projektstruktur

## Ziel

Die Projektstruktur beschreibt den logischen Aufbau des Quellcodes des **Codex des Abenteuers**.

Sie definiert die Verantwortlichkeiten der einzelnen Projektbereiche und dient als Orientierung für die Weiterentwicklung.

Die Struktur soll sowohl neuen Entwicklern als auch zukünftigen ChatGPT-Sitzungen den Einstieg erleichtern.

---

## Grundprinzipien

Die Projektstruktur folgt den folgenden Regeln:

- Klare Verantwortlichkeiten
- Hohe Übersichtlichkeit
- Möglichst geringe Abhängigkeiten
- Logische Trennung der Komponenten
- Erweiterbarkeit ohne umfangreiche Umstrukturierungen
- Konsistente Benennung

Jeder Projektbereich besitzt eine klar definierte Aufgabe.

---

## Struktur des Projekts

Das Projekt gliedert sich in mehrere logisch getrennte Bereiche.

Je nach Entwicklungsstand können unter anderem folgende Bereiche vorhanden sein:

- Benutzeroberfläche (Views)
- Navigation
- Datenmodell
- Services
- Persistenz
- Hilfsklassen
- Plugin-Integration
- Dokumentation

Die tatsächliche Ordnerstruktur kann sich im Laufe der Entwicklung verändern.

Entscheidend sind die Verantwortlichkeiten der einzelnen Bereiche und nicht deren konkrete Position im Dateisystem.

---

## Verantwortlichkeiten

Jeder Bereich besitzt eine klar definierte Aufgabe.

Dabei gilt:

- Datenmodell verwaltet fachliche Informationen.
- Services kapseln Geschäftslogik.
- Views stellen Informationen dar.
- Navigation verbindet die einzelnen Bereiche.
- Hilfsklassen unterstützen andere Komponenten ohne eigene Geschäftslogik.

Verantwortlichkeiten sollen sich möglichst nicht überschneiden.

---

## Erweiterbarkeit

Neue Module werden so integriert, dass bestehende Komponenten möglichst wenig angepasst werden müssen.

Neue Funktionen sollen vorhandene Strukturen erweitern und nicht ersetzen.

Falls umfangreiche Änderungen notwendig werden, sollen diese durch dokumentierte Architekturentscheidungen begleitet werden.

---

## Warum diese Struktur?

Eine klare Projektstruktur

- erleichtert die Orientierung,
- verbessert die Wartbarkeit,
- reduziert Kopplungen,
- vereinfacht die Zusammenarbeit,
- und unterstützt eine langfristige Weiterentwicklung.

Die Struktur dient daher nicht nur der Organisation des Quellcodes, sondern ist ein wesentlicher Bestandteil der Gesamtarchitektur.

---

## Verwandte Dokumente

- Architekturübersicht
- Navigation
- Datenmodell
- Entwicklungsregeln

## Dateiübersicht

Diese Übersicht dient als Nachschlagewerk während der Entwicklung.

Sie enthält den Speicherort jeder wichtigen Datei sowie ihre Aufgabe. Dadurch können Entwickler und ChatGPT Dateien schnell finden, ohne im Projekt nach Ordnern suchen zu müssen.

### src

```text
src/
├── Components/
├── Managers/
├── Models/
├── Views/
├── main.ts
└── styles.css
```

---

### Components

| Datei | Aufgabe |
|--------|----------|
| CampaignBackButton.ts | Zurück-Button innerhalb einer Kampagne |
| *(weitere Dateien ergänzen)* | |

---

### Managers

| Datei | Aufgabe |
|--------|----------|
| CampaignManager.ts | Verwaltung der Kampagnen |
| CampaignNavigationManager.ts | Navigation innerhalb einer Kampagne |
| CampaignViewManager.ts | Auswahl der Kampagnenansichten |
| CharacterManager.ts | Verwaltung der Charakterdateien |
| DataManager.ts | Zugriff auf Vault- und Projektdaten |
| NavigationManager.ts | Navigation zwischen den Hauptseiten |

---

### Models

| Datei | Aufgabe |
|--------|----------|
| CodexContext.ts | Gemeinsamer Kontext für alle Views |
| CampaignPage.ts | Seiten innerhalb einer Kampagne |
| NavigationPage.ts | Hauptnavigation |

---

### Views

| Datei | Aufgabe |
|--------|----------|
| Base/BaseView.ts | Basisklasse aller Views |
| CharacterView.ts | Anzeige eines Charakters |
| *(weitere Views ergänzen)* | |

---

## Pflege

Diese Übersicht wird erweitert, sobald neue Dateien entstehen.

Es genügt, Dateiname und Aufgabe einzutragen. Der vollständige Quellcode gehört **nicht** in die Dokumentation.