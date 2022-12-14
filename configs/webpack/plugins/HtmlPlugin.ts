import { resolve } from "path";

import HtmlPlugin from "html-webpack-plugin";

export const getHtmlPlugin = (_isDev: boolean, entryDir: string) => {
    return new HtmlPlugin({
        template: resolve(entryDir, "templates/pages/index.html"),
        filename: "../[name].html",
        minify: false,
        publicPath: "/js/",
        inject: "head",
    });
};
