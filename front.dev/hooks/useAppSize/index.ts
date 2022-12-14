import { useCallback, useState } from "react";

import useOnResize from "@hooks/useOnResize";
import { getSize } from "@utils/shared";

import { TAppSize, TUseAppSize } from "./types";

const useAppSize: TUseAppSize = () => {
    const [size, setSize] = useState<TAppSize>(getSize());
    const [width, setWidth] = useState<number>(window.innerWidth);

    const handleResize = useCallback(() => {
        setSize(getSize());

        setWidth(window.innerWidth);
    }, []);

    useOnResize(handleResize);

    return { size, width };
};

export default useAppSize;
