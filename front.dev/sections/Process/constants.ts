import { getRandomId } from "@utils/shared";
import { TSlideData } from "./components/Slider";

export const sliderData: Array<TSlideData> = [
    {
        id: getRandomId(),
        label: "30 min for meet & 3 days for response",
        name: "Primary selection",
        text: "The first is a conversation with a recruiter. The HR specialist calls candidates to find out their expectations for the working conditions and to understand if they are comparable to the team's offer. The selected resumes are then reviewed by the hiring manager and invited for a technical interview."
    },
    {
        id: getRandomId(),
        label: "45 min for meet & 3 days for response",
        name: "Meeting with the manager",
        text: "The candidate who successfully passed the first stage meets with the manager. At this meeting, the experience and future challenges to be worked on in the chosen position are discussed. Also, someone from the team in which the candidate is being hired may come to this interview."
    },
    {
        id: getRandomId(),
        label: "20 min for meet & 1 days for response",
        name: "Live coding",
        text: "During live coding, the candidate programs under the supervision of developers from our company. At this stage, we pay attention to how a person approaches solving problems. "
    },
    {
        id: getRandomId(),
        label: "45 min for meet & 3 days for response",
        name: "Checking soft skills",
        text: "Before making a job offer to a candidate, we check the soft skills. It is important for our future employees not only to be strong technical specialists but also to be able to communicate and negotiate. After this stage, the candidate has three days to make a decision."
    }
];