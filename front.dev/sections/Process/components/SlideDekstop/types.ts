import { FC } from "react";

import { TSlideProps } from "../Slide";

export type TSlideDekstopProps = TSlideProps & {
    active: boolean;
};

export type TSlideDekstopComponent = FC<TSlideDekstopProps>;
