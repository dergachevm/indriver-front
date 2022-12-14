import { TAppSliceState, TSelectedFiltersRecord } from "../../types";

export type TSetSelectedFilters = (
    state: TAppSliceState,
    action: TSetSelectedFiltersAction
) => TAppSliceState;

export type TSetSelectedFiltersAction = {
    type: string;
    payload: TSetSelectedFiltersActionPayload;
};

export type TSetSelectedFiltersActionPayload = {
    selectedFilters: TSelectedFiltersRecord;
};
