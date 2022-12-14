import { FC } from "react";

import { TTechRowData } from "../TechRow";

export type TTechBoxProps = {
    data: Array<TTechRowData>;
};

export type TTechBoxComponent = FC<TTechBoxProps>;
