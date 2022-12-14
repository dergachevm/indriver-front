import { TSetVacanciesCount } from "./types";

const setVacanciesCount: TSetVacanciesCount = (state, action) => {
    const { total, count } = action.payload;

    return {
        ...state,
        vacanciesCount: count,
        vacanciesTotal: total,
    };
};

export default setVacanciesCount;
