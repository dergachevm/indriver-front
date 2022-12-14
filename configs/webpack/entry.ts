import { resolve } from "path";
import { EntryObject } from "webpack";

export const getEntry = (entryDir: string): EntryObject => {
    return {
        index: {
            import: resolve(entryDir, "index.tsx"),
            filename: "[name].min.js",
        },
    };
};
