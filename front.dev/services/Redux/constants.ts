import { Slice } from "./enums";
import { reducer } from "./reducer";
import { appSliceState } from "./slices/AppSlice/constants";
import { TState, TStoreOptions } from "./types";

export const initState: TState = {
    [Slice.App]: appSliceState,
};

export const storeOptions: TStoreOptions = {
    preloadedState: initState,
    reducer: reducer,
};

export const mainGroupName = "cluster";
