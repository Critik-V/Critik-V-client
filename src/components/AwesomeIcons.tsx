type AwesomeIconsProps = {
  type: "solid" | "regular" | "light" | "duotone" | "brands";
  name: string;
  animation?:
    | "spin"
    | "spin-reverse"
    | "fade"
    | "bounce"
    | "beat"
    | "beat-fade"
    | "flip"
    | "shake";
};

export default function AwesomeIcons({
  type,
  name,
  animation,
}: AwesomeIconsProps) {
  return (
    <i
      className={`fa-${type} fa-${name} ${
        animation ? `fa-${animation}` : null
      }`}></i>
  );
}
