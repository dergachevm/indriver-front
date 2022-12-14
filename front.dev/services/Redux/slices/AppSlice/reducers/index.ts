import { TAppSliceCaseReducers } from "./types";
import setVacancies from "./setVacancies";
import setVacancy from "./setVacancy";
import setRequestStatus from "./setRequestStatus";
import setModalProps from "./setModalProps";
import setActiveModal from "./setActiveModal";
import setTags from "./setTags";
import setVacanciesCount from "./setVacanciesCount";
import setSelectedFilters from "./setSelectedFilters";

export const appSliceCaseReducers: TAppSliceCaseReducers = {
    setActiveModal,
    setModalProps,
    setRequestStatus,
    setSelectedFilters,
    setTags,
    setVacancies,
    setVacanciesCount,
    setVacancy,
};
