interface Props {
	children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: Props) => <div>{children}</div>;

export default Layout;
