import { FC } from "react";

export type TFormProps = {
    id: number;
};

export type TFormComponent = FC<TFormProps>;

export type TErrRecord = Record<TField, boolean | string>;

export type TFormDataRecord = {
    email: string;
    file: File | null;
    name: string;
    phone: string;
};

export type TField = keyof TFormDataRecord;
export type TB = TFormDataRecord[TField];
