type IconProps = {
  className?: string;
  size?: number;
};

export function InstagramIcon({ className = "", size = 20 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      fill="currentColor"
    >
      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10Zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.51 4.51 0 0 0 12 7.5Zm0 7A2.5 2.5 0 1 1 14.5 12 2.5 2.5 0 0 1 12 14.5ZM17.75 6.25a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z" />
    </svg>
  );
}

export function PhoneIcon({ className = "", size = 20 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      fill="currentColor"
    >
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.72 11.72 0 0 0 3.69.59 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 4a1 1 0 0 1 1-1h3.48a1 1 0 0 1 1 1 11.72 11.72 0 0 0 .59 3.69 1 1 0 0 1-.24 1.01l-2.21 2.09Z" />
    </svg>
  );
}

export function LocationIcon({ className = "", size = 20 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      fill="currentColor"
    >
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z" />
    </svg>
  );
}

export function EmailIcon({ className = "", size = 20 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      fill="currentColor"
    >
      <path d="M4 4h16a2 2 0 0 1 2 2v.01l-10 6.25L2 6.01V6a2 2 0 0 1 2-2Zm18 4.24v9.76a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.24l9.47 5.92a1 1 0 0 0 1.06 0L22 8.24Z" />
    </svg>
  );
}

export function CookieIcon({ className = "", size = 20}: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      fill="currentColor"
    >
      <path d="M12 2a1 1 0 0 1 .93.63A3 3 0 0 0 15.7 4.5a1 1 0 0 1 .8 1.45A3 3 0 0 0 19 9a1 1 0 0 1 .99 1.2A8 8 0 1 1 11.8 2.01 1 1 0 0 1 12 2Zm-3 6a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm5 2a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-4 5a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z" />
    </svg>
  );
}