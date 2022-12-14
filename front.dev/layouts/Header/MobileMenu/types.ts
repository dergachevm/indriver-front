import { FC } from "react";

import { TNavigationTab } from "@dev/types";

export type TMobileMenuProps = {
    tabs: Array<TNavigationTab>;
    isOpen: boolean;
    className?: string;
    onChangeVisibility: (visible: boolean) => void;
    elRef?: React.MutableRefObject<HTMLDivElement | null>;
};

export type TMobileMenuComponent = FC<TMobileMenuProps>;
