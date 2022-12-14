import {
    TServerShortVacancy,
    TServerStack,
    TServerTagData,
    TServerTagResult,
    TServerVacancyList,
    TServerVacancyTag,
    TServerVacansiesTagDataRecord,
} from "@services/Api";
import {
    TShortVacancy,
    TShortVacancyList,
    TStack,
    TTagData,
    TVacancyTag,
    TVacansiesTagDataRecord,
} from "@services/Redux/slices";
import { getRandomId, is, isEmptyStr } from "@utils/shared";

export const mapTags = (tags: Array<TServerVacancyTag>): Array<TVacancyTag> => {
    return tags.map((tag) => {
        const { title, name } = tag;

        return {
            id: getRandomId(),
            label: title,
            name,
        };
    });
};

export const mapShortVacancy = (
    vacancy: TServerShortVacancy
): TShortVacancy => {
    const { id, label, teamDescription, tags } = vacancy;

    return {
        description: teamDescription,
        id,
        label,
        tags: mapTags(tags),
    };
};

export const mapServerStack = (stack: TServerStack): TStack => {
    const { title, count } = stack;
    return {
        count,
        id: getRandomId(),
        label: title,
        name: title,
    };
};

export const filterServerStack = (stack: TServerStack): boolean => {
    const { title } = stack;

    return !isEmptyStr(title);
};

export const mapVacanciesTag = (tagData: TServerTagResult): TTagData => {
    const { stack, category, name, title } = tagData;

    let stackRes = {};
    if (!is(undefined, stack)) {
        stackRes = {
            stack: stack.filter(filterServerStack).map(mapServerStack),
        };
    }

    return {
        category,
        id: getRandomId(),
        name,
        title,
        ...stackRes,
    };
};

export const mapServerVacanciesTagList = (
    entry: [string, TServerTagData]
): [string, Array<TTagData>] => {
    const [key, value] = entry;

    return [key, value.result.map(mapVacanciesTag)];
};

export const mapTagList = (list: TServerVacancyList): TShortVacancyList => {
    return list.map(mapShortVacancy);
};

export const mapVacansiesTagDataRecord = (
    record: TServerVacansiesTagDataRecord
): TVacansiesTagDataRecord => {
    return Object.fromEntries(
        Object.entries(record).map(mapServerVacanciesTagList)
    );
};

export const mapVacancyList = (list: TServerVacancyList): TShortVacancyList => {
    return list.map(mapShortVacancy);
};
