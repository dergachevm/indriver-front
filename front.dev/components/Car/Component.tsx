import { memo, useCallback, useMemo } from "react";
import classNames from "classnames";

import carUrl_1 from "@assets/img/car-fr-1.png";
import carUrl_2 from "@assets/img/car-fr-2.png";
import carUrl_3 from "@assets/img/car-fr-3.png";
import carUrl_4 from "@assets/img/car-fr-4.png";
import carUrl_5 from "@assets/img/car-fr-5.png";
import carUrl_6 from "@assets/img/car-fr-6.png";
import carUrl_7 from "@assets/img/car-fr-7.png";
import carUrl_8 from "@assets/img/car-fr-8.png";
import carUrl_9 from "@assets/img/car-fr-9.png";
import Image from "@components/Image";

import { TCarComponent } from "./types";
import styles from "./styles.module.scss";

const IMG_LIST = [
    carUrl_1,
    carUrl_2,
    carUrl_3,
    carUrl_4,
    carUrl_5,
    carUrl_6,
    carUrl_7,
    carUrl_8,
    carUrl_9,
];

const Car: TCarComponent = ({ className }) => {
    const mapImgUrl = useCallback((url: string) => {
        return <Image className={styles.car} key={url} src={url} />;
    }, []);

    const elList = useMemo(() => {
        return IMG_LIST.map(mapImgUrl);
    }, [mapImgUrl]);

    const classes = classNames(styles.carWrap, className);

    return <div className={classes}>{elList}</div>;
};

export default memo(Car);
