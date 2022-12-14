import { CSSProperties, FC, PropsWithChildren } from "react";

export type TSectionProps = PropsWithChildren<{
    className?: string;
    wrapClassName?: string;
    contentClassName?: string;
    bgImage?: string;
    wrapBgImage?: string;
    contentBgImage?: string;

    elRef?: React.MutableRefObject<HTMLDivElement | null>;

    style?: CSSProperties;
}>;

export type TSectionComponent = FC<TSectionProps>;
