import { useCallback, useEffect } from "react";

import Api from "@services/Api";
import {
    actions,
    storeGetters,
    useDispatch,
    useSelector,
} from "@services/Redux";
import { is } from "@utils/shared";
import { TVacancy } from "@services/Redux/slices";

import { TUseGetVacancy } from "./types";
import { mapVacancy } from "./mappers";

const {
    app: { setVacancy },
} = actions;

const useGetVacancy: TUseGetVacancy = (id: number) => {
    const dispatch = useDispatch();

    const vacancy = useSelector(storeGetters.currentVacancyGetter);

    const getVacancyList = useCallback(async () => {
        dispatch(
            setVacancy({
                vacancy: null,
            })
        );

        const serverVacancy = await Api.GetVacancy(id);

        let mappedVacancy: TVacancy | null = null;
        if (!is(null, serverVacancy)) {
            mappedVacancy = mapVacancy(serverVacancy);
        }

        dispatch(
            setVacancy({
                vacancy: mappedVacancy,
            })
        );
    }, [dispatch, id]);

    useEffect(() => {
        getVacancyList();
    }, [getVacancyList]);

    return {
        updateVacancy: getVacancyList,
        vacancy: vacancy as TVacancy,
    };
};

export default useGetVacancy;
