# Cueserve Design System — Claude Design Constraints

> Paste this into the Claude Design project system prompt / context.
> These constraints are non-negotiable. Do not deviate from them.

---

## Brand identity

**Company:** Cueserve — AI-native IT services and consulting firm.
**Positioning:** "Intelligent. Reliable. Decisive."
**Tone:** Authoritative, modern, outcome-focused. Not playful, not generic SaaS, not startup-casual.
**Aesthetic:** Clean, editorial, premium. Typography-forward. White space is intentional. Warm-contrast palette — cool blues anchor structure, warm cocoa/sand/accent provide character.

---

## Locked color palette — DO NOT change, invent, or substitute

| Token | Hex | Role |
|-------|-----|------|
| `--cs-dark-blue` | `#0C385A` | Primary dark — hero bg, footer, nav, primary CTA |
| `--cs-light-blue` | `#2384C6` | Primary light — links, secondary CTA, highlights |
| `--cs-cocoa` | `#6E5645` | Warm dark — alternate dark section surfaces |
| `--cs-sand` | `#EDE4D2` | Warm neutral — warm section backgrounds |
| `--cs-accent` | `#A8462C` | CTA accent — buttons, badges, warm highlights |

These five colors are the complete Cueserve brand palette. Do not introduce any new brand colors. Do not substitute, adjust, or suggest replacing any of these values.
Neutrals, white, alpha variants, and utility tokens are supporting system tokens, not additional brand colors.

### Color usage rules — enforced

- **NEVER** place `--cs-accent` (`#A8462C`) directly on `--cs-cocoa` (`#6E5645`). Contrast is ~1.4:1 — invisible. Always separate them with sand, white, or a blue surface.
- `--cs-text-on-sand` must be `--cs-dark-blue` (`#0C385A`), not neutral-900 or black.
- White text on cocoa (`#6E5645`) is ~7:1 — use freely.
- White text on accent (`#A8462C`) is ~5.9:1 — use for buttons and labels.
- Shadows must use dark-blue-tinted values: `rgba(12, 56, 90, 0.06–0.12)` — not black-based.
- Body text on light and subtle surfaces must be `--cs-neutral-900` (`#1A1D21`) or `--cs-neutral-700` (`#495057`).
- Body text on warm (`--cs-sand`) surfaces must be `--cs-dark-blue` (`#0C385A`).
- Body text must never use a warm color.

### What NOT to do with color
- Do not introduce purple, green, teal, pink, orange, cyan, or any color outside the 5-color brand palette.
- Do not use neon, electric, or glowing accents.
- Do not use gradients on primary surfaces (hero, cards, nav). Gradients are permitted only as subtle decorative elements (background shapes, SVG illustrations).
- Do not use glassmorphism, frosted glass, or heavy blur effects on primary UI surfaces.
- Do not use pure black (`#000000`) anywhere — use `--cs-neutral-900` (`#1A1D21`) instead.

### Semantic utility colors (allowed exception)
- Status colors (success, warning, danger/error, info) are allowed only as utility/system tokens.
- They are not part of the brand palette and must not be used for brand expression.
- Allowed use: alerts, validation, system badges, and operational states.
- Disallowed use: hero backgrounds, navigation, primary CTAs, section theming, logos, or marketing emphasis.

### Required supporting tokens (must exist in the same prompt/context)

```css
--cs-white: #FFFFFF;
--cs-neutral-50: #F8F9FA;
--cs-neutral-200: #E9ECEF;
--cs-neutral-300: #DEE2E6;
--cs-neutral-400: #ADB5BD;
--cs-neutral-700: #495057;
--cs-neutral-900: #1A1D21;

--cs-dark-blue-30: rgba(12, 56, 90, 0.30);
--cs-light-blue-15: rgba(35, 132, 198, 0.15);

--cs-btn-primary-hover: #0A3251;
--cs-btn-secondary-hover: #1F76B2;
--cs-btn-accent-hover: #963C27;

--cs-radius-md: 8px;
--cs-radius-lg: 12px;
```

---

## Locked typography — DO NOT change

### Typefaces

| Role | Typeface | Weight range |
|------|----------|-------------|
| Display headings | **Bebas Neue** | 400 only |
| Body / UI / headings H1–H4 | **Outfit** | 300–700 |
| Code / technical labels / badges | **JetBrains Mono** | 400–500 |

- Do not introduce additional typefaces.
- Bebas Neue is display-only — all-caps, letter-spacing 0.04em minimum. Never for body, captions, or UI.
- Outfit has **no true italic** — do not use `font-style: italic`. Outfit renders faux/synthetic italic which is unacceptable for this brand.

### Quote / testimonial treatment (no italic)
Testimonials and pull-quotes use **upright Outfit 400** with:
- Size: 1.125rem
- Color: `--cs-dark-blue`
- Left border: 3px solid `--cs-accent`
- Padding-left: `--cs-space-md` (16px)
- No italics, no quotation marks in the type itself (use a decorative mark if needed)

### Full type scale

All sizes in `rem` (16px base = 1rem). Line-heights unitless. Letter-spacing in `em`.

| Role | Font | Size | Line-height | Weight | Letter-spacing |
|------|------|------|-------------|--------|----------------|
| Display XL | Bebas Neue | 3.5rem | 1.0 | 400 | +0.04em |
| Display L | Bebas Neue | 2.5rem | 1.0 | 400 | +0.04em |
| H1 | Outfit | 2rem | 1.2 | 600 | −0.01em |
| H2 | Outfit | 1.5rem | 1.2 | 600 | −0.01em |
| H3 | Outfit | 1.25rem | 1.3 | 600 | 0 |
| H4 | Outfit | 1rem | 1.3 | 600 | 0 |
| Body LG | Outfit | 1.125rem | 1.65 | 300-400 | 0 |
| Body | Outfit | 1rem | 1.65 | 400 | 0 |
| Body SM | Outfit | 0.875rem | 1.55 | 400 | 0 |
| Quote | Outfit | 1.125rem | 1.55 | 400 | 0 |
| Label | Outfit | 0.875rem | 1.4 | 500 | +0.01em |
| Overline | Outfit | 0.75rem | 1.3 | 600 | +0.08em |
| Caption | Outfit | 0.75rem | 1.4 | 400 | 0 |
| Code | JetBrains Mono | 0.8125rem | 1.7 | 400 | 0 |
| Mono label | JetBrains Mono | 0.6875rem | 1.3 | 500 | +0.04em |

### Rules enforced

- H1 and H2 **must** use negative tracking (−0.01em). Large Outfit 600 without it looks too loose.
- Overline **must** be uppercase AND use +0.08em tracking. Uppercase without tracking looks jammed.
- Body LG uses 300 only for hero intro paragraphs; use 400 everywhere else.
- Do not use 700 (bold) except for strong emphasis within a paragraph. Never for headings.
- Bebas Neue Display sizes are for major section titles only — do not use for subheadings, badges, or labels.

---

## Spacing — 8px grid (non-negotiable)

All spacing must follow the 8px grid. The only exception is `--cs-space-xs` (4px) for micro-spacing. Use these tokens:

| Token | Value | Use |
|-------|-------|-----|
| `--cs-space-xs` | 4px | Icon gaps, tight inline spacing |
| `--cs-space-sm` | 8px | Tight component internal padding |
| `--cs-space-md` | 16px | Default padding, gaps between elements |
| `--cs-space-lg` | 24px | Section inner padding |
| `--cs-space-xl` | 32px | Card body padding |
| `--cs-space-2xl` | 48px | Section separators |
| `--cs-space-3xl` | 64px | Page section padding (top/bottom) |
| `--cs-space-4xl` | 96px | Hero / footer padding |

Do not invent spacing values outside this scale (e.g., 10px, 14px, 20px, 36px).

---

## Component conventions

### Buttons
| Variant | Background | Text | Border |
|---------|-----------|------|--------|
| Primary | `--cs-dark-blue` | White | None |
| Accent CTA | `--cs-accent` | White | None |
| Secondary | `--cs-light-blue` | White | None |
| Outline | Transparent | `--cs-dark-blue` | 1.5px `--cs-dark-blue-30` |
| Ghost | Transparent | `--cs-light-blue` | None |

- Hover states: darken bg by ~10%. Use `--cs-btn-*-hover` tokens.
- Border radius: `--cs-radius-md` (8px) on all buttons.
- Font: Outfit 500, 14px default, 13px small, 16px large.
- Focus ring: `box-shadow: 0 0 0 3px rgba(35, 132, 198, 0.25)` (blue) or `rgba(168, 70, 44, 0.25)` (accent).

### Cards
- Background: `--cs-white` or `--cs-neutral-50`
- Border: 1px `--cs-neutral-200`
- Radius: `--cs-radius-lg` (12px)
- Shadow on hover: `--cs-shadow-lg`

### Form inputs
- Border: 1.5px `--cs-neutral-300`
- Focus border: `--cs-light-blue`
- Focus ring: `box-shadow: 0 0 0 3px var(--cs-light-blue-15)`
- Radius: `--cs-radius-md` (8px)
- Placeholder: `--cs-neutral-400`

### Section layout patterns
| Pattern | Background | Body text color |
|---------|-----------|----------------|
| Default (light) | `--cs-white` | `--cs-neutral-900` |
| Subtle | `--cs-neutral-50` | `--cs-neutral-900` |
| Warm | `--cs-sand` | `--cs-dark-blue` |
| Dark | `--cs-dark-blue` | White |
| Warm dark | `--cs-cocoa` | White |

Alternate between these patterns for visual rhythm. Do not place two dark or two warm-dark sections back-to-back.

---

## Elevation / shadows

Only use these shadow values — no custom box-shadows:

```css
--cs-shadow-sm: 0 1px 2px rgba(12, 56, 90, 0.06);   /* Subtle lift */
--cs-shadow-md: 0 4px 12px rgba(12, 56, 90, 0.08);  /* Cards, dropdowns */
--cs-shadow-lg: 0 8px 32px rgba(12, 56, 90, 0.10);  /* Modals, popovers */
--cs-shadow-xl: 0 16px 48px rgba(12, 56, 90, 0.12); /* Hero elements */
```

---

## Absolute prohibitions

- No new brand colors
- No new typefaces
- No spacing values outside the defined spacing scale (except `--cs-space-xs` at 4px)
- No neon, glow, gradient mesh, or glassmorphism effects
- No accent (`#A8462C`) placed directly on cocoa (`#6E5645`)
- No pure black
- No Bebas Neue for body copy or UI text
- No shadows using black — always dark-blue-tinted
