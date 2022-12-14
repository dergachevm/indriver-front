import { Configuration } from "webpack";

import { getEntry } from "./entry";
import { getOptimization } from "./optimization";
import { getRules } from "./rules";
import { getOutput } from "./output";
import { TWPOptions } from "./types";
import { getPlugins } from "./plugins";
import { getAlias } from "./alias";

export const initWPConfig = (options: TWPOptions): Configuration => {
    const { isDev, outputDir, entryDir } = options;

    return {
        cache: {
            type: isDev ? "filesystem" : "memory",
        },
        devtool: isDev ? "source-map" : undefined,
        entry: getEntry(entryDir),
        experiments: {
            outputModule: true,
        },
        mode: isDev ? "development" : "production",
        module: {
            rules: getRules(isDev, entryDir),
        },
        optimization: getOptimization(),
        output: getOutput(outputDir),
        plugins: getPlugins(isDev, outputDir, entryDir),
        target: "web",
        resolve: {
            alias: getAlias(entryDir),
            extensions: [".tsx", ".jsx", ".ts", ".js"],
        },
        watch: isDev,
        watchOptions: {
            ignored: /node_modules/,
            poll: 500,
        },
    };
};

export * from "./types";
