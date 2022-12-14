import { useCallback, useState } from "react";

import Api from "@services/Api";

import { TUseSubmitVacancyForm } from "./types";

const useSubmitVacancyForm: TUseSubmitVacancyForm = ({
    id,
    name,
    phone,
    email,
    file,
}) => {
    const [submitted, setSubmitted] = useState<boolean | null>(null);

    const submitForm = useCallback(async () => {
        const result = await Api.SubmitVacancyResponce({
            attach: file,
            email,
            name,
            phone,
            vacancy_id: id,
        });

        setSubmitted(result);

        return result;
    }, [id, name, phone, email, file]);

    const clearSubmitted = useCallback(() => {
        setSubmitted(null);
    }, []);

    return {
        clearSubmitted,
        submitForm,
        submitted,
    };
};

export default useSubmitVacancyForm;
