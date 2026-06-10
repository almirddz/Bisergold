export default function Logo({ size = 36, color = 'var(--gold)' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Biser Gold"
    >
      {/* Outer ring */}
      <circle cx="18" cy="18" r="16" stroke={color} strokeWidth="1.2" fill="none" />

      {/* Inner decorative ring */}
      <circle cx="18" cy="18" r="11" stroke={color} strokeWidth="0.6" strokeDasharray="2 3" fill="none" opacity="0.5" />

      {/* Pearl center */}
      <circle cx="18" cy="18" r="5.5" fill={color} opacity="0.9" />

      {/* Highlight on pearl */}
      <circle cx="15.5" cy="15.5" r="1.8" fill="white" opacity="0.35" />

      {/* Top connector (chain hook) */}
      <line x1="18" y1="2" x2="18" y2="7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />

      {/* Small cross at top */}
      <line x1="15" y1="3.5" x2="21" y2="3.5" stroke={color} strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}
