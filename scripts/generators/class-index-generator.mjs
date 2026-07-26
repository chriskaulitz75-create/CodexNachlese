import fs from "fs";
import path from "path";
import { generatedPath } from "../utils/paths.mjs";
import { heading, bullet, paragraph } from "../utils/markdown.mjs";

export function generateClassIndex() {

    console.log("Erzeuge Klassenübersicht...");

    const classesFolder = path.join(
        generatedPath,
        "classes"
    );

    if (!fs.existsSync(classesFolder)) {
        return;
    }

    const files = fs.readdirSync(classesFolder);

    let markdown = "";

    markdown += heading(1, "Klassenübersicht");

    markdown += paragraph(
        "Diese Seite wird automatisch erzeugt."
    );

    files.sort();

    for (const file of files) {

        if (!file.endsWith(".md")) {
            continue;
        }

        const className = file.replace(".md", "");

        markdown += bullet(className);
    }

    fs.writeFileSync(
        path.join(generatedPath, "classes.md"),
        markdown,
        "utf8"
    );

    console.log("✅ Klassenübersicht erzeugt.");
}