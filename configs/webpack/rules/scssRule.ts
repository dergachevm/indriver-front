import {
    getCSSLoader,
    getPostCssLoader,
    getScssLoader,
    getStyleLoader,
} from "./loaders";

export const getScssRule = (isDev: boolean) => {
    return {
        test: /.scss$/,
        exclude: /node_modules/,
        use: [
            getStyleLoader(isDev),
            getCSSLoader(isDev, "scss"),
            getScssLoader(isDev),
            getPostCssLoader(isDev),
        ],
    };
};
