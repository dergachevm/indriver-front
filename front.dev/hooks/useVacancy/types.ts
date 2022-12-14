import { TVacancy } from "@services/Redux/slices";

export type TUseGetVacancy = (
    id: number
) => {
    vacancy: TVacancy | null;
    updateVacancy: () => Promise<void>;
};
