import { FC } from "react";

export type TSubmitBtnProps = {
    label: string;

    className?: string;
    onClick: () => void;
    submitted?: boolean | null;
};

export type TSubmitBtnComponent = FC<TSubmitBtnProps>;
