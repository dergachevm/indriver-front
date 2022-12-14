import golandImg from "@assets/img/goland.png";
import nodejsImg from "@assets/img/nodejs.png";
import pythonImg from "@assets/img/python.png";
import phpImg from "@assets/img/php.png";
import mysqlImg from "@assets/img/mysql.png";
import redisImg from "@assets/img/redis.png";
import kubernetesImg from "@assets/img/kubernetes.png";
import reactJsImg from "@assets/img/reactJs.png";
import swiftImg from "@assets/img/swift.png";
import kotlinImg from "@assets/img/kotlin.png";
import sparkImg from "@assets/img/spark.png";
import googleCloudImg from "@assets/img/googleCloud.png";
import hiveImg from "@assets/img/hive.png";
import prestoImg from "@assets/img/presto.png";
import scalaImg from "@assets/img/scala.png";
import appiumImg from "@assets/img/appium.png";
import vueImg from "@assets/img/vue.png";

import { getRandomId } from "@utils/shared";

import { TSlideData } from "./components/Slider";

export const sliderData: Array<TSlideData> = [
    {
        id: getRandomId(),
        label: "Backend & Infra",
        lang: [
            {
                id: getRandomId(),
                img: golandImg,
                label: "goland",
            },
            {
                id: getRandomId(),
                img: nodejsImg,
                label: "nodejs",
            },
            {
                id: getRandomId(),
                img: pythonImg,
                label: "python",
            },
            {
                id: getRandomId(),
                img: phpImg,
                label: "php",
            },
            {
                id: getRandomId(),
                img: mysqlImg,
                label: "mysql",
            },
            {
                id: getRandomId(),
                img: redisImg,
                label: "redis",
            },
            {
                id: getRandomId(),
                img: kubernetesImg,
                label: "kubernetes",
            },
        ],
    },
    {
        id: getRandomId(),
        label: "Web",
        lang: [
            {
                id: getRandomId(),
                img: reactJsImg,
                label: "React JS",
            },
            {
                id: getRandomId(),
                img: null,
                label: "Microfrontends",
            },
        ],
    },
    {
        id: getRandomId(),
        label: "iOS",
        lang: [
            {
                id: getRandomId(),
                img: swiftImg,
                label: "Swift",
            },
            {
                id: getRandomId(),
                img: null,
                label: "User-Defined Functions",
            },
        ],
    },
    {
        id: getRandomId(),
        label: "Android",
        lang: [
            {
                id: getRandomId(),
                img: kotlinImg,
                label: "Kotlin",
            },
            {
                id: getRandomId(),
                img: null,
                label: "MVVM/MVI",
            },
        ],
    },
    {
        id: getRandomId(),
        label: "Data",
        lang: [
            {
                id: getRandomId(),
                img: sparkImg,
                label: "Spark",
            },
            {
                id: getRandomId(),
                img: googleCloudImg,
                label: "Google Cloud Platform",
            },
            {
                id: getRandomId(),
                img: hiveImg,
                label: "Hive",
            },
            {
                id: getRandomId(),
                img: prestoImg,
                label: "Presto",
            },
            {
                id: getRandomId(),
                img: pythonImg,
                label: "Python",
            },
            {
                id: getRandomId(),
                img: scalaImg,
                label: "Scala",
            },
        ],
    },
    {
        id: getRandomId(),
        label: "QA",
        lang: [
            {
                id: getRandomId(),
                img: kotlinImg,
                label: "Kotlin",
            },
            {
                id: getRandomId(),
                img: mysqlImg,
                label: "MySQL",
            },
            {
                id: getRandomId(),
                img: appiumImg,
                label: "Appium",
            },
            {
                id: getRandomId(),
                img: vueImg,
                label: "Vue",
            },
        ],
    },
    {
        id: getRandomId(),
        label: "Security",
        lang: [],
    },
];
