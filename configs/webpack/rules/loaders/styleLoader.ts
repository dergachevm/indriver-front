import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const getStyleLoader = (isDev: boolean) => {
    return isDev ? "style-loader" : MiniCssExtractPlugin.loader;
};
