import { FC } from "react";

import { TShortVacancy } from "@services/Redux/slices";

export type TVacancyProps = {
    data: TShortVacancy;
};

export type TVacancyComponent = FC<TVacancyProps>;
