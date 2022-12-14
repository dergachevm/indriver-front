import { ChangeEvent, memo, useCallback, useMemo, useState } from "react";
import classNames from "classnames";

import Icon from "@components/Icon";
import { eq, getFirstArrEl, is } from "@utils/shared";
import { validateFile } from "@utils/validate";

import { TUploadComponent } from "./types";
import styles from "./styles.module.scss";
import { mapExt } from "./utils";

const EMPTY_LEN = 0;
const MAX_TEXT_LEN = 25;
const TEXT_ZERO_INDEX = 0;

const Upload: TUploadComponent = ({
    labelText,
    onChange,
    fileName,
    ext,
    maxSize,
    onError,
    error,
}) => {
    const [hasValue, setHasValue] = useState(false);

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const { files } = event.target;

            let file: File | null;
            if (files === null || files.length === EMPTY_LEN) {
                file = null;
            } else {
                file = getFirstArrEl(Array.from(files));
            }

            setHasValue(!is(null, file));

            if (is(undefined, onChange)) {
                return;
            }

            onChange(file);

            if (is(undefined, onError)) {
                return;
            }

            onError(validateFile(file, ext, maxSize));
        },
        [onChange, ext, maxSize, onError]
    );

    const extensionsString = useMemo(() => {
        const extensionsWithDot = ext.map(mapExt);

        return extensionsWithDot.join(", ");
    }, [ext]);

    const hasError = eq(typeof error, "string") || Boolean(error);

    const wrapClasses = classNames(
        styles.inputWrap,
        hasError && styles.error,
        hasValue && styles.hasValue
    );
    const labelClasses = classNames(styles.label, hasError && styles.error);
    const errMsgClasses = classNames(styles.alertMsg, !hasError && styles.hide);

    const text = fileName || labelText;
    const textRes =
        text.length > MAX_TEXT_LEN
            ? `${text.substring(TEXT_ZERO_INDEX, MAX_TEXT_LEN)}...`
            : text;

    return (
        <div className={wrapClasses}>
            <label className={labelClasses}>
                <input
                    accept={extensionsString}
                    className={styles.input}
                    multiple={false}
                    size={maxSize}
                    type={"file"}
                    onChange={handleChange}
                />
                <div className={styles.textWrap}>{textRes}</div>

                <Icon height={20} name={"clip"} width={20} />
            </label>

            <div className={errMsgClasses}>
                {eq(typeof error, "string")
                    ? error
                    : `Max size ${maxSize} mb (ext ${extensionsString})`}
            </div>
        </div>
    );
};

export default memo(Upload);
