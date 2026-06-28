export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="var(--accent)"
        d="M35.58,15.15 L48.64,41.27 Q54,52 42,52 L22,52 Q10,52 15.36,41.27 L28.42,15.15 Q32,8 35.58,15.15 Z M27,38 Q27,36 29,36 L35,36 Q37,36 37,38 L37,52 L27,52 Z"
      />
    </svg>
  );
}

export function Logo({ size = 32 }: { size?: number }) {
  return (
    <span className="flex items-center gap-2 font-semibold tracking-tight">
      <LogoMark size={size} />
      <span className="text-sm">agentdesk</span>
    </span>
  );
}
