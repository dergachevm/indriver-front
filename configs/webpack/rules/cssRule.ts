import { getCSSLoader, getPostCssLoader, getStyleLoader } from "./loaders";

export const getCssRule = (isDev: boolean) => {
    return {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
            getStyleLoader(isDev),
            getCSSLoader(isDev, "css"),
            getPostCssLoader(isDev),
        ],
    };
};
