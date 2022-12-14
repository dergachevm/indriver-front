import { useEffect, useRef } from "react";

import { TUseDidUpdate } from "./types";

const useDidUpdate: TUseDidUpdate = (effect, deps) => {
    const isMountRef = useRef(false);

    useEffect(() => {
        if (isMountRef.current) {
            effect();
        } else {
            isMountRef.current = true;
        }
    }, [effect, ...deps]);
};

export default useDidUpdate;
