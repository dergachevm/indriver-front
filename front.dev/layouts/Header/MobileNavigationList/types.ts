import { FC } from "react";

import { TNavigationTab } from "@dev/types";

export type TMobileNavigationListProps = {
    list: Array<TNavigationTab>;
};

export type TMobileNavigationListComponent = FC<TMobileNavigationListProps>;
