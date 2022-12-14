import { DEFAULT_HOST } from "./constants";
import { Url } from "./enums";

export const getFullUrl = (url: Url): string => {
    return `${DEFAULT_HOST}/${url}`;
};

export const convertToJson = async (data: Response) => {
    return data.json();
};
