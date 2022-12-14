export type TServerVacancy = {
    //название вакансии
    label: string;
    //описание вакансии
    description: string;
    // теги вакансии
    tag: Array<{
        label: string;
        // какоето уникальное и постоянное имя для тега (нужно что бы определить есть ли тег Приглисить друга, что бы отрисовывать иконку)
        name: string;
    }>;
    //задачи для вакансии
    tasks: {
        label: string;
        items: Array<string>;
    };
    //ожидания для вакансии
    expectations: {
        label: string;
        items: Array<string>;
    };
    //условия для вакансии
    terms: {
        label: string;
        items: Array<string>;
    };
    // описание команды
    teamDescription: {
        label: string;
        desc: string;
    };
    // стек
    stack: {
        label: string;
        desc: string;
        items: Array<string>;
    };
    //ссылка на прогресс интервью
    interviewProcessLink: string;
    //ссылка для отправки формы по конкретной вакансии
    applyForJobLink: string;
};
