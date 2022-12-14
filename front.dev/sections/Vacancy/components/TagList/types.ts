import { FC } from "react";

import { TVacancyTag } from "@services/Redux/slices";

export type TTagListProps = {
    data: Array<TVacancyTag>;
};

export type TTagListComponent = FC<TTagListProps>;
