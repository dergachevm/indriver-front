import { memo } from "react";

import If from "@components/If";
import useAppSize from "@hooks/useAppSize";
import scss from "@scss/modules/index.module.scss";

import { TSliderComponent } from "./types";
import styles from "./styles.module.scss";

import SliderMobile from "../SliderMobile";
import SliderDesktop from "../SliderDesktop";

const Slider: TSliderComponent = ({ data, forModal = false }) => {
    const { width } = useAppSize();

    return (
        <div className={styles.slider}>
            <If
                condition={width < Number.parseInt(scss.max_md)}
                els={<SliderDesktop data={data} forModal={forModal} />}>
                <SliderMobile data={data} forModal={forModal} />
            </If>
        </div>
    );
};

export default memo(Slider);
