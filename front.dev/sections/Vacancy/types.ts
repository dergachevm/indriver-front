import { FC } from "react";

export type TVacancyProps = {
    id: number
};

export type TCardListData = {
    id: string;
    isGreen: boolean;
    title: string;
    content: TCardContent;
}

export type TCardContent = {
    text?: string;
    marker?: string;
    list?: Array<string>
}

export type TVacancyComponent = FC<TVacancyProps>;
