import { DetailedHTMLProps, FC, ImgHTMLAttributes } from "react";

export type TImageProps = DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
> & {
    noHide?: boolean;
};

export type TImageComponent = FC<TImageProps>;
