import { MutableRefObject } from "react";

export type TUseOnClickOutside = (
    ref:
        | MutableRefObject<HTMLElement | null>
        | Array<MutableRefObject<HTMLElement | null>>,
    handler: () => void,
    events?: Array<keyof DocumentEventMap>
) => void;
