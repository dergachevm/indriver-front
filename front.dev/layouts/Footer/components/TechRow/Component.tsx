import { memo, useCallback, useMemo } from "react";

import { TTechRowComponent } from "./types";
import styles from "./styles.module.scss";

import TechLink, { TTechLinkData } from "../TechLink";

const TechRow: TTechRowComponent = ({ data }) => {
    const { linkList } = data;

    const mapLink = useCallback((link: TTechLinkData) => {
        const { id } = link;

        return <TechLink data={link} key={id} />;
    }, []);

    const linkElList = useMemo(() => {
        return linkList.map(mapLink);
    }, [linkList, mapLink]);

    return <div className={styles.techRow}>{linkElList}</div>;
};

export default memo(TechRow);
