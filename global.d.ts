declare module "*.module.css" {
    const classes: { [key: string]: string; };
    export default classes;
}

declare module "*.module.scss" {
    const classes: { [key: string]: string; };
    export default classes;
}

declare module "*.png" {
    const data: string;
    export default data;
}
declare module "*.jpg" {
    const data: string;
    export default data;
}
declare module "*.jpeg" {
    const data: string;
    export default data;
}
declare module "*.json" {
    const data: string;
    export default data;
}

declare module "*.svg" {
    type TSvgProps = {
        height?: number;
        width?: number;
        className?: string;
    };

    export const ReactComponent: FC<TSvgProps>;

    const link: string;

    export default link;
}
