import { memo, useCallback, useMemo, useRef } from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";

import styles from "./styles.module.scss";
import Icon from "@components/Icon";
import If from "@components/If";
import { ANIM_DURACTION } from "@dev/constants";
import { is } from "@utils/shared";
import Image from "@components/Image";

import { TLang, TSlideComponent } from "./types";
import { slideAnimClasses } from "./constants";

const ZERO_LABEL_INDEX = 0;

const Slide: TSlideComponent = ({ langList, active, className }) => {
    const slideRef = useRef<HTMLDivElement | null>(null);

    const mapLangLabel = useCallback((data: TLang, index: number) => {
        const { label, id } = data;

        return (
            <div className={styles.label} key={id}>
                <If condition={index > ZERO_LABEL_INDEX}>
                    <Icon height={24} name={"plus"} width={24} />
                </If>

                {label}
            </div>
        );
    }, []);

    const mapImg = useCallback((data: TLang) => {
        const { img, label, id } = data;

        if (is(null, img)) {
            return null;
        }

        return <Image alt={label} key={id} src={img} />;
    }, []);

    const langLabelElList = useMemo(() => {
        return langList.map(mapLangLabel);
    }, [langList, mapLangLabel]);

    const langImgElList = useMemo(() => {
        return langList.map(mapImg);
    }, [langList, mapImg]);

    const classes = classNames(styles.slide, className);

    return (
        <CSSTransition
            classNames={slideAnimClasses}
            in={active}
            nodeRef={slideRef}
            timeout={ANIM_DURACTION}
            unmountOnExit={true}>
            <div className={classes} ref={slideRef}>
                <div className={styles.labelList}>{langLabelElList}</div>
                <div className={styles.imgList}>{langImgElList}</div>
            </div>
        </CSSTransition>
    );
};

export default memo(Slide);
