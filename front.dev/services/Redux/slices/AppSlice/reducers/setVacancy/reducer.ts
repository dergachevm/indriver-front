import { TSetVacancy } from "./types";

const setVacancy: TSetVacancy = (state, action) => {
    const { vacancy } = action.payload;

    return {
        ...state,
        currentVacancy: vacancy,
    };
};

export default setVacancy;
