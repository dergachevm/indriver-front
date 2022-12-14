import { TypedUseSelectorHook } from "react-redux";

import { RequestStatus } from "@dev/enums";

import { store } from ".";
import { Slice } from "./enums";
import {
    TAppSliceState,
    TModalManager,
    TSelectedFiltersRecord,
    TShortVacancyList,
    TVacancy,
    TVacansiesTagDataRecord,
} from "./slices/AppSlice/types";

export type TState = {
    [Slice.App]: TAppSliceState;
};

export type TStoreOptions = {
    preloadedState: TState;
    reducer: TReducer;
};

export type TReducer = { [key in Slice]: any };

export type TDispatch = typeof store.dispatch;

export type TStoreGetters = {
    storeGetter: (state: TState) => TState;
    appGetter: (state: TState) => TState[Slice.App];
    currentVacancyGetter: (state: TState) => TVacancy | null;
    vacancyListGetter: (state: TState) => TShortVacancyList;
    tagListGetter: (state: TState) => TVacansiesTagDataRecord | null;
    requestStatusGetter: (state: TState) => RequestStatus;
    modalManagerGetter: (state: TState) => TModalManager;
    selectedFiltersGetter: (state: TState) => TSelectedFiltersRecord;
};

export type TUseDispatch = () => TDispatch;

export type TUseSelector = TypedUseSelectorHook<TState>;
