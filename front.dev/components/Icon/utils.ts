import { TSvg } from "@dev/types";

import { TIconData } from "./types";

export const createIconData = (url: string, Component: TSvg): TIconData => {
    return {
        Component,
        url,
    };
};
