import { EffectCallback } from "react";

export type TUseDidUpdate = (
    effect: EffectCallback,
    deps: Array<unknown>
) => void;
