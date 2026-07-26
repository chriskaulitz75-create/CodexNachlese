import path from "path";
import { ClassInfo } from "../models/ClassInfo.mjs";
import { srcPath } from "../utils/paths.mjs";

export function analyzeClass(sourceFile, cls) {

    const info = new ClassInfo();

    info.name = cls.getName() ?? "Unbekannt";

    info.file = path.relative(
        srcPath,
        sourceFile.getFilePath()
    );

    const baseClass = cls.getBaseClass();

    info.extends = baseClass
        ? baseClass.getName()
        : "";

    const constructor = cls.getConstructors()[0];

    if (constructor) {

        info.constructorParameters =
            constructor
                .getParameters()
                .map(parameter => parameter.getName());

    }

    info.properties = cls
        .getProperties()
        .map(property => property.getName());

    info.methods = cls
        .getMethods()
        .map(method => method.getName());

    return info;
}