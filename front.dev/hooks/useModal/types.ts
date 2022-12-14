import { TModalName, TModalProps } from "@services/Redux/slices";

export type TUseModal = <T extends TModalName>(
    name: T,
    props: TModalProps<T>
) => {
    closeModal: () => void;
    openModal: () => void;
};
