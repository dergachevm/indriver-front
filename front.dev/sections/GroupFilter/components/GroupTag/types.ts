import { FC } from "react";

export type TGroupTagProps = {
    label: string;
    active?: boolean;
    index?: number;
    animDuraction?: boolean;
    onClick: () => void;
};

export type TGroupTagComponent = FC<TGroupTagProps>;
