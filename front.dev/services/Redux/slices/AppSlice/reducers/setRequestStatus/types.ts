import { RequestStatus } from "@dev/enums";

import { TAppSliceState } from "../../types";

export type TSetRequestStatus = (
    state: TAppSliceState,
    action: TSetRequestStatusAction
) => TAppSliceState;

export type TSetRequestStatusAction = {
    type: string;
    payload: TSetRequestStatusActionPayload;
};

export type TSetRequestStatusActionPayload = {
    requestStatus: RequestStatus;
};
