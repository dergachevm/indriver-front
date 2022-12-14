import { FC } from "react";

export type TSlideProps = {
    className?: string;
    imgType: TSlideImgType;
    img: string;
    text: string;
};

export type TSlideData = {
    id: string;
    img: string;
    imgType: TSlideImgType;
    text: string;
};

export type TSlideImgType = "cover" | "default";

export type TSlideComponent = FC<TSlideProps>;
