import { ChangeEvent, memo, useCallback, useState } from "react";
import classNames from "classnames";

import { eq, is, isEmptyStr } from "@utils/shared";

import { TInputComponent } from "./types";
import styles from "./styles.module.scss";

const PHONE_REG = new RegExp("^\\+?[[1-9]+[0-9]*]*$");

const Input: TInputComponent = ({
    type,
    placeholder,
    value,
    onChange,
    onError,
    required,
    error,
}) => {
    const [wasInput, setWasInput] = useState(false);

    const handleInput = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const { target } = event;

            if (is(undefined, onChange)) {
                return;
            }

            const { value: targetValue } = target;

            if (eq("tel", type)) {
                if (
                    !PHONE_REG.exec(targetValue) &&
                    !eq("+", targetValue) &&
                    !isEmptyStr(targetValue)
                ) {
                    return;
                }
            }

            if (
                eq("tel", type) &&
                (targetValue.startsWith("+")
                    ? targetValue.length > 12
                    : targetValue.length > 11)
            ) {
                return;
            }

            if (targetValue.length > 30) {
                return;
            }

            onChange(targetValue);

            if (!is(undefined, onError) && wasInput) {
                onError(required ? isEmptyStr(targetValue) : false);
            }

            if (!wasInput) {
                setWasInput(true);
            }
        },
        [onChange, wasInput, required, onError, type]
    );

    const hasError = eq(typeof error, "string") || Boolean(error);

    const wrapClasses = classNames(
        styles.inputWrap,
        hasError && styles.error,
        !isEmptyStr(value) && styles.hasValue
    );
    const inputClasses = classNames(styles.input, hasError && styles.error);
    const errMsgClasses = classNames(styles.alertMsg, !hasError && styles.hide);

    return (
        <div className={wrapClasses}>
            <input
                className={inputClasses}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={handleInput}
            />

            <div className={errMsgClasses}>
                {eq(typeof error, "string") ? error : "Required"}
            </div>
        </div>
    );
};

export default memo(Input);
