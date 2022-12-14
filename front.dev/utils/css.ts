import { CSSProperties } from "react";

export const setStyles = (el: HTMLElement, css: CSSProperties) => {
    Object.assign(el.style, css);
};

export const addClass = (el: Element | HTMLElement, className: string) => {
    el.classList.add(className);
};

export const removeClass = (el: Element | HTMLElement, className: string) => {
    el.classList.remove(className);
};

export const toggleClass = (el: Element | HTMLElement, className: string) => {
    el.classList.toggle(className);
};

export const containClass = (el: Element | HTMLElement, className: string) => {
    return el.classList.contains(className);
};
