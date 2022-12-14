import { shortClasses } from "../../shared";

export const getCSSLoader = (isDev: boolean, ext: "scss" | "css") => {
    return {
        loader: "css-loader",
        options: {
            url: false,
            modules: {
                auto: new RegExp(`\\.module\\.${ext}`),
                localIdentName: isDev
                    ? "[path][name]__[local]--[hash:base64:5]"
                    : undefined,
                getLocalIdent: isDev ? undefined : shortClasses("indrv"),
            },
            sourceMap: isDev,
        },
    };
};
