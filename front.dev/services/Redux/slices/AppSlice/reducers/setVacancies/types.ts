import { TAppSliceState, TShortVacancyList } from "../../types";

export type TSetVacancies = (
    state: TAppSliceState,
    action: TSetVacanciesAction
) => TAppSliceState;

export type TSetVacanciesAction = {
    type: string;
    payload: TSetVacanciesActionPayload;
};

export type TSetVacanciesActionPayload = {
    vacancies: TShortVacancyList;
};
