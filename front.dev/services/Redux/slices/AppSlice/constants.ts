import { RequestStatus } from "@dev/enums";

import { appSliceCaseReducers } from "./reducers";
import { TAppSliceState } from "./types";

import { Slice } from "../../enums";

export const appSliceState: TAppSliceState = {
    currentVacancy: null,
    modalManager: {
        active: null,
        modalState: {
            "form-success": {
                name: "form-success",
                props: null,
            },
        },
    },
    requestStatus: RequestStatus.Pending,
    selectedFilters: {},
    tags: null,
    vacancies: [],
    vacanciesCount: 0,
    vacanciesTotal: 0,
};

export const appSliceOptions = {
    initialState: appSliceState,
    name: Slice.App,
    reducers: appSliceCaseReducers,
};
