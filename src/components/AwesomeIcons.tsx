type AwesomeIconsProps = {
  type: "solid" | "regular" | "light" | "duotone" | "brands";
  name: string;
};

export default function AwesomeIcons({ type, name }: AwesomeIconsProps) {
  return <i className={`fa-${type} fa-${name}`}></i>;
}
