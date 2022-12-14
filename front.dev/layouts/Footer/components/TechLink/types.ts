import { FC } from "react";

import { TSelectedFiltersRecord } from "@services/Redux/slices";

export type TTechLinkProps = {
    data: TTechLinkData;
};

export type TTechLinkData = {
    id: string;
    label: string;
    link: string;
    filters: TSelectedFiltersRecord;
};

export type TTechLinkComponent = FC<TTechLinkProps>;
