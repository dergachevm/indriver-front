import { CSSProperties, memo, useCallback, useRef } from "react";
import classNames from "classnames";

import Section from "@layouts/Section";
import { is, padStartZeros } from "@utils/shared";
import { setStyles } from "@utils/css";
import Icon from "@components/Icon";
import useOnScroll from "@hooks/useOnScroll";

import { TFrameComponent } from "./types";
import styles from "./styles.module.scss";

const Frame: TFrameComponent = ({
    scrollStart,
    scrollEnd,
    number,
    children,
    className,
    scrollByNumber = 400,
}) => {
    const elRef = useRef<HTMLDivElement | null>(null);
    const footerTextRef = useRef<HTMLDivElement | null>(null);
    const needHandleRef = useRef<boolean>(false);

    const handleScroll = useCallback(() => {
        const { current } = elRef;

        if (is(null, current)) {
            return;
        }
        const scroll = window.scrollY;

        let stylesProps: CSSProperties;
        if (scroll >= scrollStart && scroll < scrollEnd) {
            stylesProps = {
                opacity: "1",
                pointerEvents: "all",
            };

            needHandleRef.current = true;
        } else {
            stylesProps = {
                opacity: "0",
                pointerEvents: "none",
            };

            needHandleRef.current = false;
        }

        setStyles(current, stylesProps);
    }, [scrollStart, scrollEnd]);

    const handleScrollByNumber = useCallback(() => {
        if (!needHandleRef.current) {
            return;
        }

        const { current } = footerTextRef;

        if (is(null, current)) {
            return;
        }

        const scroll = window.scrollY;

        const numberScrollStart = scrollStart + scrollByNumber;
        const numberScrollEnd = scrollEnd - scrollByNumber;

        let transform = "translateY(100%)";
        if (scroll <= numberScrollStart) {
            const coef = (scroll - scrollStart) / scrollByNumber;
            transform = `translateY(${(1 - coef) * 100}%)`;
        } else if (scroll > numberScrollEnd) {
            const coef = (scroll - numberScrollEnd) / scrollByNumber;
            transform = `translateY(-${coef * 100}%)`;
        } else {
            transform = "translateY(0%)";
        }

        const stylesProps = {
            transform,
        };
        setStyles(current, stylesProps);
    }, [scrollByNumber, scrollEnd, scrollStart]);

    useOnScroll(handleScroll, true);
    useOnScroll(handleScrollByNumber, true);

    const classes = classNames(styles.frame, className);
    return (
        <Section
            className={classes}
            contentClassName={styles.frameContent}
            elRef={elRef}
            wrapClassName={styles.frameContentWrap}>
            <div className={styles.content}>
                {children}
                <div className={styles.footer}>
                    <Icon height={50} name={"logo-thin-white"} width={50} />
                    <div className={styles.textWrap}>
                        <div ref={footerTextRef}>{padStartZeros(number)}</div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default memo(Frame);
