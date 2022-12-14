import { FC } from "react";

import { FileExtension } from "@dev/enums";

export type TUploadProps = {
    labelText: string;
    fileName?: string;
    maxSize: number;
    ext: Array<FileExtension>;
    onChange?: (file: File | null) => void;
    onError?: (error: boolean) => void;
    error?: boolean | string;
};

export type TUploadComponent = FC<TUploadProps>;
