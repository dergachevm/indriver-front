import { FC, PropsWithChildren } from "react";

export type TJobCardLayoutProps = PropsWithChildren<{
    wrapClassName?: string;
    className?: string;
    style?: TStyle
}>;

export type TJobCardStyleClasses = Record<TStyle, string>;

export type TStyle = "green" | "white";

export type TJobCardLayoutComponent = FC<TJobCardLayoutProps>;
