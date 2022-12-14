import { FC, ReactElement } from "react";

export type TIfProps = {
    condition: boolean;
    els?: ReactElement | string;
    children: ReactElement | string;
};

export type TIfComponent = FC<TIfProps>;
