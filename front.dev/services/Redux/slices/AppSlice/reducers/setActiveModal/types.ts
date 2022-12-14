import { TAppSliceState, TModalName } from "../../types";

export type TSetActiveModal = (
    state: TAppSliceState,
    action: TSetActiveModalAction
) => TAppSliceState;

export type TSetActiveModalAction = {
    type: string;
    payload: TSetActiveModalActionPayload;
};

export type TSetActiveModalActionPayload = {
    name: TModalName | null;
};
