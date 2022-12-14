import { CSSProperties, FC } from "react";

export type TTagProps = {
    label: string;
    icon?: string;
    count?: number;
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
};

export type TTagComponent = FC<TTagProps>;

export type TTagIconName = "friend";
