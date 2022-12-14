import { memo } from "react";
import classNames from "classnames";

import Icon from "@components/Icon";
import artboardImg from "@assets/img/artboard.png";
import Image from "@components/Image";

import { TSlideComponent } from "./types";
import styles from "./styles.module.scss";

const Slide: TSlideComponent = ({ className, number, text, elRef }) => {
    const classes = classNames(styles.wrap, className);

    return (
        <div className={classes} ref={elRef}>
            <div className={styles.title}>
                <Icon height={48} name={`roman-numeral-${number}`} width={48} />
                <Image className={styles.img} src={artboardImg} />
            </div>

            <div className={styles.text}>{text}</div>
        </div>
    );
};

export default memo(Slide);
