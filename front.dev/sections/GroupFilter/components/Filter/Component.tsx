import { memo, useLayoutEffect, useRef, useState } from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";

import Icon from "@components/Icon";
import If from "@components/If";
import { mainGroupName } from "@services/Redux/constants";
import { eq, isEmptyArr } from "@utils/shared";
import { ANIM_DURACTION } from "@dev/constants";
import MultilineText from "@components/MultilineText";
import useAppSize from "@hooks/useAppSize";

import { TFilterComponent } from "./types";
import styles from "./styles.module.scss";
import { arrowAnimClasses } from "./constants";

import GroupTagList from "../GroupTagList";

const Filter: TFilterComponent = ({
    active = false,
    name,
    onActive,
    main = false,
    tags,
    selected = [],
    onSelectCluster,
    onDeactive,
    hasSelectedCategory = false,
}) => {
    const { size: appSize } = useAppSize();

    const isDekstop = eq(appSize, "dekstop");

    const arrowRightRef = useRef<HTMLDivElement | null>(null);

    const [wasActivated, setWasActivated] = useState(false);

    const hasSelected = !isEmptyArr(selected);
    const isMainSelected = eq(mainGroupName, name) && hasSelected;

    const headerClasses = classNames(
        styles.header,
        (hasSelected || (main && !hasSelectedCategory)) && styles.active,
        main && !isMainSelected && !hasSelectedCategory && styles.main
    );

    const wrapClasses = classNames(
        styles.filter,
        (main && !isMainSelected && !hasSelectedCategory) ||
            (active && styles.active)
    );

    useLayoutEffect(() => {
        if (isMainSelected && !wasActivated && hasSelectedCategory && !active) {
            setWasActivated(true);

            onActive();
        }
    }, [
        isMainSelected,
        onActive,
        wasActivated,
        hasSelectedCategory,
        hasSelected,
        active,
    ]);

    useLayoutEffect(() => {
        if (wasActivated && !hasSelected && !hasSelectedCategory) {
            setWasActivated(false);
            onDeactive();
        }
    }, [onDeactive, hasSelectedCategory, wasActivated, hasSelected]);

    return (
        <div className={wrapClasses}>
            <div
                className={headerClasses}
                onClick={
                    main && !isMainSelected && !hasSelectedCategory
                        ? undefined
                        : onActive
                }>
                <CSSTransition
                    classNames={arrowAnimClasses}
                    in={main && !isMainSelected && !hasSelectedCategory}
                    nodeRef={arrowRightRef}
                    timeout={ANIM_DURACTION}
                    unmountOnExit={true}>
                    <If
                        condition={isDekstop}
                        els={
                            <Icon
                                className={styles.arrowIcon}
                                elRef={arrowRightRef}
                                height={32}
                                name={"arrow-right-big-green-m"}
                                width={32}
                            />
                        }>
                        <Icon
                            className={styles.arrowIcon}
                            elRef={arrowRightRef}
                            height={44}
                            name={"arrow-right-big-green"}
                            width={100}
                        />
                    </If>
                </CSSTransition>

                <div className={styles.labelBox}>
                    <div className={styles.wrap}>
                        <div className={styles.label}>{name}</div>
                        <If
                            condition={
                                !main || isMainSelected || hasSelectedCategory
                            }>
                            <Icon
                                className={styles.plusIcon}
                                height={44}
                                name={active ? "minus" : "plus"}
                                width={44}
                            />
                        </If>
                        <If condition={hasSelected}>
                            <div className={styles.selectedRange}>
                                {`${selected.length}/${tags.length}`}
                            </div>
                        </If>
                    </div>
                    <If
                        condition={
                            eq(mainGroupName, name) && !hasSelectedCategory
                        }>
                        <div className={styles.desc}>
                            <MultilineText
                                text={
                                    "To see vacancies,<:0-9999:>choose a cluster thate<:0-1024:><:1336-9999:>you arу interested in"
                                }
                            />
                        </div>
                    </If>
                </div>
            </div>
            <If condition={active}>
                <GroupTagList
                    group={name}
                    list={tags}
                    selected={selected}
                    onSelectCluster={onSelectCluster}
                />
            </If>
        </div>
    );
};

export default memo(Filter);
