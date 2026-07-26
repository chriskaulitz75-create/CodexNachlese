import fs from "fs";
import path from "path";
import { srcPath, generatedPath } from "../utils/paths.mjs";
import { heading, bullet, paragraph } from "../utils/markdown.mjs";

export function generateProjectStructure() {

    console.log("Erzeuge Projektstruktur...");

    fs.mkdirSync(generatedPath, { recursive: true });

    const folders = fs.readdirSync(srcPath, { withFileTypes: true });

    

  let markdown = "";

markdown += heading(1, "Projektstruktur");
markdown += paragraph("> Diese Seite wird automatisch erzeugt.");

    for (const folder of folders) {

        if (!folder.isDirectory()) continue;

        markdown += heading(2, folder.name);

        const folderPath = path.join(srcPath, folder.name);

        const files = fs.readdirSync(folderPath, { withFileTypes: true });

        for (const file of files) {

            if (!file.isFile()) continue;

            markdown += bullet(file.name);
        }

        markdown += "\n";
    }

    fs.writeFileSync(
        path.join(generatedPath, "project-structure.md"),
        markdown,
        "utf8"
    );

    console.log("✅ Projektstruktur erzeugt.");
}