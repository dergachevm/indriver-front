import { getFileLoader } from "./loaders";

export const getFileRule = (entryDir: string) => {
    return {
        test: /\.(png|jpe?g|gif)$/i,
        use: [getFileLoader(entryDir)],
    };
};
