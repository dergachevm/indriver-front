import { FC } from "react";

export type THeaderProps = {
    label: string;
    desc: string;

    className?: string;
};

export type THeaderComponent = FC<THeaderProps>;
