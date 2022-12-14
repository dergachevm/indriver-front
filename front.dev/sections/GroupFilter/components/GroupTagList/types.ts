import { FC } from "react";

import { TTagData } from "@services/Redux/slices";

export type TGroupTagListProps = {
    list: Array<TTagData>;
    selected?: Array<string>;
    group: string;
    onSelectCluster: (group: string, cluster: TTagData) => void;
};

export type TGroupTagListComponent = FC<TGroupTagListProps>;
