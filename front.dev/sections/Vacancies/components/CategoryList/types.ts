import { FC } from "react";

import { TTagData } from "@services/Redux/slices";

import { TCategory } from "../Category";

export type TCategoryListProps = {
    list: Array<TCategory>;
    elRef?: React.MutableRefObject<HTMLDivElement | null>;
    className?: string;
    onSelectCluster: (group: string, cluster: TTagData) => void;
};

export type TCategoryListComponent = FC<TCategoryListProps>;
