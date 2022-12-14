import { memo, useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import Icon from "@components/Icon";
import { Page } from "@router/enums";
import { pagePathRecord } from "@router/constants";
import Section from "@layouts/Section";
import useOnClickOutside from "@hooks/useClickOutside";
import useOnScroll from "@hooks/useOnScroll";

import { TStaticMobileHeaderComponent } from "./types";
import styles from "./styles.module.scss";

import Burger from "../Burger";
import MobileMenu from "../MobileMenu";

const StaticMobileHeader: TStaticMobileHeaderComponent = ({
    tabs,
    className,
}) => {
    const menuRef = useRef<HTMLDivElement | null>(null);
    const headerRef = useRef<HTMLDivElement | null>(null);

    const [isOpen, setIsOpen] = useState(false);

    const contentClasses = classNames(styles.content, isOpen && styles.opened);
    const logoClasses = classNames(styles.logoIcon, isOpen && styles.opened);

    const handleBurgerClick = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (isOpen) {
            setIsOpen(false);
        }
    }, [isOpen]);

    useOnClickOutside([menuRef, headerRef], handleClose);
    useOnScroll(handleClose);

    const classes = classNames(styles.wrapper, className);

    return (
        <Section
            className={classes}
            contentClassName={contentClasses}
            elRef={headerRef}>
            <div className={styles.contentWrap}>
                <Link className={styles.logo} to={pagePathRecord[Page.Main]}>
                    <Icon
                        className={logoClasses}
                        height={34}
                        name={"logo-mobile"}
                        width={160}
                    />
                </Link>

                <Burger isOpen={isOpen} onClick={handleBurgerClick} />
            </div>
            <MobileMenu
                className={styles.menu}
                elRef={menuRef}
                isOpen={isOpen}
                tabs={tabs}
                onChangeVisibility={setIsOpen}
            />
        </Section>
    );
};

export default memo(StaticMobileHeader);
