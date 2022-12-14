import { memo, useEffect, useLayoutEffect } from "react";
import classNames from "classnames";

import { scrollTop } from "@utils/shared";

import { TPageLayoutComponent } from "./types";
import styles from "./styles.module.scss";
import { bgColorClassRecord, bgBodyColorClassRecord } from "./constants";

const PageLayout: TPageLayoutComponent = ({
    title,
    children,
    bgColor = "light",
    behaviorScroll = true,
}) => {
    useLayoutEffect(() => {
        document.title = title;
    }, [title]);

    const classes = classNames(styles.main, bgColorClassRecord[bgColor]);

    useEffect(() => {
        scrollTop(behaviorScroll);
    }, [behaviorScroll]);

    useLayoutEffect(() => {
        document.body.classList.add(styles.body);
        document.body.classList.add(bgBodyColorClassRecord[bgColor]);

        return () => {
            document.body.classList.remove(styles.body);
            document.body.classList.remove(bgBodyColorClassRecord[bgColor]);
        };
    }, [bgColor]);

    return <main className={classes}>{children}</main>;
};

export default memo(PageLayout);
