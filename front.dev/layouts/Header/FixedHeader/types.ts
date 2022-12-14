import { FC } from "react";

import { TNavigationTab } from "@dev/types";

export type TFixedHeaderProps = {
    tabs: Array<TNavigationTab>;
    show?: boolean;
};

export type TFixedHeaderComponent = FC<TFixedHeaderProps>;
