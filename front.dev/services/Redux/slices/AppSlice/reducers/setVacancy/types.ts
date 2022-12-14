import { TAppSliceState, TVacancy } from "../../types";

export type TSetVacancy = (
    state: TAppSliceState,
    action: TSetVacancyAction
) => TAppSliceState;

export type TSetVacancyAction = {
    type: string;
    payload: TSetVacancyActionPayload;
};

export type TSetVacancyActionPayload = {
    vacancy: TVacancy | null;
};
