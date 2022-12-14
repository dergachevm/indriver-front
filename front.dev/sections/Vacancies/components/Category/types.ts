import { FC } from "react";

import { TTagData, TVacancyTag } from "@services/Redux/slices";

export type TCategoryProps = {
    data: TCategory;
    onClick?: () => void;
};

export type TCategoryComponent = FC<TCategoryProps>;

export type TCategory = {
    id: string;
    label: string;
    tags: Array<TVacancyTag>;
    data: TTagData;
};
