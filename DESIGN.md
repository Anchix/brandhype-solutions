# Design Brief

## Direction

**Neural Velocity** — Premium 3D marketing agency website with immersive depth, vibrant neon accents on deep black, and sophisticated interactive 3D transforms.

## Tone

Futuristic luxury meets technical precision—confident, forward-thinking, data-driven, bold without chaos. Inspired by high-end design studios (Stripe, Linear, Apple).

## Differentiation

Vibrant neon accent colors (electric blue, purple, gold) create distinctive glow effects layered on deep blacks with 3D card interactions, ambient particle field, and smooth scroll parallax throughout—premium tech, not generic.

## Color Palette

| Token        | OKLCH              | Role                                    |
| ------------ | ------------------ | --------------------------------------- |
| background   | 0.08 0 0           | Deep black foundation, hero/full-width  |
| card         | 0.12 0 0           | Elevated card/section backgrounds       |
| foreground   | 0.97 0 0           | Primary text, high contrast             |
| primary      | 0.55 0.25 256      | Electric blue, CTAs, interactive focus  |
| secondary    | 0.60 0.24 296      | Neon purple, secondary actions, accents |
| accent       | 0.65 0.20 65       | Gold/amber, highlights, premium detail  |
| muted        | 0.25 0 0           | Subtle backgrounds, secondary text      |
| border       | 0.20 0 0           | Subtle dividers, controlled visibility  |
| destructive  | 0.60 0.25 20       | Alert red for warnings/errors           |

## Typography

- Display: **Space Grotesk** — geometric, bold, tech-forward; hero text 48px+, section titles 32px+
- Body: **DM Sans** — clean, highly legible, professional; paragraphs 16px, labels 14px
- Mono: **JetBrains Mono** — technical details, code blocks
- Scale: hero `text-5xl md:text-7xl font-bold`, h2 `text-3xl md:text-4xl font-bold`, body `text-base text-foreground/80`

## Elevation & Depth

Multi-layered surface hierarchy with glass-morphism effects. Elevated cards cast glow shadows (blue/purple/gold). Deep shadows create dimensional stacking. 3D hover transforms with smooth spring easing.

## Structural Zones

| Zone    | Background       | Border                       | Notes                                    |
| ------- | ---------------- | ---------------------------- | ---------------------------------------- |
| Header  | card (0.12 0 0)  | border-glow blue/0.3         | Elevated above content, bottom accent    |
| Hero    | background      | —                            | Full-width with 3D particle field        |
| Content | Alternating      | —                            | Sections: card → muted → card rhythm    |
| Footer  | card             | border top with accent glow  | Deep dark, accent divider, centered text |

## Spacing & Rhythm

Section gaps `py-20 lg:py-32`; card padding `p-6 md:p-8`; micro-spacing uses `gap-4` for groups. Alternating section backgrounds create visual rhythm and breathing room.

## Component Patterns

- **Buttons**: Primary `bg-primary text-primary-foreground` with `glow-blue` hover; secondary `border-primary text-primary` with scale transform
- **Cards**: `bg-card border border-border/50` rounded-lg, hover `-translate-y-3` with glow shadow, glass effect on overlay text
- **Badges**: `bg-primary/10 text-primary border-primary/30` with small rounded corners, uppercase small font

## Motion

- **Entrance**: Staggered `animate-fade-in` on scroll; hero `animate-slide-up` on load
- **Hover**: Cards `-translate-y-3` with glow shadow; buttons scale 1.05 with blue glow; particle field responds to scroll
- **Decorative**: Floating particles in hero (Three.js), pulse rings on stats, ambient glow pulsing on accent buttons

## Constraints

- No light mode—dark theme only, consistently applied
- All colors OKLCH-based; no hex or rgb fallbacks for theme colors
- Glow effects limited to interactive elements and decorative accents—no overuse
- Mobile maintains visual richness: all 3D effects scale appropriately; reduced particle density on mobile

## Signature Detail

Vibrant neon accent glows on interactive elements—electric blue and purple create "premium tech" energy. 3D floating cards with hover transforms. Immersive hero particle field. Together, these create an unforgettable, bold premium experience.
