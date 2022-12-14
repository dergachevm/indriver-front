import { TSetSelectedFilters } from "./types";

const setSelectedFilters: TSetSelectedFilters = (state, action) => {
    const { selectedFilters } = action.payload;

    return {
        ...state,
        selectedFilters,
    };
};

export default setSelectedFilters;
