// approach: desktop-first
const BREAKPOINT = {
  phone: 550,
  tablet: 1100,
  laptop: 1600,
}

export const display = {
  laptop: `@media (max-width: ${BREAKPOINT.laptop}px)`,
  tablet: `@media (max-width: ${BREAKPOINT.tablet}px)`,
  phone: `@media (max-width: ${BREAKPOINT.phone}px)`,
}
