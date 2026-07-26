import path from "path";
import { Project } from "ts-morph";
import { srcPath } from "../utils/paths.mjs";
import { analyzeClass } from "../analyzers/class-analyzer.mjs";
import { writeClassMarkdown } from "../writers/class-markdown-writer.mjs";

export function generateClassDocumentation() {

    console.log("Analysiere Klassen...");

    const project = new Project();

    project.addSourceFilesAtPaths(
        path.join(srcPath, "**/*.ts")
    );

    for (const sourceFile of project.getSourceFiles()) {

        const classes = sourceFile.getClasses();

        for (const cls of classes) {

            const info = analyzeClass(
                sourceFile,
                cls
            );

            writeClassMarkdown(info);
        }
    }

    console.log("✅ Klassen analysiert.");
}