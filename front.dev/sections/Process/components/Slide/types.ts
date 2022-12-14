import { FC, MutableRefObject } from "react";

export type TSlideProps = {
    className?: string;
    number: number;
    text: string;
    elRef?: MutableRefObject<HTMLDivElement | null>;
};

export type TSlideComponent = FC<TSlideProps>;
