import { getFileLoader, getUrlLoader } from "./loaders";

export const getFontRule = (entryDir: string) => {
    return {
        test: /\.(woff2?|ttf|eot|svg|otf)$/,
        use: [getFileLoader(entryDir), getUrlLoader()],
    };
};
