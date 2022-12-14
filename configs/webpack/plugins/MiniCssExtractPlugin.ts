import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const getMiniCssExtractPlugin = () => {
    return new MiniCssExtractPlugin({
        filename: `../css/[name].min.css`,
        chunkFilename: "../css/[id].css",
    });
};
