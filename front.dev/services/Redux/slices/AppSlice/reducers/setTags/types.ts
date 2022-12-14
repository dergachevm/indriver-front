import { TAppSliceState, TVacansiesTagDataRecord } from "../../types";

export type TSetTags = (
    state: TAppSliceState,
    action: TSetTagsAction
) => TAppSliceState;

export type TSetTagsAction = {
    type: string;
    payload: TSetTagsActionPayload;
};

export type TSetTagsActionPayload = {
    tags: TVacansiesTagDataRecord;
};
