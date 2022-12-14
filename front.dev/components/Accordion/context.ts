import { createContext } from "react";

import { TAccordionContext } from "./types";

export const AccordionContext = createContext<TAccordionContext | null>(null);

export const AccordionContextProvider = AccordionContext.Provider;

export const AccordionContextConsumer = AccordionContext.Consumer;
