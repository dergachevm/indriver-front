import { TAppSliceState } from "../../types";

export type TSetVacanciesCount = (
    state: TAppSliceState,
    action: TSetVacanciesCountAction
) => TAppSliceState;

export type TSetVacanciesCountAction = {
    type: string;
    payload: TSetVacanciesCountActionPayload;
};

export type TSetVacanciesCountActionPayload = {
    total: number;
    count: number;
};
