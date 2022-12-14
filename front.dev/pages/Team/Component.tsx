import { memo } from "react";

import Header from "@layouts/Header";
import Footer from "@layouts/Footer";
import PageLayout from "@layouts/PageLayout";
import TeamAbout from "@sections/TeamAbout";
import Manifecto from "@sections/Manifecto";
import Process from "@sections/Process";

import { TTeamComponent } from "./types";
import Stories from "@sections/Stories";
import Gallery from "@sections/Gallery";


const Main: TTeamComponent = ({ title }) => {
    return (
        <>
            <Header color={"light"} withJoin={true} />
            <PageLayout title={title}>
                <TeamAbout />
                <Gallery />
                <Stories />
                <Manifecto />
                <Process />
                <Footer />
            </PageLayout>
        </>
    );
};

export default memo(Main);
