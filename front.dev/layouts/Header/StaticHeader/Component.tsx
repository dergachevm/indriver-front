import { memo } from "react";

import { TStaticHeaderComponent } from "./types";
import If from "@components/If";
import useAppSize from "@hooks/useAppSize";
import { eq } from "@utils/shared";

import StaticMobileHeader from "../StaticMobileHeader";
import StaticDekstopHeader from "../StaticDekstopHeader";

const StaticHeader: TStaticHeaderComponent = ({
    tabs,
    color = "green",
    withJoin = false,
}) => {
    const { size: appSize } = useAppSize();

    const isDekstop = eq(appSize, "dekstop");

    return (
        <If condition={isDekstop} els={<StaticMobileHeader tabs={tabs} />}>
            <StaticDekstopHeader
                color={color}
                tabs={tabs}
                withJoin={withJoin}
            />
        </If>
    );
};

export default memo(StaticHeader);
