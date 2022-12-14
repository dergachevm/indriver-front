import { FC } from "react";

import { TSelectedFiltersRecord, TTagData, TVacansiesTagDataRecord } from "@services/Redux/slices";

export type TFilterListProps = {
    record: TVacansiesTagDataRecord;
    className?: string;
    selectedClusters: TSelectedFiltersRecord;
    onSelectCluster: (group: string, cluster: TTagData) => void;
};

export type TFilterListComponent = FC<TFilterListProps>;
