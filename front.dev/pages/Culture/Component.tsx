import { memo } from "react";

import PageLayout from "@layouts/PageLayout";
import CultureFrames from "@sections/CultureFrames";

import { TCultureComponent } from "./types";

const Culture: TCultureComponent = ({ title }) => {
    return (
        <PageLayout bgColor={"transparent"} title={title}>
            <CultureFrames />
        </PageLayout>
    );
};

export default memo(Culture);
