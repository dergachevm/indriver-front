import { FC, PropsWithChildren } from "react";

export type TParalaxWrapProps = PropsWithChildren<{
    bgImage: string;
    className?: string;
}>;

export type TParalaxWrapComponent = FC<TParalaxWrapProps>;
