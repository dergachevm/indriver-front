import { useLayoutEffect } from "react";

import { TUseOnScroll } from "./types";

const useOnScroll: TUseOnScroll = (handler, init = false) => {
    useLayoutEffect(() => {
        if (init) {
            handler();
        }

        window.addEventListener("scroll", handler);

        return () => {
            window.removeEventListener("scroll", handler);
        };
    }, [handler, init]);
};

export default useOnScroll;
