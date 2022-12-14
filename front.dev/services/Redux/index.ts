import { configureStore } from "@reduxjs/toolkit";
import {
    useSelector as useReduxSelector,
    useDispatch as useReduxDispatch,
} from "react-redux";
import { createSelector } from "reselect";

import { TState, TStoreGetters, TUseDispatch, TUseSelector } from "./types";
import { storeOptions } from "./constants";
import { Slice } from "./enums";
import { AppSlice } from "./slices";

export const store = configureStore(storeOptions);

export const actions = {
    app: AppSlice.actions,
};

export const useDispatch: TUseDispatch = useReduxDispatch;

export const useSelector: TUseSelector = useReduxSelector;

export const storeGetters: TStoreGetters = {
    appGetter: createSelector(
        (state: TState) => {
            return state[Slice.App];
        },
        (app) => app
    ),
    currentVacancyGetter: createSelector(
        (state: TState) => {
            return state[Slice.App].currentVacancy;
        },
        (currentVacancy) => currentVacancy
    ),
    modalManagerGetter: createSelector(
        (state: TState) => {
            return state[Slice.App].modalManager;
        },
        (manager) => manager
    ),
    requestStatusGetter: createSelector(
        (state: TState) => {
            return state[Slice.App].requestStatus;
        },
        (requestStatus) => requestStatus
    ),
    selectedFiltersGetter: createSelector(
        (state: TState) => {
            return state[Slice.App].selectedFilters;
        },
        (items) => items
    ),
    storeGetter: createSelector(
        (state: TState) => {
            return state;
        },
        (appStore) => appStore
    ),
    tagListGetter: createSelector(
        (state: TState) => {
            return state[Slice.App].tags;
        },
        (tags) => tags
    ),
    vacancyListGetter: createSelector(
        (state: TState) => {
            return state[Slice.App].vacancies;
        },
        (items) => items
    ),
};

export default {
    actions,

    store,
    storeGetters,
    useDispatch,
    useSelector,
};
