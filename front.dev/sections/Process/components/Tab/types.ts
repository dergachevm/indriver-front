import { FC, MouseEvent } from "react";

export type TTabProps = {
    active?: boolean;
    className?: string;
    index: number;

    label: string;
    name: string;

    forModal?: boolean;
    scrollToEl?: boolean;

    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
};

export type TTabComponent = FC<TTabProps>;
