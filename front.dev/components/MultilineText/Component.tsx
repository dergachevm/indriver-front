import { memo, useCallback, useLayoutEffect, useState } from "react";

import {
    eq,
    getArrLastElIndex,
    getRandomId,
    isEmptyArr,
    isEmptyStr,
    isString,
} from "@utils/shared";

import { TMultilineTextComponent } from "./types";

const REG_EXP = new RegExp("<:[\\d]+-[\\d]+:>", "g");
const SIZES_REG_EXP = new RegExp("<:(\\d+)-(\\d+):>", "g");
const FIRST_SIZE_INDEX = 1;
const SECOND_SIZE_INDEX = 2;

const MultilineText: TMultilineTextComponent = ({ text }) => {
    const checkRenderSeparator = useCallback((match: RegExpMatchArray) => {
        const minSize = Number(match[FIRST_SIZE_INDEX]);
        const maxSize = Number(match[SECOND_SIZE_INDEX]);

        const windowSize = window.innerWidth;

        return windowSize >= minSize && windowSize < maxSize;
    }, []);

    const transformText = useCallback(
        (str: string) => {
            const splittedText = str.split(REG_EXP);
            const sizeMatches = Array.from(str.matchAll(SIZES_REG_EXP));

            const lastIndex = getArrLastElIndex(splittedText);

            const result: Array<JSX.Element | string> = [];

            const handleText = (strText: string, index: number) => {
                const renderSeparator =
                    !eq(index, lastIndex) &&
                    checkRenderSeparator(sizeMatches[index]);

                if (isEmptyArr(result)) {
                    result.push(strText);

                    if (renderSeparator) {
                        result.push(<br key={getRandomId()} />);
                    }
                } else {
                    const last = result.pop() as JSX.Element | string;

                    if (isString(last)) {
                        result.push(`${last} ${strText}`);
                    } else {
                        result.push(last);
                        result.push(strText);
                    }

                    if (renderSeparator) {
                        result.push(<br key={getRandomId()} />);
                    }
                }
            };

            splittedText.map(handleText);

            return result;
        },
        [checkRenderSeparator]
    );

    const updateText = useCallback(() => {
        if (isEmptyStr(text)) {
            return [text];
        }

        const matches = Array.from(text.matchAll(REG_EXP));

        let result: Array<JSX.Element | string>;
        if (isEmptyArr(matches)) {
            result = [text];
        } else {
            result = transformText(text);
        }

        return result;
    }, [text, transformText]);

    const [result, setResult] = useState<Array<JSX.Element | string>>(
        updateText
    );

    const udpateResult = useCallback(() => {
        setResult(updateText);
    }, [updateText]);

    useLayoutEffect(() => {
        window.addEventListener("resize", udpateResult);

        return () => {
            window.removeEventListener("resize", udpateResult);
        };
    }, [udpateResult]);

    return <>{result}</>;
};

export default memo(MultilineText);
