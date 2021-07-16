export type Color = `url(${string})` | `var(--${string})` | `rgba(${number}, ${number}, ${number}, ${number})` | `#${string}` | "none"

export type Size = `${number}px` | `${number}em` | `${number}vw` | `${number}vh` | `${number}vmin` | `${number}vmax` | "auto" | "none"

export type Border = `${Size} solid ${Color}`

export type Icon = `${string}-outline`