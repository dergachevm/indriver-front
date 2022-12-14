import { useLayoutEffect } from "react";

import { TUseOnResize } from "./types";

const useOnResize: TUseOnResize = (handler) => {
    useLayoutEffect(() => {
        window.addEventListener("resize", handler);

        return () => {
            window.removeEventListener("resize", handler);
        };
    }, [handler]);
};

export default useOnResize;
