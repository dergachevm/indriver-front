import {
    TServerVacancy,
    TServerVacancyExpectations,
    TServerVacancyStack,
    TServerVacancyTag,
    TServerVacancyTasks,
    TServerVacancyTeamDescription,
    TServerVacancyTerms,
} from "@services/Api";
import {
    TVacancy,
    TVacancyExpectations,
    TVacancyStack,
    TVacancyTag,
    TVacancyTasks,
    TVacancyTeamDescription,
    TVacancyTerms,
} from "@services/Redux/slices";
import { getRandomId } from "@utils/shared";

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

export const mapTasks = (tasks: TServerVacancyTasks): TVacancyTasks => {
    const { items, label } = tasks;

    return {
        items: items.map((itemLabel) => {
            return {
                id: getRandomId(),
                label: itemLabel,
            };
        }),
        label,
    };
};

export const mapExpectations = (
    tasks: TServerVacancyExpectations
): TVacancyExpectations => {
    const { items, label } = tasks;

    return {
        items: items.map((itemLabel) => {
            return {
                id: getRandomId(),
                label: itemLabel,
            };
        }),
        label,
    };
};

export const mapTerms = (tasks: TServerVacancyTerms): TVacancyTerms => {
    const { items, label } = tasks;

    return {
        items: items.map((itemLabel) => {
            return {
                id: getRandomId(),
                label: itemLabel,
            };
        }),
        label,
    };
};

export const mapTeamDescription = (
    tasks: TServerVacancyTeamDescription
): TVacancyTeamDescription => {
    const { desc, label } = tasks;

    return {
        desc,
        label,
    };
};

export const mapStack = (tasks: TServerVacancyStack): TVacancyStack => {
    const { items, label, desc } = tasks;

    return {
        desc: items,
        items: desc.map((itemLabel) => {
            return {
                id: getRandomId(),
                label: itemLabel,
            };
        }),
        label,
    };
};

export const mapVacancy = (vacancy: TServerVacancy): TVacancy => {
    const {
        id,
        label,
        description,
        tags,
        tasks,
        expectations,
        terms,
        teamDescription,
        stack,
        interviewProcessLink,
    } = vacancy;

    return {
        description,
        expectations: mapExpectations(expectations),
        id,
        interviewProcessLink,
        label,
        stack: mapStack(stack),
        tags: mapTags(tags),
        tasks: mapTasks(tasks),
        teamDescription: mapTeamDescription(teamDescription),
        terms: mapTerms(terms),
    };
};
