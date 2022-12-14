import { Slice } from "./enums";
import { TReducer } from "./types";
import { AppSlice } from "./slices";

export const reducer: TReducer = {
    [Slice.App]: AppSlice.reducer,
};
