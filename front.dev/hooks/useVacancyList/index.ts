import { useCallback, useEffect, useRef } from "react";

import Api, { TFilterOptions, TPayload } from "@services/Api";
import {
    actions,
    storeGetters,
    useDispatch,
    useSelector,
} from "@services/Redux";
import { is } from "@utils/shared";

import { TUseGetVacancyList } from "./types";
import { mapVacancyList, mapVacansiesTagDataRecord } from "./mappers";

const {
    app: { setVacancies, setTags, setVacanciesCount },
} = actions;

const useGetVacancyList: TUseGetVacancyList = (
    filters,
    needRequest = false
) => {
    const dispatch = useDispatch();

    const vacancyList = useSelector(storeGetters.vacancyListGetter);
    const tagList = useSelector(storeGetters.tagListGetter);
    const { vacanciesTotal, vacanciesCount } = useSelector(
        storeGetters.appGetter
    );

    const isInit = useRef(true);

    const objectAsJson = JSON.stringify(filters);

    const getVacancyList = useCallback(async () => {
        if (!isInit.current && !needRequest) {
            return;
        }

        if (isInit.current) {
            isInit.current = false;
        }

        const filtersObj = JSON.parse(objectAsJson) as
            | TFilterOptions
            | undefined;

        let filtersResult: TPayload | undefined = undefined;
        if (!is(undefined, filtersObj)) {
            filtersResult = {
                filterBy: filtersObj,
            };
        }

        const {
            count,
            result,
            tags,
            total,
        } = await Api.GetVacancyListWithFilters(filtersResult);

        const mappedVacancies = mapVacancyList(result);

        if (is(null, tagList)) {
            const mappedTags = mapVacansiesTagDataRecord(tags);

            dispatch(
                setTags({
                    tags: mappedTags,
                })
            );
        }

        dispatch(
            setVacancies({
                vacancies: mappedVacancies,
            })
        );
        dispatch(
            setVacanciesCount({
                count,
                total,
            })
        );
    }, [dispatch, objectAsJson, tagList, needRequest, isInit]);

    useEffect(() => {
        getVacancyList();
    }, [getVacancyList]);

    return {
        count: vacanciesCount,
        tagList,
        total: vacanciesTotal,
        updateVacancy: getVacancyList,
        vacancyList,
    };
};

export default useGetVacancyList;
