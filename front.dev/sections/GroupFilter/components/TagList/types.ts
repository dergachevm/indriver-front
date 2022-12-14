import { FC } from "react";

import { TTagIconName } from "@components/Tag";

export type TTagListProps = {
    list: Array<TTagData>;
};

export type TTagListComponent = FC<TTagListProps>;

export type TTagData = {
    id: string;
    label: string;
    icon?: TTagIconName;
    count?: number;
};
