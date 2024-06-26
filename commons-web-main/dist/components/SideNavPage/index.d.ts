import { ReactNode } from 'react';
declare type Props = {
    name: string;
    navbar: ReactNode;
    children: ReactNode;
    padding: string;
};
declare const SideNavPage: (props: Props) => JSX.Element;
export default SideNavPage;
