import { CSSProperties, FC } from "react";

import { TColData } from "./components/Col";

export type TInfoCardProps = {
    data: TCardData;
    elRef: React.MutableRefObject<HTMLDivElement | null>;

    className?: string;
    style?: CSSProperties;
};

export type TCardData = {
    header: {
        label: string;
        desc: string;
    };
    content: Array<TColData>;
    bgImage?: string;
};

export type TInfoCardComponent = FC<TInfoCardProps>;
