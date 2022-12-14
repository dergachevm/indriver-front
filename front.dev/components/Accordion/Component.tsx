import {
    memo,
    useCallback,
    useState,
    useMemo,
    useContext,
    useRef,
} from "react";
import classNames from "classnames";

import { CSSTransition } from "react-transition-group";
import useDidUpdate from "@hooks/useDidUpdate";
import { is } from "@utils/shared";
import { setStyles } from "@utils/css";

import {
    TAccordionBodyComponent,
    TAccordionComponent,
    TAccordionExoticComponent,
    TAccordionHeadComponent,
} from "./types";
import styles from "./styles.module.scss";
import { AccordionContext, AccordionContextProvider } from "./context";

const AccordionComp: TAccordionComponent = ({
    active,
    children,
    className,
}) => {
    const [isActive, setIsActive] = useState(Boolean(active));

    const toggle = useCallback(() => {
        setIsActive((prevState) => {
            return !prevState;
        });
    }, []);

    const state = useMemo(() => {
        return {
            isActive,
            toggle,
        };
    }, [isActive, toggle]);

    const classes = classNames(
        styles.wrap,
        className,
        isActive && styles.active
    );

    useDidUpdate(() => {
        setIsActive(Boolean(active));
    }, [active]);

    return (
        <AccordionContextProvider value={state}>
            <div className={classes}>{children}</div>
        </AccordionContextProvider>
    );
};

const AccordionHead: TAccordionHeadComponent = memo(
    ({ children, className }) => {
        const context = useContext(AccordionContext);

        if (is(null, context)) {
            return null;
        }

        const classes = classNames(styles.head, className);

        const { toggle } = context;

        return (
            <div className={classes} onClick={toggle}>
                {children}
            </div>
        );
    }
);

const AccordionBody: TAccordionBodyComponent = memo(
    ({ children, className, timeout = 150 }) => {
        const context = useContext(AccordionContext);

        const refWrap = useRef<HTMLDivElement>(null);

        const setHeight = useCallback((height: string) => {
            const { current } = refWrap;

            if (is(null, current)) {
                return;
            }

            setStyles(current, { height });
        }, []);

        const getScrollHeight = useCallback((unit = "px") => {
            const { current } = refWrap;

            if (is(null, current)) {
                return "";
            }

            return `${current.scrollHeight}${unit}`;
        }, []);

        const handleEnter = useCallback(() => {
            setHeight("0px");
        }, [setHeight]);

        const handleEntering = useCallback(() => {
            setHeight(getScrollHeight());
        }, [setHeight, getScrollHeight]);

        const handleEntered = useCallback(() => {
            setHeight("");
        }, [setHeight]);

        const handleExit = useCallback(() => {
            setHeight(getScrollHeight());
        }, [setHeight, getScrollHeight]);

        const handleExiting = useCallback(() => {
            setHeight("0");
        }, [setHeight]);

        if (is(null, context)) {
            return null;
        }

        const style = {
            transitionDuration: `${timeout}ms`,
        };

        const classes = classNames(styles.body, className);

        const { isActive } = context;

        return (
            <CSSTransition
                in={isActive}
                nodeRef={refWrap}
                timeout={timeout}
                unmountOnExit={true}
                onEnter={handleEnter}
                onEntered={handleEntered}
                onEntering={handleEntering}
                onExit={handleExit}
                onExiting={handleExiting}>
                <div className={classes} ref={refWrap} style={style}>
                    {children}
                </div>
            </CSSTransition>
        );
    }
);

const Accordion = memo(AccordionComp) as TAccordionExoticComponent;

AccordionHead.displayName = "Head";
AccordionBody.displayName = "Body";

Accordion.Head = AccordionHead;
Accordion.Body = AccordionBody;

export default Accordion;
