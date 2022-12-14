import { memo } from "react";

import InDrive from "@sections/InDrive";
import DoubleInfoCard from "@sections/DoubleInfoCard";
import Stack from "@sections/Stack";
import Manifecto from "@sections/Manifecto";
import JoinUs from "@sections/JoinUs";
import Footer from "@layouts/Footer";
import PageLayout from "@layouts/PageLayout";
import MainHeader from "@layouts/MainHeader";

import { TMainComponent } from "./types";
import { aboutInDriveData, technicalValueData } from "./constants";

const Main: TMainComponent = ({ title }) => {
    return (
        <>
            <MainHeader />
            <PageLayout title={title}>
                <InDrive />
                <DoubleInfoCard
                    first={aboutInDriveData}
                    second={technicalValueData}
                />
                <Stack />
                <Manifecto />
                <JoinUs />
                <Footer />
            </PageLayout>
        </>
    );
};

export default memo(Main);
