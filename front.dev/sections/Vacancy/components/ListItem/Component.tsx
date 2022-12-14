import { memo } from "react";
import classNames from "classnames";

import Icon from "@components/Icon";

import { TListItemComponent } from "./types";
import styles from "./styles.module.scss";

const ListItem: TListItemComponent = ({
    marker = "marker-circle",
    children,
}) => {
    const itemClasses = classNames(styles.listItem);

    return (
        <div className={itemClasses}>
            <Icon
                className={styles.iconWrap}
                height={16}
                name={marker}
                width={16}
            />
            {children}
        </div>
    );
};

export default memo(ListItem);
