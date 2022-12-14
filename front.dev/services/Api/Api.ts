import { RequestStatus } from "@dev/enums";
import { actions, store } from "@services/Redux";
import { objToFormData } from "@utils/shared";

import AJAX from "./ajax";
import { StatusCode, Url } from "./enums";
import {
    TGetVacancy,
    TGetVacancyList,
    TGetVacancyListWithFilters,
    TServerVacancyListResponse,
    TServerVacancyResponse,
    TSubmitVacancy,
    TSubmitVacancyResponse,
} from "./types";
import { convertToJson, getFullUrl } from "./utils";

const {
    app: { setRequestStatus },
} = actions;

const MIN_VACANCY_API_RESULT_LEN = 0;
const MIN_VACANCY_API_RESULT_INDEX = 0;

class Api {
    private constructor() {}

    public static GetVacancyList: TGetVacancyList = async () => {
        Api.setStatus(RequestStatus.Loading);

        const url = getFullUrl(Url.GetVacancies);

        return AJAX.get(url)
            .then(convertToJson)
            .then((res: TServerVacancyListResponse) => {
                const { count, result, status, tags, total } = res;

                if (status === StatusCode.Ok) {
                    Api.setStatus(RequestStatus.Success);

                    return {
                        count,
                        result,
                        tags,
                        total,
                    };
                }

                Api.setStatus(RequestStatus.Reject);

                return {
                    count: 0,
                    result: [],
                    tags: {},
                    total: 0,
                };
            })
            .finally(() => {
                Api.setStatus(RequestStatus.Pending);
            });
    };

    public static GetVacancyListWithFilters: TGetVacancyListWithFilters = async (
        payload
    ) => {
        Api.setStatus(RequestStatus.Loading);

        const url = getFullUrl(Url.GetVacancies);

        return AJAX.post(url, payload)
            .then(convertToJson)
            .then((res: TServerVacancyListResponse) => {
                const { count, result, status, tags, total } = res;

                if (status === StatusCode.Ok) {
                    Api.setStatus(RequestStatus.Success);

                    return {
                        count,
                        result,
                        tags,
                        total,
                    };
                }

                Api.setStatus(RequestStatus.Reject);

                return {
                    count: 0,
                    result: [],
                    tags: {},
                    total: 0,
                };
            })
            .finally(() => {
                Api.setStatus(RequestStatus.Pending);
            });
    };

    public static GetVacancy: TGetVacancy = async (id: number) => {
        Api.setStatus(RequestStatus.Loading);

        const url = getFullUrl(Url.GetVacancy);
        const fullUrl = `${url}${id}`;

        return AJAX.get(fullUrl)
            .then(convertToJson)
            .then((res: TServerVacancyResponse) => {
                const { result, status } = res;

                if (
                    status === StatusCode.Ok &&
                    result.length > MIN_VACANCY_API_RESULT_LEN
                ) {
                    Api.setStatus(RequestStatus.Success);

                    return result[MIN_VACANCY_API_RESULT_INDEX];
                }

                Api.setStatus(RequestStatus.Reject);

                return null;
            })
            .finally(() => {
                Api.setStatus(RequestStatus.Pending);
            });
    };

    public static SubmitVacancyResponce: TSubmitVacancy = async (data) => {
        Api.setStatus(RequestStatus.Loading);

        const url = getFullUrl(Url.SubmitVacancyResponse);

        const formData = objToFormData(data);

        return AJAX.postFormData(url, formData)
            .then(convertToJson)
            .then((res: TSubmitVacancyResponse) => {
                const { status } = res;

                if (status === StatusCode.Ok) {
                    Api.setStatus(RequestStatus.Success);

                    return true;
                }

                Api.setStatus(RequestStatus.Reject);

                return false;
            })
            .finally(() => {
                Api.setStatus(RequestStatus.Pending);
            });
    };

    private static readonly setStatus = (requestStatus: RequestStatus) => {
        store.dispatch(setRequestStatus({ requestStatus }));
    };
}

export default Api;
