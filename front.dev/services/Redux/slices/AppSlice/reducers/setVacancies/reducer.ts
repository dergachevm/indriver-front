import { TSetVacancies } from "./types";

const setVacancies: TSetVacancies = (state, action) => {
    const { vacancies } = action.payload;

    return {
        ...state,
        vacancies,
    };
};

export default setVacancies;
