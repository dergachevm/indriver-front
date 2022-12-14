import { useCallback } from "react";

import {
    actions,
    storeGetters,
    useDispatch,
    useSelector,
} from "@services/Redux";
import { TSelectedFiltersRecord } from "@services/Redux/slices";

import { TUseSetSelectedFilters } from "./types";

const {
    app: { setSelectedFilters },
} = actions;

const useSetSelectedFilters: TUseSetSelectedFilters = () => {
    const dispatch = useDispatch();

    const selectedFilters = useSelector(storeGetters.selectedFiltersGetter);

    const setFilters = useCallback(
        (filters: TSelectedFiltersRecord) => {
            dispatch(setSelectedFilters({ selectedFilters: filters }));
        },
        [dispatch]
    );

    const clearFilters = useCallback(() => {
        dispatch(setSelectedFilters({ selectedFilters: {} }));
    }, [dispatch]);

    return {
        clearSelectedFilters: clearFilters,
        selectedFilters,
        setSelectedFilters: setFilters,
    };
};

export default useSetSelectedFilters;
