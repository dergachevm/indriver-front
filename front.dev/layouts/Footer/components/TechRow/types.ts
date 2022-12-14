import { FC } from "react";

import { TTechLinkData } from "../TechLink";

export type TTechRowProps = {
    data: TTechRowData;
};

export type TTechRowData = {
    id: string;
    linkList: [TTechLinkData, TTechLinkData];
};

export type TTechRowComponent = FC<TTechRowProps>;
