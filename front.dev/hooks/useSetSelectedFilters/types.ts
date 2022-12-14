import { TSelectedFiltersRecord } from "@services/Redux/slices";

export type TUseSetSelectedFilters = () => {
    selectedFilters: TSelectedFiltersRecord;
    setSelectedFilters: (filters: TSelectedFiltersRecord) => void;
    clearSelectedFilters: () => void;
};
