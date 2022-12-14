import { FC, NamedExoticComponent } from "react";
import { TCultureOfChallengeProps } from "./components/CultureOfChallenge";

export type TCultureFramesProps = Record<string, unknown>;

export type TCultureFramesComponent = FC<TCultureFramesProps>;

export type TFrameList = Array<TFrameData>;

export type TFrameData = {
    Component: TComponent;
    scroll: number;
    id: string;
};

export type TComponent = NamedExoticComponent<TCultureOfChallengeProps>;
