import { FC } from "react";

import { TNavigationTab } from "@dev/types";

export type TStaticMobileHeaderProps = {
    tabs: Array<TNavigationTab>;
    className?: string;
};

export type TStaticMobileHeaderComponent = FC<TStaticMobileHeaderProps>;
