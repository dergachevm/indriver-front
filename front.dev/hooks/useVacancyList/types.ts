import { TFilterOptions } from "@services/Api";
import {
    TShortVacancyList,
    TVacansiesTagDataRecord,
} from "@services/Redux/slices";

export type TUseGetVacancyList = (
    filters?: TFilterOptions,
    needRequest?: boolean
) => {
    vacancyList: TShortVacancyList;
    updateVacancy: () => Promise<void>;
    tagList: TVacansiesTagDataRecord | null;
    count: number;
    total: number;
};
