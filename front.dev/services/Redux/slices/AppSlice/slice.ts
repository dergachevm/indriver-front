import { createSlice } from "@reduxjs/toolkit";

import { appSliceOptions } from "./constants";

const slice = createSlice(appSliceOptions);

const { actions } = slice;

const { reducer } = slice;

export default {
    actions,
    reducer,
    slice,
};
