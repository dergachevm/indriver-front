import { memo } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";

import { ANIM_DURACTION } from "@dev/constants";
import LinkBtn from "@components/LinkBtn";
import { pagePathRecord } from "@router/constants";
import { Page } from "@router/enums";

import { TMobileMenuComponent } from "./types";
import styles from "./styles.module.scss";
import { menuAnimClasses } from "./constants";

import MobileNavigationList from "../MobileNavigationList";

const MobileMenu: TMobileMenuComponent = ({
    isOpen,
    tabs,
    className,
    elRef,
}) => {
    const classes = classNames(styles.panelWrapper, className);

    return (
        <CSSTransition
            classNames={menuAnimClasses}
            in={isOpen}
            nodeRef={elRef}
            timeout={ANIM_DURACTION}
            unmountOnExit={true}>
            <div className={classes} ref={elRef}>
                <nav className={styles.panel}>
                    <MobileNavigationList list={tabs} />
                </nav>
                <LinkBtn
                    className={styles.join}
                    color={"dark"}
                    href={pagePathRecord[Page.JobListing]}
                    label={"Join us"}
                    style={"outlined"}
                />
            </div>
        </CSSTransition>
    );
};

export default memo(MobileMenu);
