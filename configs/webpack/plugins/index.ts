import { WebpackPluginInstance } from "webpack";

import { getCssoPlugin } from "./CssoPlugin";
import { getMiniCssExtractPlugin } from "./MiniCssExtractPlugin";
import { getCssUrlRelativePlugin } from "./CssUrlRelativePlugin";
import { getCopyPlugin } from "./CopyPlugin";
import { getHtmlPlugin } from "./HtmlPlugin";
import { getESLintPlugin } from "./ESLintPlugin";

export const getPlugins = (
    isDev: boolean,
    outputDir: string,
    entryDir: string
): Array<WebpackPluginInstance> => {
    return [
        getMiniCssExtractPlugin(),
        getESLintPlugin(),
        getCopyPlugin(outputDir, entryDir),
        getHtmlPlugin(isDev, entryDir),
        ...(isDev ? [getCssUrlRelativePlugin()] : []),
        getCssoPlugin(),
    ];
};
