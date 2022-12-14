import { FC } from "react";

import { TNavigationTab } from "@dev/types";

import { TTabColor } from "../NavigationTab";

export type TDekstopNavigationListProps = {
    list: Array<TNavigationTab>;
    color: TTabColor;
};

export type TDekstopNavigationListComponent = FC<TDekstopNavigationListProps>;
