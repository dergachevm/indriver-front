import { TSetActiveModal } from "./setActiveModal";
import { TSetModalProps } from "./setModalProps";
import { TSetRequestStatus } from "./setRequestStatus";
import { TSetVacancies } from "./setVacancies";
import { TSetVacancy } from "./setVacancy";
import { TSetTags } from "./setTags";
import { TSetVacanciesCount } from "./setVacanciesCount";
import { TSetSelectedFilters } from "./setSelectedFilters";

export type TAppSliceCaseReducers = {
    setVacancies: TSetVacancies;
    setTags: TSetTags;
    setVacancy: TSetVacancy;
    setRequestStatus: TSetRequestStatus;
    setSelectedFilters: TSetSelectedFilters;
    setModalProps: TSetModalProps;
    setActiveModal: TSetActiveModal;
    setVacanciesCount: TSetVacanciesCount;
};
