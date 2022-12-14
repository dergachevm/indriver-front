import { memo } from "react";
import { useParams } from "react-router-dom";

import PageLayout from "@layouts/PageLayout";
import Footer from "@layouts/Footer";
import Vacancy from "@sections/Vacancy";
import Header from "@layouts/Header";

import { TJobComponent } from "./types";

const Job: TJobComponent = ({ title }) => {
    const { id } = useParams();

    return (
        <>
            <Header color={"green"} withJoin={true} />
            <PageLayout bgColor={"green"} title={title}>
                <Vacancy id={Number(id)} />
                <Footer />
            </PageLayout>
        </>
    );
};

export default memo(Job);
