import { TErrRecord, TFormDataRecord } from "./types";

export const initFormData = (): TFormDataRecord => {
    return {
        email: "",
        file: null,
        name: "",
        phone: "",
    };
};

export const initErrRecord = (): TErrRecord => {
    return {
        email: false,
        file: false,
        name: false,
        phone: false,
    };
};

export const initCheckValidateRecord = (): TErrRecord => {
    return {
        email: false,
        file: false,
        name: false,
        phone: false,
    };
};
