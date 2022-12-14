import { FC } from "react";

import { TShortVacancy } from "@services/Redux/slices";

export type TVacancyListProps = {
    list: Array<TShortVacancy>;
    total: number;
    count: number;
    elRef?: React.MutableRefObject<HTMLDivElement | null>;
    className?: string;
};

export type TVacancyListComponent = FC<TVacancyListProps>;
