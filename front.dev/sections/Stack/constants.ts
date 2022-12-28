import golangImg from "@assets/img/goland.png";
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
import hiveImg from "@assets/img/hive.png";
import prestoImg from "@assets/img/presto.png";
import scalaImg from "@assets/img/scala.png";
import appiumImg from "@assets/img/appium.png";
import vueImg from "@assets/img/vue.png";
import kafkaImg from "@assets/img/kafka.png";
import ydbImg from "@assets/img/ydb.png";
import swaggerImg from "@assets/img/swagger.png";
import grpcImg from "@assets/img/grpc.png";
import snapkitImg from "@assets/img/snapkit.png";
import xcImg from "@assets/img/xc.png";
import alamofireImg from "@assets/img/alamofire.png";
import swinjectImg from "@assets/img/swinject.png";
import udfImg from "@assets/img/udf.png";
import daggerImg from "@assets/img/dagger.png";
import retrofitImg from "@assets/img/retrofit.png";
import rxjavaImg from "@assets/img/rxjava.png";
import coroutinesImg from "@assets/img/coroutines.png";
import coilImg from "@assets/img/coil.png";
import ciceroneImg from "@assets/img/cicerone.png";
import awsImg from "@assets/img/aws.png";
import gcpImg from "@assets/img/gcp.png";
import helmImg from "@assets/img/helm.png";
import terraformImg from "@assets/img/terraform.png";
import woodpeckerImg from "@assets/img/woodpecker.png";
import apolloGqlImg from "@assets/img/apolloGql.png";
import typescriptImg from "@assets/img/typescript.png";
import nextJsImg from "@assets/img/nextJs.png";
import bigqueryImg from "@assets/img/bigquery.png";
import clickhouseImg from "@assets/img/clickhouse.png";
import trinoImg from "@assets/img/trino.png";
import icebergImg from "@assets/img/iceberg.png";
import airflowImg from "@assets/img/airflow.png";
import scipyImg from "@assets/img/scipy.png";
import scikitLearnImg from "@assets/img/scikitLearn.png";
import opencvImg from "@assets/img/opencv.png";
import catboostImg from "@assets/img/catboost.png";
import pytorchImg from "@assets/img/pytorch.png";
import kubeflowImg from "@assets/img/kubeflow.png";
import qaseImg from "@assets/img/qase.png";
import proxymanImg from "@assets/img/proxyman.png";
import postmanImg from "@assets/img/postman.png";
import allureImg from "@assets/img/allure.png";

import { getRandomId } from "@utils/shared";

import { TSlideData } from "./components/Slider";

export const sliderData: Array<TSlideData> = [
    {
        id: getRandomId(),
        label: "Backend",
        lang: [
            {
                id: getRandomId(),
                img: golangImg,
                label: "GOLANG",
            },
            {
                id: getRandomId(),
                img: mysqlImg,
                label: "MYSQL",
            },
            {
                id: getRandomId(),
                img: redisImg,
                label: "REDIS",
            },
            {
                id: getRandomId(),
                img: kafkaImg,
                label: "KAFKA",
            },
            {
                id: getRandomId(),
                img: ydbImg,
                label: "YDB",
            },
            {
                id: getRandomId(),
                img: swaggerImg,
                label: "SWAGGER",
            },
            {
                id: getRandomId(),
                img: grpcImg,
                label: "GRPC",
            }
        ]
    },
    {
        id: getRandomId(),
        label: "iOS",
        lang: [
            {
                id: getRandomId(),
                img: swiftImg,
                label: "SWIFT",
            },
            {
                id: getRandomId(),
                img: snapkitImg,
                label: "SNAPKIT",
            },
            {
                id: getRandomId(),
                img: xcImg,
                label: "XCOORDINATOR",
            },
            {
                id: getRandomId(),
                img: alamofireImg,
                label: "ALAMOFIRE",
            },
            {
                id: getRandomId(),
                img: swinjectImg,
                label: "SWINJECT",
            },
            {
                id: getRandomId(),
                img: udfImg,
                label: "UNIDIRECTIONAL DATA FLOW",
            }
        ]
    },
    {
        id: getRandomId(),
        label: "Android",
        lang: [
            {
                id: getRandomId(),
                img: kotlinImg,
                label: "KOTLIN",
            },
            {
                id: getRandomId(),
                img: daggerImg,
                label: "DAGGER",
            },
            {
                id: getRandomId(),
                img: retrofitImg,
                label: "RETROFIT",
            },
            {
                id: getRandomId(),
                img: rxjavaImg,
                label: "RXJAVA",
            },
            {
                id: getRandomId(),
                img: coroutinesImg,
                label: "COROUTINES",
            },
            {
                id: getRandomId(),
                img: coilImg,
                label: "COIL",
            },
            {
                id: getRandomId(),
                img: ciceroneImg,
                label: "CICERONE",
            }
        ]
    },
    {
        id: getRandomId(),
        label: "Infrastructure",
        lang: [
            {
                id: getRandomId(),
                img: awsImg,
                label: "AWS",
            },
            {
                id: getRandomId(),
                img: gcpImg,
                label: "GCP",
            },
            {
                id: getRandomId(),
                img: kubernetesImg,
                label: "KUBERNETES",
            },
            {
                id: getRandomId(),
                img: helmImg,
                label: "HELM",
            },
            {
                id: getRandomId(),
                img: terraformImg,
                label: "TERRAFORM",
            },
            {
                id: getRandomId(),
                img: woodpeckerImg,
                label: "WOODPECKER",
            },
            {
                id: getRandomId(),
                img: mysqlImg,
                label: "MYSQL",
            },
            {
                id: getRandomId(),
                img: redisImg,
                label: "REDIS",
            },
            {
                id: getRandomId(),
                img: kafkaImg,
                label: "KAFKA",
            }
        ]
    },
    {
        id: getRandomId(),
        label: "Web",
        lang: [
            {
                id: getRandomId(),
                img: reactJsImg,
                label: "REACT JS",
            },
            {
                id: getRandomId(),
                img: apolloGqlImg,
                label: "APOLLO GQL",
            },
            {
                id: getRandomId(),
                img: typescriptImg,
                label: "TYPESCRIPT",
            },
            {
                id: getRandomId(),
                img: nextJsImg,
                label: "NEXT.JS",
            }
        ]
    },
    {
        id: getRandomId(),
        label: "Data",
        lang: [
            {
                id: getRandomId(),
                img: pythonImg,
                label: "PYTHON",
            },
            {
                id: getRandomId(),
                img: scalaImg,
                label: "SCALA",
            },
            {
                id: getRandomId(),
                img: golangImg,
                label: "GOLANG",
            },
            {
                id: getRandomId(),
                img: sparkImg,
                label: "SPARK",
            },
            {
                id: getRandomId(),
                img: bigqueryImg,
                label: "BIGQUERY",
            },
            {
                id: getRandomId(),
                img: clickhouseImg,
                label: "CLICKHOUSE",
            },
            {
                id: getRandomId(),
                img: trinoImg,
                label: "TRINO",
            },
            {
                id: getRandomId(),
                img: icebergImg,
                label: "ICEBERG",
            },
            {
                id: getRandomId(),
                img: kafkaImg,
                label: "KAFKA",
            },
            {
                id: getRandomId(),
                img: airflowImg,
                label: "AIRFLOW",
            }
        ]
    },
    {
        id: getRandomId(),
        label: "Data Science",
        lang: [
            {
                id: getRandomId(),
                img: pythonImg,
                label: "PYTHON",
            },
            {
                id: getRandomId(),
                img: golangImg,
                label: "GOLANG",
            },
            {
                id: getRandomId(),
                img: scipyImg,
                label: "SCIPY",
            },
            {
                id: getRandomId(),
                img: scikitLearnImg,
                label: "SCIKIT-LEARN",
            },
            {
                id: getRandomId(),
                img: opencvImg,
                label: "OPENCV",
            },
            {
                id: getRandomId(),
                img: catboostImg,
                label: "CATBOOST",
            },
            {
                id: getRandomId(),
                img: prestoImg,
                label: "PRESTO",
            },
            {
                id: getRandomId(),
                img: pytorchImg,
                label: "PYTORCH",
            },
            {
                id: getRandomId(),
                img: gcpImg,
                label: "GCP",
            },
            {
                id: getRandomId(),
                img: kubeflowImg,
                label: "KUBEFLOW",
            }
        ]
    },
    {
        id: getRandomId(),
        label: "QA",
        lang: [
            {
                id: getRandomId(),
                img: qaseImg,
                label: "QASE",
            },
            {
                id: getRandomId(),
                img: proxymanImg,
                label: "PROXYMAN",
            },
            {
                id: getRandomId(),
                img: postmanImg,
                label: "POSTMAN",
            },
            {
                id: getRandomId(),
                img: mysqlImg,
                label: "MYSQL",
            },
            {
                id: getRandomId(),
                img: appiumImg,
                label: "APPIUM",
            },
            {
                id: getRandomId(),
                img: allureImg,
                label: "ALLURE",
            },
            {
                id: getRandomId(),
                img: kotlinImg,
                label: "KOTLIN",
            }
        ]
    }
];
