import fs from "fs";
import path from "path";
import { generatedPath } from "../utils/paths.mjs";
import { heading, paragraph, bullet } from "../utils/markdown.mjs";

export function writeClassMarkdown(info) {

    const outputFolder = path.join(generatedPath, "classes");

    fs.mkdirSync(outputFolder, { recursive: true });

    let markdown = "";

    markdown += heading(1, info.name);

    markdown += heading(2, "Datei");
    markdown += paragraph(info.file);

    markdown += heading(2, "Vererbung");

    if (info.extends === "") {
        markdown += paragraph("Keine Basisklasse.");
    } else {
        markdown += bullet(info.extends);
    }

    markdown += heading(2, "Konstruktor");

    if (info.constructorParameters.length === 0) {
        markdown += paragraph("Kein Konstruktor oder keine Parameter.");
    } else {
        for (const parameter of info.constructorParameters) {
            markdown += bullet(parameter);
        }
    }

    markdown += heading(2, "Eigenschaften");

    if (info.properties.length === 0) {
        markdown += paragraph("Keine Eigenschaften.");
    } else {
        for (const property of info.properties) {
            markdown += bullet(property);
        }
    }

    markdown += heading(2, "Methoden");

    if (info.methods.length === 0) {
        markdown += paragraph("Keine Methoden.");
    } else {
        for (const method of info.methods) {
            markdown += bullet(method + "()");
        }
    }

    fs.writeFileSync(
        path.join(outputFolder, `${info.name}.md`),
        markdown,
        "utf8"
    );
}