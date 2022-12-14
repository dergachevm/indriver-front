import { resolve } from "path";

import CopyPlugin from "copy-webpack-plugin";

export const getCopyPlugin = (outputDir: string, entryDir: string) => {
    return new CopyPlugin({
        patterns: [
            {
                from: resolve(entryDir, "assets"),
                to: resolve(outputDir, "assets"),
            },
            {
                from: resolve(entryDir, ".htaccess"),
                to: resolve(outputDir, ".htaccess"),
                toType: "file",
            },
        ],
    });
};
