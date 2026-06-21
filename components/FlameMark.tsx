export default function FlameMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="flame-grad" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff6a3d" />
          <stop offset="0.5" stopColor="#ff3b1f" />
          <stop offset="1" stopColor="#e11d2a" />
        </linearGradient>
      </defs>
      <path
        d="M16 2c2.5 5.5-2 8-2 12 0 2 1.2 3.4 3 3.4 2.2 0 3.2-1.8 3-4 2.8 2.3 4 5.2 4 8.1C24 27 20.4 30 16 30S8 27 8 21.5C8 14 14 11 16 2Z"
        fill="url(#flame-grad)"
      />
      <path
        d="M16 19c1.6 2 1 4-.5 5.2C13.7 25.4 13 24 13 22.6c0-1.8 1.6-2.3 3-3.6Z"
        fill="#fff"
        fillOpacity="0.85"
      />
    </svg>
  );
}
