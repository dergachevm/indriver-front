import { memo, useCallback, useRef, useState } from "react";
import classNames from "classnames";

import { TImageComponent } from "./types";
import styles from "./styles.module.scss";

const Image: TImageComponent = ({ className, noHide = false, ...props }) => {
    const imgRef = useRef<HTMLImageElement | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleLoad = useCallback(() => {
        setIsLoaded(true);
    }, []);

    const classes = classNames(
        styles.img,
        !isLoaded && !noHide && styles.hidden,
        className
    );

    return (
        <img {...props} className={classes} ref={imgRef} onLoad={handleLoad} />
    );
};

export default memo(Image);
