import { TBtnColorClasses, TBtnStyleClasses } from "./types";
import styles from "./styles.module.scss";

export const btnColorClasses: TBtnColorClasses = {
    bezh: styles.bezh,
    dark: styles.dark,
    green: styles.green,
    greenLight: styles.greenLight,
    light: styles.light,
    transparent: styles.transparent,
    transparentLight: styles.transparentLight,
    white: styles.white,
};

export const btnStyleClasses: TBtnStyleClasses = {
    filled: styles.filled,
    outlined: styles.outlined,
};
