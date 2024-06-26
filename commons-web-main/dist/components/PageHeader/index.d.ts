import { ReactNode } from "react";
declare const PageHeader: ({ subtitle, children, underlined, ...rest }: {
    subtitle: string;
    children?: ReactNode;
    underlined?: boolean | undefined;
}) => JSX.Element;
export default PageHeader;
