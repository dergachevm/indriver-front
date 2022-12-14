import { FC } from "react";

import { TNavigationTab } from "@dev/types";

export type TFixedMobileHeaderProps = {
    tabs: Array<TNavigationTab>;
    className?: string;
};

export type TFixedMobileHeaderComponent = FC<TFixedMobileHeaderProps>;
