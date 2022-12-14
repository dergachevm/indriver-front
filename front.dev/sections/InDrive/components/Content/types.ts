import { FC } from "react";

import { TContentData } from "../Card";

export type TContentProps = {
    list: Array<TContentData>;
};

export type TContentComponent = FC<TContentProps>;
