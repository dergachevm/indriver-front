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
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minus consectetur tempore eum commodi nemo voluptate reprehenderit suscipit excepturi totam veritatis voluptatibus placeat, obcaecati in iusto doloremque sit doloribus cum."
    },
    {
        id: getRandomId(),
        label: "20 min for meet & 1 days for response",
        name: "Life coding",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officiis quia dolore similique qui praesentium in, quam sapiente voluptatem culpa illo a, aliquam quidem fugit accusantium voluptate commodi exercitationem consequatur facilis. Sunt dolor et voluptates, autem laborum sapiente neque quisquam nesciunt maiores voluptatem eaque placeat a mollitia vitae necessitatibus ducimus error rem. Veniam aspernatur accusamus molestias. Quis, delectus eaque! Omnis?"
    },
    {
        id: getRandomId(),
        label: "45 min for meet & 3 days for response",
        name: "Checking soft skills",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officiis quia dolore similique qui praesentium in, quam sapiente voluptatem culpa illo a"
    }
];