import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
  size?: number;
};

export function Logo({ className, priority = false, size = 44 }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Logo Rehab Strength"
      width={size}
      height={size}
      priority={priority}
      className={className}
    />
  );
}
