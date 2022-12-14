import { FC } from "react";

export type TImageGalleryProps = {
    className?: string;
    data: Array<TImageGalleryData>;
};

export type TImageGalleryData = {
    img: string;
    id: string;
};

export type TImageGalleryComponent = FC<TImageGalleryProps>;
