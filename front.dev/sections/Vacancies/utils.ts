import { TFilterOptions } from "@services/Api";
import { TSelectedFiltersRecord, TTagData } from "@services/Redux/slices";
import { getRandomId, is } from "@utils/shared";

import { TCategory } from "./components/Category";

export const mapSelecedClustersEntry = (
    entry: [string, TSelectedFiltersRecord[keyof TSelectedFiltersRecord]]
): [string, Array<string>] => {
    const [key, value] = entry;

    return [key, value];
};

export const mapSelectedClustersToFilters = (
    selectedClusetrs: TSelectedFiltersRecord
): TFilterOptions => {
    const asArray = Object.entries(selectedClusetrs);

    return Object.fromEntries(asArray.map(mapSelecedClustersEntry));
};

export const findClusterByName = (name: string) => {
    return (el: string) => {
        return el === name;
    };
};

export const mapTagToCategory = (data: TTagData): TCategory => {
    const { stack, title } = data;

    return {
        data,
        id: getRandomId(),
        label: title,
        tags: is(undefined, stack) ? [] : stack,
    };
};
