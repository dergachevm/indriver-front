import { TAnyRecord } from "@dev/types";
import { is, isEmptyStr } from "@utils/shared";

class AJAX {
    private constructor() {}

    public static get = async (url: string) => {
        const result = await fetch(url, {
            method: "GET",
        });

        return result;
    };

    public static post = async (url: string, payload?: TAnyRecord) => {
        const body = is(undefined, payload) ? "" : JSON.stringify(payload);
        const bodyObj = isEmptyStr(body) ? {} : { body: body };

        const result = await fetch(url, {
            headers: {
                "content-Type": "application/json",
            },
            method: "POST",
            ...bodyObj,
        });

        return result;
    };

    public static postFormData = async (url: string, payload: FormData) => {
        const result = await fetch(url, {
            body: payload,
            method: "POST",
        });

        return result;
    };
}

export default AJAX;
