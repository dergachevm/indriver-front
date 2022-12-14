import { FC } from "react";

export type TBurgerProps = {
    isOpen: boolean;
    onClick: () => void;
    thin?: boolean;
    withWrap?: boolean;
};

export type TBurgerComponent = FC<TBurgerProps>;
