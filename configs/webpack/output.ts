import { resolve } from "path";

import pack from "../../package.json";

export const getOutput = (outputDir: string) => {
    return {
        uniqueName: pack.name,
        publicPath: "auto" as const,
        scriptType: "text/javascript" as const,
        asyncChunks: true,
        clean: true,
        filename: "[name].min.js",
        path: resolve(outputDir, "js"),
    };
};
