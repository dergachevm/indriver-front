import { RequestStatus } from "@dev/enums";

export type TAppSliceState = {
    vacancies: TShortVacancyList;
    currentVacancy: TVacancy | null;
    requestStatus: RequestStatus;
    modalManager: TModalManager;
    tags: TVacansiesTagDataRecord | null;
    vacanciesCount: number;
    vacanciesTotal: number;
    selectedFilters: TSelectedFiltersRecord;
};

export type TModalManager = {
    active: TModalName | null;
    modalState: Record<TModalName, TModalState<TModalName> | null>;
};

export type TModalState<T extends TModalName> = {
    name: T;
    props: TModalProps<T>;
};

export type TModalProps<T extends TModalName> = T extends "form-success"
    ? TFormSuccessModalProps
    : never;

export type TFormSuccessModalProps = null;

export type TModalName = "form-success";

export type TShortVacancyList = Array<TShortVacancy>;

export type TVacansiesTagDataRecord = Record<string, Array<TTagData>>;

export type TSelectedFiltersRecord = Record<string, Array<string>>;

export type TTagData = {
    id: string;
    category: string;
    name: string;
    title: string;
    stack?: Array<TStack>;
};

export type TStack = {
    id: string;
    label: string;
    name: string;
    count: number;
};

export type TShortVacancy = {
    id: number;
    label: string;
    description: string;
    tags: Array<TVacancyTag>;
};

export type TVacancy = {
    id: number;
    label: string;
    description: string;
    tags: Array<TVacancyTag>;
    tasks: TVacancyTasks;
    expectations: TVacancyExpectations;
    terms: TVacancyTerms;
    teamDescription: TVacancyTeamDescription;
    stack: TVacancyStack;
    interviewProcessLink: string;
};

export type TVacancyTag = {
    id: string;
    label: string;
    name: string;
    // TODO
    count?: number;
};

export type TVacancyTasks = {
    label: string;
    items: Array<TVacancyTaskItem>;
};

export type TVacancyTaskItem = {
    id: string;
    label: string;
};

export type TVacancyExpectations = {
    label: string;
    items: Array<TVacancyExpectationsItem>;
};

export type TVacancyExpectationsItem = {
    id: string;
    label: string;
};

export type TVacancyTerms = {
    label: string;
    items: Array<TVacancyTermsItem>;
};

export type TVacancyTermsItem = {
    id: string;
    label: string;
};

export type TVacancyTeamDescription = {
    label: string;
    desc: string;
};

export type TVacancyTeamDescriptionItem = {
    id: string;
    label: string;
};

export type TVacancyStack = {
    label: string;
    desc: string;
    items: Array<TVacancyTeamDescriptionItem>;
};

export type TVacancyStackItem = {
    id: string;
    label: string;
};
