import { FC } from "react";

import { TIconName } from "@components/Icon";

export type TCardProps = { data: TContentData };

export type TCardComponent = FC<TCardProps>;

export type TContentData = {
    icon: TIconName;
    label: string;
    desc: string;
    id: string;
};
