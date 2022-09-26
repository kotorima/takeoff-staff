interface Props {
	children: JSX.Element | JSX.Element[];
}
const Layout = ({ children }: Props) => <div>{children}</div>;

export { Layout };
export default Layout;
