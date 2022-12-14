import { FC } from "react";

export type TInputProps = {
    value: string;
    type: string;
    placeholder: string;
    onChange: (value: string) => void;
    onError?: (error: boolean) => void;
    required?: boolean;
    error?: boolean | string;
};

export type TInputComponent = FC<TInputProps>;
