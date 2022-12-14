import { FC, NamedExoticComponent, PropsWithChildren } from "react";

export type TAccordionProps = PropsWithChildren<{
    active?: boolean;
    className?: string;
}>;

export type TAccordionHeadProps = PropsWithChildren<{
    className?: string;
}>;

export type TAccordionBodyProps = PropsWithChildren<{
    className?: string;
    timeout?: number;
}>;

export type TAccordionContext = {
    isActive: boolean;
    toggle: () => void;
};

export type TAccordionComponent = FC<TAccordionProps>;

export type TAccordionHeadComponent = NamedExoticComponent<TAccordionHeadProps>;

export type TAccordionBodyComponent = NamedExoticComponent<TAccordionBodyProps>;

export type TAccordionExoticComponent = NamedExoticComponent<
    TAccordionProps
> & {
    Head: TAccordionHeadComponent;
    Body: TAccordionBodyComponent;
};
