import { memo, useCallback, useLayoutEffect, useRef, useState } from "react";
import classNames from "classnames";

import { is } from "@utils/shared";
import useOnScroll from "@hooks/useOnScroll";
import { navigationTabs } from "@layouts/constants";

import { THeaderComponent } from "./types";
import styles from "./styles.module.scss";
import { headerColorClassRecord } from "./constants";
import StaticHeader from "./StaticHeader";
import FixedHeader from "./FixedHeader";

const APP_INIT_SCROLL = 0;

const Header: THeaderComponent = ({ color = "green", withJoin = false }) => {
    const triggerRef = useRef<HTMLDivElement | null>(null);
    const [isFixed, setIsFixed] = useState(false);

    const classes = classNames(styles.header, headerColorClassRecord[color]);

    const handleFixHeader = useCallback(() => {
        const { current } = triggerRef;

        if (is(null, current)) {
            return;
        }

        const rect = current.getBoundingClientRect();

        setIsFixed(rect.top <= APP_INIT_SCROLL);
    }, [triggerRef]);

    useOnScroll(handleFixHeader);
    useLayoutEffect(handleFixHeader, [handleFixHeader]);

    return (
        <header className={classes}>
            <StaticHeader
                color={color}
                tabs={navigationTabs}
                withJoin={withJoin}
            />

            <FixedHeader show={isFixed} tabs={navigationTabs} />

            <div className={styles.trigger} ref={triggerRef} />
        </header>
    );
};

export default memo(Header);
