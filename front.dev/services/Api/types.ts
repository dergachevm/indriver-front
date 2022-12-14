export type TGetVacancyList = () => Promise<TServerVacanciesData>;

export type TGetVacancyListWithFilters = (
    payload?: TPayload
) => Promise<TServerVacanciesData>;

export type TPayload = {
    filterBy: TFilterOptions;
};

export type TFilterOptions = Record<string, Array<string>>;

export type TGetVacancy = (id: number) => Promise<TServerVacancy | null>;

export type TSubmitVacancy = (res: TFormResponse) => Promise<boolean>;

export type TFormResponse = {
    vacancy_id: number;
    name: string;
    phone: string;
    email: string;
    attach: File | null;
};

export type TServerVacanciesData = {
    result: TServerVacancyList;
    tags: TServerVacansiesTagDataRecord;
    count: number;
    total: number;
};

export type TServerVacansiesTagDataRecord = Record<string, TServerTagData>;

export type TServerVacancyList = Array<TServerShortVacancy>;

export type TServerShortVacancy = {
    id: number;
    label: string;
    teamDescription: string;
    tags: Array<TServerVacancyTag>;
};

export type TServerVacancy = {
    id: number;
    label: string;
    description: string;
    tags: Array<TServerVacancyTag>;
    tasks: TServerVacancyTasks;
    expectations: TServerVacancyExpectations;
    terms: TServerVacancyTerms;
    teamDescription: TServerVacancyTeamDescription;
    stack: TServerVacancyStack;
    interviewProcessLink: string;
    applyForJobLink: string;
};

export type TServerVacancyTag = {
    title: string;
    name: string;
};

export type TServerVacancyTasks = {
    label: string;
    items: Array<string>;
};

export type TServerVacancyExpectations = {
    label: string;
    items: Array<string>;
};

export type TServerVacancyTerms = {
    label: string;
    items: Array<string>;
};

export type TServerVacancyTeamDescription = {
    label: string;
    desc: string;
};

export type TServerVacancyStack = {
    label: string;
    desc: Array<string>;
    items: string;
    // desc: string;
    // items: Array<string>;
};

export type TSubmitVacancyResponse = {
    message: string;
    result: {
        fieldsSaved: boolean;
        filePublicUrl: string | null;
    };
    status: number;
    success: boolean;
};

export type TServerVacancyResponse = {
    count: number;
    message: string;
    result: Array<TServerVacancy>;
    status: number;
    success: boolean;
};

export type TServerVacancyListResponse = {
    count: number;
    total: number;
    message: string;
    result: Array<TServerShortVacancy>;
    status: number;
    success: boolean;
    tags: Record<string, TServerTagData>;
};

export type TServerTagName = string;

export type TServerTagData = {
    result: Array<TServerTagResult>;
};

export type TServerTagResult = {
    category: string;
    name: string;
    title: string;
    stack?: Array<TServerStack>;
};

export type TServerStack = {
    title: string;
    count: number;
};
