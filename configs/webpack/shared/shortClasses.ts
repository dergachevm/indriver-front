import { LoaderContext } from "webpack";
import md5 from "md5";

const cache: Record<string, string> = {};

const ordA = "a".charCodeAt(0);
const ordZ = "z".charCodeAt(0);

const len = ordZ - ordA + 1;

const shortClasses = (label?: string) => {
    let i = 0;

    return (
        context: LoaderContext<any>,
        _localIdentName: string,
        localName: string
    ) => {
        let hashKey = md5(`${context.resourcePath}_${localName}`).toString();

        const cacheValue = cache[hashKey];

        if (cacheValue !== undefined) {
            return cacheValue;
        }

        let str = label === undefined ? "" : `${label}__`;
        let counter = i;

        while (counter >= 0) {
            str += String.fromCharCode((counter % len) + ordA);
            counter = Math.trunc(counter / len) - 1;
        }

        cache[hashKey] = str;

        i += 1;

        return str;
    };
};

export default shortClasses;
