import { memo } from "react";

import PageLayout from "@layouts/PageLayout";
import Vacancies from "@sections/Vacancies";
import Footer from "@layouts/Footer";
import Header from "@layouts/Header";

import { TJobListingComponent } from "./types";
import styles from "./styles.module.scss";

const JobListing: TJobListingComponent = ({ title }) => {
    return (
        <>
            <Header color={"bezh"} withJoin={true} />
            <PageLayout bgColor={"bezh"} title={title}>
                <Vacancies className={styles.vacancies} />
                <Footer />
            </PageLayout>
        </>
    );
};

export default memo(JobListing);
