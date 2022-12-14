import { memo, MouseEvent, useCallback, useRef } from "react";
import classNames from "classnames";

import Icon from "@components/Icon";
import { eq, is, scrollToElement } from "@utils/shared";
import useAppSize from "@hooks/useAppSize";
import scss from "@scss/modules/index.module.scss";
import { ANIM_DURACTION } from "@dev/constants";

import { TTabComponent } from "./types";
import styles from "./styles.module.scss";

const MOBILE_TOP_SCROLL_OFFSET = Number.parseInt(scss.mobileTopPadding) || 0;

const Tab: TTabComponent = ({
    active,
    className,
    index,
    label,
    name,
    onClick,
    forModal,
    scrollToEl,
}) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const { size: appSize } = useAppSize();

    const isMobile = eq(appSize, "mobile");

    const classes = classNames(styles.wrap, className, {
        [styles.active]: active,
        [styles.forModal]: forModal,
    });

    const handleScrollToEl = useCallback(() => {
        const { current } = ref;

        if (is(null, current) || !isMobile || active) {
            return;
        }

        setTimeout(() => {
            scrollToElement(current, MOBILE_TOP_SCROLL_OFFSET, "smooth");
        }, ANIM_DURACTION);
    }, [active, ref, isMobile]);

    const handleClick = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            if (active) {
                return;
            }

            if (scrollToEl) {
                handleScrollToEl();
            }

            if (!is(undefined, onClick)) {
                onClick(event);
            }
        },
        [scrollToEl, onClick, handleScrollToEl, active]
    );

    const numeralIconClasses = classNames(
        styles.icon,
        styles.numeral,
        !active && styles.show
    );
    const arrowIconClasses = classNames(styles.icon, styles.arrow);

    return (
        <div className={classes} ref={ref} onClick={handleClick}>
            <div className={styles.iconWrap}>
                <Icon
                    className={arrowIconClasses}
                    height={44}
                    name={"arrow-right-big"}
                    width={208}
                />
                <Icon
                    className={numeralIconClasses}
                    height={48}
                    name={`roman-numeral-${index + 1}`}
                    width={48}
                />
            </div>

            <div className={styles.text}>
                <div className={styles.name}>{name}</div>
                <div className={styles.label}>{label}</div>
            </div>
        </div>
    );
};

export default memo(Tab);
