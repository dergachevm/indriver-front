import { TAppSliceState, TModalName, TModalProps } from "../../types";

export type TSetModalProps = <T extends TModalName>(
    state: TAppSliceState,
    action: TSetModalPropsAction<T>
) => TAppSliceState;

export type TSetModalPropsAction<T extends TModalName> = {
    type: string;
    payload: TSetModalPropsActionPayload<T>;
};

export type TSetModalPropsActionPayload<T extends TModalName> = {
    name: T;
    props: TModalProps<T>;
};
