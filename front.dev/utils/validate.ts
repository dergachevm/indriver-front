import { FileExtension } from "@dev/enums";
import { TErrRecord, TFormDataRecord } from "@sections/Vacancy/components/Form";

import { is, isEmptyStr } from "./shared";

const SIZE_MULT = 1024;

const EMAIL_REG = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PHONE_REG = /^(\+)?(\d{11})$/;

export const checkExtErr = (file: File, extList: Array<FileExtension>) => {
    const filterFn = (ext: FileExtension) => {
        return file.name.endsWith(ext);
    };

    return !extList.some(filterFn);
};

export const checkSizeErr = (file: File, maxSize: number) => {
    return file.size > maxSize * SIZE_MULT * SIZE_MULT;
};

export const validateFile = (
    file: File | null,
    ext: Array<FileExtension>,
    maxSize: number
): boolean => {
    return (
        !is(null, file) &&
        (checkExtErr(file, ext) || checkSizeErr(file, maxSize))
    );
};

export const validateEmail = (email: string) => {
    if (!EMAIL_REG.exec(email)) {
        return "Not valid email";
    }

    return isEmptyStr(email);
};

export const validatePhone = (phone: string) => {
    if (!PHONE_REG.exec(phone)) {
        return "Not valid phone";
    }

    return isEmptyStr(phone);
};

export const validateFormFields = (
    formData: TFormDataRecord,
    maxSize: number,
    extList: Array<FileExtension>,
    checkValidateRecord: TErrRecord = {
        email: true,
        file: true,
        name: true,
        phone: true,
    }
): TErrRecord => {
    const { email, file, name, phone } = formData;

    return {
        email: checkValidateRecord["email"] ? validateEmail(email) : false,
        file: checkValidateRecord["file"]
            ? validateFile(file, extList, maxSize)
            : false,
        name: checkValidateRecord["name"] ? isEmptyStr(name) : false,
        phone: checkValidateRecord["phone"] ? validatePhone(phone) : false,
    };
};
