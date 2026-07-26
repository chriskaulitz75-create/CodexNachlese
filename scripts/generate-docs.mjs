import { generateProjectStructure } from "./generators/project-generator.mjs";
import { generateClassDocumentation } from "./generators/class-generator.mjs";
import { generateClassIndex } from "./generators/class-index-generator.mjs";

console.log("=================================");
console.log(" Codex Nachlese Generator");
console.log("=================================\n");

generateProjectStructure();

generateClassDocumentation();

generateClassIndex();

console.log("\n=================================");
console.log(" Dokumentation erfolgreich erstellt.");
console.log("=================================");