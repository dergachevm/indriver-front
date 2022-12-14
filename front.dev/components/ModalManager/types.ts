import { FC } from "react";

import { TModalName } from "@services/Redux/slices";

export type TModalManagerProps = Record<string, unknown>;

export type TModalManagerComponent = FC<TModalManagerProps>;

export type TModalRecord = Record<TModalName, FC>;
