import { useCallback, useEffect } from "react";

import { is } from "@utils/shared";

import { TUseOnClickOutside } from "./types";

const useOnClickOutside: TUseOnClickOutside = (
    refs,
    handler,
    events = ["mousedown", "touchstart"]
) => {
    const checkRef = useCallback(
        (event: Event, ref: React.MutableRefObject<HTMLElement | null>) => {
            const { current: refCurrent } = ref;
            const target = event.target as HTMLElement;

            return !(is(null, refCurrent) || refCurrent.contains(target));
        },
        []
    );

    const handleClickOutside = useCallback(
        (event: Event) => {
            let isClickOutside = false;

            if (Array.isArray(refs)) {
                isClickOutside = refs.every((ref) => {
                    return checkRef(event, ref);
                });
            } else {
                isClickOutside = checkRef(event, refs);
            }

            if (isClickOutside) {
                handler();
            }
        },
        [handler, refs, checkRef]
    );

    useEffect(() => {
        events.forEach((ev) => {
            document.addEventListener(ev, handleClickOutside);
        });

        return () => {
            events.forEach((ev) => {
                document.removeEventListener(ev, handleClickOutside);
            });
        };
    }, [refs, handler, handleClickOutside, events]);
};

export default useOnClickOutside;
