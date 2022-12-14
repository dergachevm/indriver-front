import { FC, MutableRefObject, PropsWithChildren } from "react";

export type TCardProps = PropsWithChildren<{
    className?: string;
    onClick?: () => void;
    elRef?: MutableRefObject<HTMLDivElement | null>;
}>;

export type TCardComponent = FC<TCardProps>;
