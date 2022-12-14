import { memo, useCallback, useMemo, useRef } from "react";
import classNames from "classnames";

import Image from "@components/Image";
import { is } from "@utils/shared";

import { TImageGalleryComponent } from "./types";
import styles from "./styles.module.scss";

const TRANSFORM_X_REG = new RegExp("translateX\\((\\-?\\d+)px\\)");

const ImageGallery: TImageGalleryComponent = ({ className, data }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const classes = classNames(styles.gallery, className);

    const handleMouseMove = useCallback((event: MouseEvent) => {
        event.preventDefault();

        const { current } = ref;

        if (is(null, current)) {
            return;
        }

        const currentTransformXMatch = TRANSFORM_X_REG.exec(
            current.style.transform
        );

        const currentTransformX = is(null, currentTransformXMatch)
            ? 0
            : Number.parseInt(currentTransformXMatch[1]);

        const newTransforXValue = currentTransformX + event.movementX;

        const firstChild = current.firstElementChild;

        if (!is(null, firstChild)) {
            const firstRect = firstChild.getBoundingClientRect();

            if (firstRect.x + firstRect.width < 0) {
                const removed = current.removeChild(firstChild);
                current.style.transform = "translateX(0px)";
                current.appendChild(removed);

                return;
            }
        }

        const lastChild = current.lastElementChild;

        if (!is(null, lastChild)) {
            const lastRect = lastChild.getBoundingClientRect();

            if (current.scrollWidth < lastRect.width + lastRect.x) {
                const removed = current.removeChild(lastChild);

                current.replaceChildren(
                    removed,
                    ...Array.from(current.childNodes)
                );

                current.style.transform = `translateX(-${
                    removed.getBoundingClientRect().width
                }px)`;
                return;
            }
        }

        current.style.transform = `translateX(${newTransforXValue}px)`;
    }, []);

    const handleMouseDown = useCallback(() => {
        const { current } = ref;

        if (is(null, current)) {
            return;
        }

        current.addEventListener("mousemove", handleMouseMove);
    }, [handleMouseMove]);

    const handleMouseUp = useCallback(() => {
        const { current } = ref;

        if (is(null, current)) {
            return;
        }

        current.removeEventListener("mousemove", handleMouseMove);
    }, [handleMouseMove]);

    const handleMouseLeave = useCallback(() => {
        const { current } = ref;

        if (is(null, current)) {
            return;
        }

        current.removeEventListener("mousemove", handleMouseMove);
    }, [handleMouseMove]);

    const list = useMemo(() => {
        return data.map(({ img, id }) => {
            return (
                <div key={id} style={{ height: "100%" }}>
                    <Image
                        src={img}
                        style={{ height: "100%", userSelect: "none" }}
                    />
                </div>
            );
        });
    }, [data]);

    return (
        <div className={classes}>
            <div
                className={styles.scrollable}
                ref={ref}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}>
                {list}
            </div>
        </div>
    );
};

export default memo(ImageGallery);
