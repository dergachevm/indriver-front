import Job from "@pages/Job";
import Main from "@pages/Main";
import Team from "@pages/Team";
// import Culture from "@pages/Culture";
import JobListing from "@pages/JobListing";
import { getRandomId } from "@utils/shared";
import Development from "@pages/Development";

import { Page } from "./enums";
import { TPageTypeRecord, TRouteData } from "./types";

export const JOB_ROUTE = "/job";

export const pagePathRecord: TPageTypeRecord = {
    [Page.Team]: "/team",
    [Page.Job]: `${JOB_ROUTE}/:id`,
    [Page.JobListing]: "/jobs",
    [Page.Culture]: "/culture",
    [Page.Development]: "/development",
    [Page.Main]: "/",
};

export const devPages = [
    {
        Component: Development,
        id: getRandomId(),
        name: "Development",
        path: pagePathRecord[Page.Development],
    },
];

export const routeList: Array<TRouteData> = [
    {
        Component: Main,
        id: getRandomId(),
        name: "Main",
        path: pagePathRecord[Page.Main],
    },
    {
        Component: JobListing,
        id: getRandomId(),
        name: "Job Listing",
        path: pagePathRecord[Page.JobListing],
    },
    {
        Component: Job,
        id: getRandomId(),
        name: "Job",
        path: pagePathRecord[Page.Job],
    },
    {
        Component: Team,
        id: getRandomId(),
        name: "Team",
        path: pagePathRecord[Page.Team],
    },
    /*{
        Component: Culture,
        id: getRandomId(),
        name: "Culture",
        path: pagePathRecord[Page.Culture],
    },*/
    ...(process.env.NODE_ENV === "development" ? devPages : []),
];
