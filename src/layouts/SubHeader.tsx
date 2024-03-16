import "./styles/SubHeader.scss";

type SubHeaderProps = {
  children: React.ReactNode;
};

export default function SubHeader({ children }: SubHeaderProps): JSX.Element {
  return <section className="sub-header">{children}</section>;
}
