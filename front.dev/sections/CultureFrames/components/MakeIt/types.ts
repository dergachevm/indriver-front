import { FC } from "react";

export type TMakeItProps = {
    scrollStart: number;
    scrollEnd: number;
    number: number;
};

export type TMakeItComponent = FC<TMakeItProps>;
