const paths: Record<string, React.ReactNode> = {
  droplet: <path d="M12 2.5C12 2.5 5 10 5 14.5a7 7 0 0 0 14 0C19 10 12 2.5 12 2.5Z" />,
  shield: (
    <>
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  radar: (
    <>
      <circle cx="12" cy="12" r="2" />
      <path d="M12 12 19 5" />
      <path d="M4 12a8 8 0 0 1 8-8" />
      <path d="M7 12a5 5 0 0 1 5-5" />
    </>
  ),
  wall: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M3 10h18M3 14h18M9 5v5m6-5v5M6 14v5m12-5v5" />
    </>
  ),
  spark: (
    <>
      <path d="M12 2v4m0 12v4m10-10h-4M6 12H2" />
      <path d="m19 5-3 3M8 16l-3 3m14 0-3-3M8 8 5 5" />
    </>
  ),
  wrench: (
    <path d="M14.5 6.5a3.5 3.5 0 0 1-4.6 4.6L4 17v3h3l5.9-5.9a3.5 3.5 0 0 1 4.6-4.6l-2.5 2.5-1.5-1.5 2.5-2.5Z" />
  ),
};

export default function ServiceIcon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.spark}
    </svg>
  );
}
