import { memo, useCallback } from "react";
import { Link } from "react-router-dom";

import Icon from "@components/Icon";
import { scrollTop } from "@utils/shared";
import useSetSelectedFilters from "@hooks/useSetSelectedFilters";

import { TTechLinkComponent } from "./types";
import styles from "./styles.module.scss";

const TechLink: TTechLinkComponent = ({ data }) => {
    const { label, link, filters } = data;

    const { setSelectedFilters } = useSetSelectedFilters();

    const handleClick = useCallback(() => {
        setSelectedFilters(filters);
        scrollTop();
    }, [setSelectedFilters, filters]);

    return (
        <Link className={styles.tech} to={link} onClick={handleClick}>
            {label}
            <Icon
                className={styles.icon}
                height={24}
                name={"arrow-right"}
                width={20}
            />
        </Link>
    );
};

export default memo(TechLink);
