import Image from "next/image";

type LogoProps = {
  src:string;
  alt:string;
  className?: string;
  priority?: boolean;
  size?: number;
};

export function Logo({src, alt, className, priority = false, size = 44 }: LogoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      priority={priority}
      className={className}
    />
  );
}
