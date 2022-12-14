import { memo, useCallback, useMemo } from "react";

import { TTagData } from "@services/Redux/slices";
import { is } from "@utils/shared";
import { sortStringsByField } from "@utils/sort";

import { TGroupTagListComponent } from "./types";
import styles from "./styles.module.scss";

import { findSelected } from "./utils";

import GroupTag from "../GroupTag";

const GroupTagList: TGroupTagListComponent = ({
    list,
    selected,
    group,
    onSelectCluster,
}) => {
    const mapTab = useCallback(
        (data: TTagData, index: number) => {
            const { id, title, name } = data;

            const hasAsSelected = is(undefined, selected)
                ? undefined
                : selected.find(findSelected(name));

            return (
                <GroupTag
                    active={!is(undefined, hasAsSelected)}
                    animDuraction={true}
                    index={index}
                    key={id}
                    label={title}
                    onClick={() => {
                        onSelectCluster(group, data);
                    }}
                />
            );
        },
        [selected, group, onSelectCluster]
    );

    const elList = useMemo(() => {
        return [...list].sort(sortStringsByField("title")).map(mapTab);
    }, [list, mapTab]);

    return <div className={styles.tabList}>{elList}</div>;
};

export default memo(GroupTagList);
