import { RuleSetRule } from "webpack";

import { getJsRule } from "./jsRule";
import { getTsRule } from "./tsRule";
import { getCssRule } from "./cssRule";
import { getScssRule } from "./scssRule";
import { getFileRule } from "./fileRule";
import { getReactSvgRule } from "./reactSvgRule";
import { getFontRule } from "./fontRule";

export const getRules = (
    isDev: boolean,
    entryDir: string
): Array<RuleSetRule> => {
    return [
        getJsRule(),
        getTsRule(),
        getCssRule(isDev),
        getScssRule(isDev),
        getFileRule(entryDir),
        getReactSvgRule(),
        getFontRule(entryDir),
    ];
};
