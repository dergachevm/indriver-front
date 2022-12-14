import { memo, useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import Icon from "@components/Icon";
import { Page } from "@router/enums";
import { pagePathRecord } from "@router/constants";
import Section from "@layouts/Section";
import { swapBoolean } from "@utils/shared";
import useOnClickOutside from "@hooks/useClickOutside";
import useOnScroll from "@hooks/useOnScroll";
import If from "@components/If";
import LinkBtn from "@components/LinkBtn";

import { TFixedMobileHeaderComponent } from "./types";
import styles from "./styles.module.scss";

import Burger from "../Burger";
import MobileMenu from "../MobileMenu";

const FixedMobileHeader: TFixedMobileHeaderComponent = ({
    tabs,
    className,
}) => {
    const menuRef = useRef<HTMLDivElement | null>(null);
    const headerRef = useRef<HTMLDivElement | null>(null);

    const [isOpen, setIsOpen] = useState(false);

    const contentClasses = classNames(styles.content, isOpen && styles.opened);

    const handleBurgerClick = useCallback(() => {
        setIsOpen(swapBoolean);
    }, []);

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);

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
                    <Icon height={40} name={"logo-thin-small"} width={40} />
                </Link>

                <If condition={!isOpen}>
                    <LinkBtn
                        className={styles.join}
                        color={"light"}
                        href={pagePathRecord[Page.JobListing]}
                        label={"Join us"}
                    />
                </If>
                <Burger
                    isOpen={isOpen}
                    thin={true}
                    withWrap={true}
                    onClick={handleBurgerClick}
                />
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

export default memo(FixedMobileHeader);
