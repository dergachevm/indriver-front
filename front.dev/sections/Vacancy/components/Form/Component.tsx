import { FormEvent, memo, useCallback, useEffect, useState } from "react";
import classNames from "classnames";

import useModal from "@hooks/useModal";
import useSubmitVacancyForm from "@hooks/useSubmitVacancyForm";
import { DEFAULT_EXT, DEFAULT_MAX_FILE_SIZE } from "@dev/constants";
import { validateFormFields } from "@utils/validate";
import { eq } from "@utils/shared";

import { TField, TFormComponent, TFormDataRecord } from "./types";
import styles from "./styles.module.scss";
import { initFormData, initErrRecord, initCheckValidateRecord } from "./utils";

import Input from "../Input";
import SubmitBtn from "../SubmitBtn";
import Upload from "../Upload";

const Form: TFormComponent = ({ id }) => {
    const [formData, setFormData] = useState(initFormData());
    const [checkValidate, setCheckValidate] = useState(
        initCheckValidateRecord()
    );
    const [err, setErr] = useState(initErrRecord());
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const { openModal } = useModal("form-success", null);

    const { submitted, submitForm, clearSubmitted } = useSubmitVacancyForm({
        id,
        ...formData,
    });

    const setFormDataField = useCallback(
        <T extends TField>(field: T) => {
            return (value: TFormDataRecord[TField]): void => {
                setFormData((last) => {
                    if (last[field] === value) {
                        return last;
                    }

                    return {
                        ...last,
                        [field]: value,
                    };
                });
                setCheckValidate((last) => {
                    return {
                        ...last,
                        [field]: true,
                    };
                });
                clearSubmitted();
            };
        },
        [clearSubmitted]
    );

    const setFieldErr = useCallback((field: TField) => {
        return (value: boolean): void => {
            setErr((last) => {
                if (last[field] === value) {
                    return last;
                }

                return {
                    ...last,
                    [field]: value,
                };
            });
        };
    }, []);

    const handleSubmitForm = useCallback(
        (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
        },
        []
    );

    useEffect(() => {
        if (!wasSubmitted) {
            return;
        }

        const errRecord = validateFormFields(
            formData,
            DEFAULT_MAX_FILE_SIZE,
            DEFAULT_EXT,
            checkValidate
        );

        setErr(errRecord);
    }, [formData, checkValidate, wasSubmitted]);

    const handleSubmit = useCallback(async () => {
        const errRecord = validateFormFields(
            formData,
            DEFAULT_MAX_FILE_SIZE,
            DEFAULT_EXT
        );

        const errValues = Array.from(Object.values(errRecord));
        if (
            Array.from(Object.values(errRecord)).includes(true) ||
            errValues.some((val) => {
                return eq(typeof val, "string");
            })
        ) {
            setErr(errRecord);

            setWasSubmitted(true);
        } else {
            const res = await submitForm();

            if (res) {
                openModal();
            }

            setFormData(initFormData());

            setWasSubmitted(false);
        }
    }, [submitForm, formData, openModal, wasSubmitted]);

    const btnClasses = classNames(styles.submitBtn);

    return (
        <form className={styles.form} onSubmit={handleSubmitForm}>
            <div className={styles.text}>
                {"Leave your contacts and we will contact you!"}
            </div>
            <div className={styles.inputList}>
                <Input
                    error={err.name}
                    placeholder={"Name"}
                    required={true}
                    type={"text"}
                    value={formData.name}
                    onChange={setFormDataField("name")}
                    onError={setFieldErr("name")}
                />

                <Input
                    error={err.phone}
                    placeholder={"Phone"}
                    required={true}
                    type={"tel"}
                    value={formData.phone}
                    onChange={setFormDataField("phone")}
                    onError={setFieldErr("phone")}
                />

                <Input
                    error={err.email}
                    placeholder={"Email"}
                    required={true}
                    type={"email"}
                    value={formData.email}
                    onChange={setFormDataField("email")}
                    onError={setFieldErr("email")}
                />

                <Upload
                    error={err.file}
                    ext={DEFAULT_EXT}
                    fileName={formData.file?.name}
                    labelText={"Attach CV or another file"}
                    maxSize={DEFAULT_MAX_FILE_SIZE}
                    onChange={setFormDataField("file")}
                    onError={setFieldErr("file")}
                />
            </div>

            <SubmitBtn
                className={btnClasses}
                label={"Send"}
                submitted={submitted}
                onClick={handleSubmit}
            />
        </form>
    );
};

export default memo(Form);
