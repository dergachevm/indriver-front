import { FC } from "react";

import { TNavigationTab } from "@dev/types";

import { THeaderColor } from "../types";

export type TStaticHeaderProps = {
    tabs: Array<TNavigationTab>;
    withJoin?: boolean;
    color?: THeaderColor;
};

export type TStaticHeaderComponent = FC<TStaticHeaderProps>;
