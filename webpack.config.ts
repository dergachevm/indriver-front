import { TWPOptions, initWPConfig } from "./configs/webpack";

const options: TWPOptions = {
    isDev: process.env.NODE_ENV === "development",
    outputDir: "front",
    entryDir: "front.dev",
};

export default [initWPConfig(options)];
