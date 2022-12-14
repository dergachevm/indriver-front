import { resolve } from "path";

export const getAlias = (entryDir: string): { [index: string]: string } => {
    return {
        [`@pages`]: resolve(entryDir, "pages"),
        [`@sections`]: resolve(entryDir, "sections"),
        [`@components`]: resolve(entryDir, "components"),
        [`@assets`]: resolve(entryDir, "assets"),
        [`@scss`]: resolve(entryDir, "scss"),
        [`@layouts`]: resolve(entryDir, "layouts"),
        [`@utils`]: resolve(entryDir, "utils"),
        [`@hooks`]: resolve(entryDir, "hooks"),
        [`@router`]: resolve(entryDir, "router"),
        [`@services`]: resolve(entryDir, "services"),
        [`@dev`]: resolve(entryDir),
    };
};
