import { memo } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { TNavigationTabComponent } from "./types";
import styles from "./styles.module.scss";
import { colorClassRecord } from "./constants";
import useSetSelectedFilters from "@hooks/useSetSelectedFilters";

const NavigationTab: TNavigationTabComponent = ({
    url,
    label,
    color = "dark",
}) => {
    const { clearSelectedFilters } = useSetSelectedFilters();

    const classes = classNames(styles.navigationTab, colorClassRecord[color]);

    return (
        <Link className={classes} to={url} onClick={clearSelectedFilters}>
            {label}
        </Link>
    );
};

export default memo(NavigationTab);
