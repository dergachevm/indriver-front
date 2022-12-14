import { FC } from "react";

import { TTagData } from "@services/Redux/slices";

export type TFilterProps = {
    tags: Array<TTagData>;
    active?: boolean;
    hasSelectedCategory?: boolean;
    name: string;
    main?: boolean;
    selected?: Array<string>;
    onActive: () => void;
    onSelectCluster: (group: string, cluster: TTagData) => void;
    onDeactive: () => void;
};

export type TFilterComponent = FC<TFilterProps>;
