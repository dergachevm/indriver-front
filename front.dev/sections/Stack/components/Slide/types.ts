import { FC } from "react";

export type TSlideProps = {
    langList: Array<TLang>;
    active: boolean;
    className?: string;
};

export type TLang = {
    id: string;
    label: string;
    img: string | null;
};

export type TSlideComponent = FC<TSlideProps>;
