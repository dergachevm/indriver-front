import { FC, PropsWithChildren } from "react";

export type TFrameProps = PropsWithChildren<{
    scrollStart: number;
    scrollEnd: number;
    className?: string;
    number: number;
    scrollByNumber?: number;
}>;

export type TFrameComponent = FC<TFrameProps>;
