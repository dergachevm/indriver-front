export type TUseSubmitVacancyForm = (
    data: TFormData
) => {
    submitForm: () => Promise<boolean>;
    submitted: boolean | null;
    clearSubmitted: () => void;
};

export type TFormData = {
    id: number;
    name: string;
    phone: string;
    email: string;
    file: File | null;
};
