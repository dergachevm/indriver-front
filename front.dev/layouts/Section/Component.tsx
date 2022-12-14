import { memo } from "react";
import classNames from "classnames";

import If from "@components/If";
import { is } from "@utils/shared";
import Image from "@components/Image";

import { TSectionComponent } from "./types";
import styles from "./styles.module.scss";

const Section: TSectionComponent = ({
    wrapClassName,
    children,
    className,
    contentClassName,
    bgImage,
    wrapBgImage,
    contentBgImage,
    elRef,
    style,
}) => {
    const wrapClasses = classNames(styles.sectionWrap, wrapClassName);
    const contentClasses = classNames(styles.sectionContent, contentClassName);
    const classes = classNames(styles.section, className);

    return (
        <div className={classes} ref={elRef} style={style}>
            <If condition={!is(undefined, bgImage)}>
                <Image
                    alt={"background image"}
                    className={styles.bgImage}
                    src={bgImage}
                />
            </If>
            <div className={wrapClasses}>
                <If condition={!is(undefined, wrapBgImage)}>
                    <Image
                        alt={"wrap background image"}
                        className={styles.bgImage}
                        src={wrapBgImage}
                    />
                </If>
                <div className={contentClasses}>
                    <If condition={!is(undefined, contentBgImage)}>
                        <Image
                            alt={"content background image"}
                            className={styles.bgImage}
                            src={contentBgImage}
                        />
                    </If>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default memo(Section);
