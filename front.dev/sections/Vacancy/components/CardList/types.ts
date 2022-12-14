import { FC } from "react";

import { TVacancy } from "@services/Redux/slices";

export type TCardListProps = {
    data: TVacancy;
    id: number;
    className?: string;
};

export type TCardListComponent = FC<TCardListProps>;
