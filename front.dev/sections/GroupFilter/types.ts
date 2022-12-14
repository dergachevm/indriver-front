import { FC } from "react";

import {
    TSelectedFiltersRecord,
    TTagData,
    TVacansiesTagDataRecord,
} from "@services/Redux/slices";

export type TGroupFilterProps = {
    className?: string;
    filters: TVacansiesTagDataRecord;
    selectedClusters: TSelectedFiltersRecord;
    onSelectCluster: (group: string, cluster: TTagData) => void;
    onClear: () => void;
    hasClear?: boolean;
};

export type TGroupFilterComponent = FC<TGroupFilterProps>;
