import { FC } from "react";

export type TTabProps = {
    label: string;
    active: boolean;
    id: string;
    onClick: (id: string) => void;
};

export type TTabComponent = FC<TTabProps>;
