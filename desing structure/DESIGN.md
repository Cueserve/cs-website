# Design System

Extracted from a live Webflow build's computed CSS custom properties and applied type/shadow values. Structured into a three-tier token architecture for Figma Variables + frontend consumption.

> **Licensing note:** these values were read from a commercial template. Confirm the license permits derivative use before shipping this as a client-facing system.

---

## 1. Architecture

```
Primitives  →  Semantic  →  Component
(raw values)   (intent)      (usage)

blue.800    →  brand.default  →  button.primary.bg
neutral.950 →  text.primary   →  heading.color
```

**Rule:** components never reference primitives directly. If you need a new color in a component, add a semantic alias first. This is what makes theming possible later.

In Figma, create three Variable collections:

| Collection | Modes | Contains |
|---|---|---|
| `1. Primitives` | — | All raw hex, sizes, radii |
| `2. Semantic` | `Light` (add `Dark` later) | Aliases pointing at primitives |
| `3. Component` | — | Optional; per-component overrides |

---

## 2. Color

### 2.1 Primitives — Blue

| Token | Hex | Source name |
|---|---|---|
| `blue/900` | `#00359E` | primary-linear/powder-blue |
| `blue/800` | `#0040C1` | **primary** |
| `blue/700` | `#0042C5` | primary-linear/crayola |
| `blue/500` | `#2970FF` | primary-linear/light-blue |
| `blue/400` | `#256DFF` | blue-cryola |
| `blue/200` | `#C2E0FF` | diamond |
| `blue/150` | `#D1E0FF` | azureish-white |
| `blue/100` | `#EFF4FF` | alice-blue |
| `blue/50`  | `#F5FAFF` | light-bg |

Note the gap between `blue/200` and `blue/400` — the source has no true mid-tone blues. If you need a 300, `#7BA8FF` interpolates cleanly.

### 2.2 Primitives — Neutral

| Token | Hex | Source name |
|---|---|---|
| `neutral/1000` | `#000000` | black |
| `neutral/950` | `#090909` | text-dark |
| `neutral/900` | `#111827` | eerie-black |
| `neutral/800` | `#212121` | raisin-black |
| `neutral/600` | `#4B5563` | independence |
| `neutral/500` | `#6B7280` | metal-saurus |
| `neutral/100` | `#F9F9F9` | ghost-white |
| `neutral/0`   | `#FFFFFF` | white |

`neutral/600` and `500` are Tailwind's gray-600/500 — the template mixes a custom near-black ramp with Tailwind neutrals. Kept both; use the Tailwind pair for body text, the custom pair for headings and surfaces.

### 2.3 Alpha

| Token | Value |
|---|---|
| `alpha/black-70` | `#212121B3` (raisin-black @ 70%) |
| `alpha/white-80` | `#FFFFFFCC` (white @ 80%) |
| `alpha/transparent` | `#00000000` |

### 2.4 Semantic aliases

| Semantic | → Primitive | Use for |
|---|---|---|
| `brand/default` | `blue/800` | Primary buttons, links, active states |
| `brand/hover` | `blue/900` | Hover on brand surfaces |
| `brand/subtle` | `blue/100` | Tinted section backgrounds, badges |
| `brand/muted` | `blue/150` | Dividers on tinted surfaces |
| `text/primary` | `neutral/950` | Headings, high-emphasis body |
| `text/secondary` | `neutral/600` | Standard body copy |
| `text/tertiary` | `neutral/500` | Metadata, captions, placeholders |
| `text/muted` | `alpha/black-70` | Body over photographic backgrounds |
| `text/inverse` | `neutral/0` | Text on brand or dark surfaces |
| `text/inverse-muted` | `alpha/white-80` | Secondary text on dark |
| `text/brand` | `blue/800` | Inline links, emphasis |
| `bg/page` | `neutral/0` | Default canvas |
| `bg/subtle` | `neutral/100` | Alternating sections |
| `bg/tinted` | `blue/50` | Brand-flavored sections |
| `bg/brand` | `blue/800` | CTA blocks |
| `bg/inverse` | `neutral/900` | Footer, dark panels |
| `bg/overlay` | `alpha/black-70` | Modal scrim, image overlays |
| `border/subtle` | `blue/100` | Hairlines on light |
| `border/default` | `blue/150` | Card and input borders |
| `border/strong` | `blue/200` | Hover/emphasis borders |
| `border/brand` | `blue/800` | Focused inputs, selected cards |

### 2.5 Gradient

```css
--gradient-brand: linear-gradient(135deg, #00359E 0%, #0042C5 50%, #2970FF 100%);
```

Figma Variables can't hold gradients. Create this as a **shared Fill Style** named `gradient/brand` and reference it from components.

### 2.6 Contrast audit (WCAG 2.1)

| Pair | Ratio | AA body | AA large |
|---|---|---|---|
| `text/primary` on `bg/page` | 20.1:1 | ✅ | ✅ |
| `text/secondary` on `bg/page` | 8.6:1 | ✅ | ✅ |
| `text/tertiary` on `bg/page` | 5.2:1 | ✅ | ✅ |
| `text/inverse` on `bg/brand` | 8.4:1 | ✅ | ✅ |
| `text/brand` on `bg/page` | 8.9:1 | ✅ | ✅ |
| `text/brand` on `bg/tinted` | 8.4:1 | ✅ | ✅ |
| `blue/500` on `bg/page` | 4.3:1 | ❌ | ✅ |

**Watch:** `blue/500` (`#2970FF`) fails AA for body text on white. Restrict it to the gradient, large display text, and non-text UI (icons, borders). Use `brand/default` for any interactive text.

---

## 3. Typography

### 3.1 Families

| Role | Stack | Loaded weights |
|---|---|---|
| Title | `"Instrument Sans", sans-serif` | 400, 500 |
| Paragraph | `Poppins, sans-serif` | 300, 400, 500, 600, 700 |

Instrument Sans is used for every heading and display size; Poppins carries all body, label, and UI copy. The template renders headings at weight 400 — the visual weight comes from size and tight tracking, not from bolding. Preserve that; bolding headings breaks the look.

### 3.2 Weights

`300` light · `400` regular · `500` medium · `600` semibold · `700` bold

### 3.3 Line heights

`100%` · `110%` · `120%` · `130%` · `140%` · `150%`

Stored as percentages so they scale with any font size. In Figma, set line height to `Percentage` mode, not `Fixed`.

### 3.4 Type scale

| Style | Family | Size | Weight | LH | Tracking |
|---|---|---|---|---|---|
| `title/display` | Instrument Sans | 216px (13.5rem) | 400 | 100% | -4% |
| `title/xl` | Instrument Sans | 142px (8.875rem) | 500 | 100% | -2% |
| `title/lg` | Instrument Sans | 100px (6.25rem) | 400 | 100% | -2% |
| `h1` | Instrument Sans | 64px (4rem) | 400 | 110% | -2% |
| `h2` | Instrument Sans | 52px (3.25rem) | 400 | 120% | -2% |
| `h3` | Instrument Sans | 40px (2.5rem) | 400 | 120% | -2% |
| `h4` | Instrument Sans | 32px (2rem) | 400 | 120% | -2% |
| `h5` | Instrument Sans | 28px (1.75rem) | 400 | 130% | -2% |
| `h6` | Instrument Sans | 22px (1.375rem) | 400 | 130% | -2% |
| `body/lg` | Poppins | 20px (1.25rem) | 400 | 150% | -2% |
| `body/md` | Poppins | 18px (1.125rem) | 400 | 150% | -2% |
| `body/base` | Poppins | 16px (1rem) | 400 | 150% | -2% |
| `body/sm` | Poppins | 14px (0.875rem) | 400 | 150% | -2% |
| `label` | Poppins | 14px | 500 | 100% | -2% |
| `caption` | Poppins | 12px (0.75rem) | 400 | 120% | 0 |

There's also a `title/medium` at 36px (2.25rem) in the source variables, sitting between h3 and h4. Included in `tokens.json` as a primitive but not given a composite style — fold it into h3/h4 unless you find a real use.

### 3.5 Tracking

Letter-spacing in the source is expressed in px and scales with size — it's proportional, so convert to percentages:

- 64px / -1.92px → **-3%**… but 52px / -1.56px → -3%, 40px / -1.2px → -3%, 22px / -0.66px → -3%.

Recomputing: the heading ratio is consistently **-3%**, and body (16px / -0.32px, 18px / -0.36px, 14px / -0.28px) is **-2%**. Display sizes go tighter: 216px / -8.64px → **-4%**.

| Token | Value | Applies to |
|---|---|---|
| `tracking/tightest` | -4% | display titles |
| `tracking/tighter` | -3% | all headings h1–h6 |
| `tracking/tight` | -2% | all body, labels |
| `tracking/none` | 0 | captions, uppercase eyebrows |

Use `tighter` (-3%) for headings — that's what the source actually computes to.

### 3.6 Responsive

The source has no fluid type. Recommended clamps for a 375→1440px range:

```css
--title-display: clamp(4rem, 15vw, 13.5rem);
--title-xl:      clamp(3rem, 10vw, 8.875rem);
--title-lg:      clamp(2.5rem, 7vw, 6.25rem);
--h1:            clamp(2.25rem, 5vw, 4rem);
--h2:            clamp(2rem, 4vw, 3.25rem);
--h3:            clamp(1.75rem, 3vw, 2.5rem);
--h4:            clamp(1.5rem, 2.5vw, 2rem);
```

In Figma, express this as modes on the Semantic collection: `Mobile` / `Tablet` / `Desktop`, with `fontSize` semantic tokens re-pointed per mode.

---

## 4. Radius

| Token | rem | px | Typical use |
|---|---|---|---|
| `radius/none` | 0 | 0 | Flush edges |
| `radius/xs` | 0.75 | 12 | Chips, small inputs |
| `radius/sm` | 1 | 16 | Inputs, small cards |
| `radius/md` | 1.25 | 20 | Standard cards |
| `radius/lg` | 1.5 | 24 | Large cards |
| `radius/xl` | 2 | 32 | Feature panels |
| `radius/xxl` | 2.5 | 40 | Hero media |
| `radius/3xl` | 3.75 | 60 | Full-bleed sections |
| `radius/button` | 6.25 | 100 | Pill buttons |
| `radius/circle` | 12.5 | 200 | Avatars, circular badges |

This is an unusually generous radius scale — soft, rounded aesthetic throughout. `button` and `circle` are effectively "fully round" sentinels; a 100px radius on a 48px-tall button just makes a pill.

---

## 5. Spacing

The source exposes only two spacing variables (`none: 0`, `section-gap: 7.5rem`) — everything else is inline in Webflow. Proposing a standard 4px-base scale, with `section-gap` preserved as the one authored value:

| Token | rem | px |
|---|---|---|
| `space/0` | 0 | 0 |
| `space/1` | 0.25 | 4 |
| `space/2` | 0.5 | 8 |
| `space/3` | 0.75 | 12 |
| `space/4` | 1 | 16 |
| `space/5` | 1.25 | 20 |
| `space/6` | 1.5 | 24 |
| `space/8` | 2 | 32 |
| `space/10` | 2.5 | 40 |
| `space/12` | 3 | 48 |
| `space/16` | 4 | 64 |
| `space/20` | 5 | 80 |
| `space/24` | 6 | 96 |
| `space/section` | 7.5 | 120 |

Flagging this clearly: `space/1` through `space/24` are **inferred**, not extracted. Verify against a few real components before treating them as canonical.

---

## 6. Elevation

Only two shadows appear in the rendered page.

| Token | CSS | Use |
|---|---|---|
| `shadow/card` | `0 2px 8px rgba(17,24,39,0.12)` | Elevated cards, dropdowns |
| `shadow/control` | `0 0 0 1px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.10)` | Inputs, secondary buttons — ring + lift |
| `shadow/focus` | `0 0 0 3px rgba(41,112,255,0.40)` | **Added.** Not in source; needed for keyboard a11y |

`shadow/control` is a two-layer stack — in Figma, add two Drop Shadow effects to a single Effect Style, ordered ring-first.

The design leans on radius and color contrast rather than elevation. Resist adding more shadow levels; if something needs to feel raised, try `bg/subtle` or a `border/default` hairline first.

---

## 7. CSS custom properties

Drop-in stylesheet for the frontend side. Names match the Figma token paths one-to-one.

```css
:root {
  /* ---- primitives: color ---- */
  --blue-900: #00359e;
  --blue-800: #0040c1;
  --blue-700: #0042c5;
  --blue-500: #2970ff;
  --blue-400: #256dff;
  --blue-200: #c2e0ff;
  --blue-150: #d1e0ff;
  --blue-100: #eff4ff;
  --blue-50:  #f5faff;

  --neutral-1000: #000000;
  --neutral-950:  #090909;
  --neutral-900:  #111827;
  --neutral-800:  #212121;
  --neutral-600:  #4b5563;
  --neutral-500:  #6b7280;
  --neutral-100:  #f9f9f9;
  --neutral-0:    #ffffff;

  --alpha-black-70: rgba(33, 33, 33, 0.7);
  --alpha-white-80: rgba(255, 255, 255, 0.8);

  /* ---- semantic: color ---- */
  --brand-default: var(--blue-800);
  --brand-hover:   var(--blue-900);
  --brand-subtle:  var(--blue-100);
  --brand-muted:   var(--blue-150);

  --text-primary:       var(--neutral-950);
  --text-secondary:     var(--neutral-600);
  --text-tertiary:      var(--neutral-500);
  --text-muted:         var(--alpha-black-70);
  --text-inverse:       var(--neutral-0);
  --text-inverse-muted: var(--alpha-white-80);
  --text-brand:         var(--blue-800);

  --bg-page:    var(--neutral-0);
  --bg-subtle:  var(--neutral-100);
  --bg-tinted:  var(--blue-50);
  --bg-brand:   var(--blue-800);
  --bg-inverse: var(--neutral-900);
  --bg-overlay: var(--alpha-black-70);

  --border-subtle:  var(--blue-100);
  --border-default: var(--blue-150);
  --border-strong:  var(--blue-200);
  --border-brand:   var(--blue-800);

  --gradient-brand: linear-gradient(135deg, var(--blue-900) 0%, var(--blue-700) 50%, var(--blue-500) 100%);

  /* ---- typography ---- */
  --font-title:     "Instrument Sans", sans-serif;
  --font-paragraph: Poppins, sans-serif;

  --fw-light: 300;
  --fw-regular: 400;
  --fw-medium: 500;
  --fw-semibold: 600;
  --fw-bold: 700;

  --lh-100: 1;
  --lh-110: 1.1;
  --lh-120: 1.2;
  --lh-130: 1.3;
  --lh-140: 1.4;
  --lh-150: 1.5;

  --fs-title-display: 13.5rem;
  --fs-title-xl:      8.875rem;
  --fs-title-lg:      6.25rem;
  --fs-title-md:      2.25rem;
  --fs-h1: 4rem;
  --fs-h2: 3.25rem;
  --fs-h3: 2.5rem;
  --fs-h4: 2rem;
  --fs-h5: 1.75rem;
  --fs-h6: 1.375rem;
  --fs-body-lg:   1.25rem;
  --fs-body-md:   1.125rem;
  --fs-body-base: 1rem;
  --fs-body-sm:   0.875rem;
  --fs-caption:   0.75rem;

  --tracking-tightest: -0.04em;
  --tracking-tighter:  -0.03em;
  --tracking-tight:    -0.02em;
  --tracking-none:     0;

  /* ---- radius ---- */
  --radius-none: 0;
  --radius-xs:   0.75rem;
  --radius-sm:   1rem;
  --radius-md:   1.25rem;
  --radius-lg:   1.5rem;
  --radius-xl:   2rem;
  --radius-xxl:  2.5rem;
  --radius-3xl:  3.75rem;
  --radius-button: 6.25rem;
  --radius-circle: 12.5rem;

  /* ---- spacing ---- */
  --space-0: 0;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-section: 7.5rem;

  /* ---- elevation ---- */
  --shadow-card:    0 2px 8px rgba(17, 24, 39, 0.12);
  --shadow-control: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-focus:   0 0 0 3px rgba(41, 112, 255, 0.4);
}
```

### Base element styles

```css
body {
  font-family: var(--font-paragraph);
  font-size: var(--fs-body-base);
  line-height: var(--lh-150);
  letter-spacing: var(--tracking-tight);
  color: var(--text-secondary);
  background: var(--bg-page);
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-title);
  font-weight: var(--fw-regular);
  letter-spacing: var(--tracking-tighter);
  color: var(--text-primary);
}

h1 { font-size: var(--fs-h1); line-height: var(--lh-110); }
h2 { font-size: var(--fs-h2); line-height: var(--lh-120); }
h3 { font-size: var(--fs-h3); line-height: var(--lh-120); }
h4 { font-size: var(--fs-h4); line-height: var(--lh-120); }
h5 { font-size: var(--fs-h5); line-height: var(--lh-130); }
h6 { font-size: var(--fs-h6); line-height: var(--lh-130); }

:focus-visible {
  outline: none;
  box-shadow: var(--shadow-focus);
}
```

---

## 8. Component recipes

Derived from the token set — verify against the live build before committing.

### Button — primary

```css
.btn-primary {
  font-family: var(--font-paragraph);
  font-size: var(--fs-body-base);
  font-weight: var(--fw-medium);
  letter-spacing: var(--tracking-tight);
  color: var(--text-inverse);
  background: var(--brand-default);
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-button);
  border: none;
  transition: background 200ms ease;
}
.btn-primary:hover { background: var(--brand-hover); }
```

### Button — secondary

```css
.btn-secondary {
  color: var(--text-primary);
  background: var(--bg-page);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-button);
  padding: var(--space-4) var(--space-8);
  box-shadow: var(--shadow-control);
}
.btn-secondary:hover { border-color: var(--border-strong); background: var(--bg-tinted); }
```

### Card

```css
.card {
  background: var(--bg-page);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: var(--space-8);
  box-shadow: var(--shadow-card);
}
```

### Input

```css
.input {
  font-family: var(--font-paragraph);
  font-size: var(--fs-body-base);
  color: var(--text-primary);
  background: var(--bg-page);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-sm);
  padding: var(--space-3) var(--space-4);
  box-shadow: var(--shadow-control);
}
.input::placeholder { color: var(--text-tertiary); }
.input:focus { border-color: var(--border-brand); box-shadow: var(--shadow-focus); }
```

### Section

```css
.section        { padding-block: var(--space-section); }
.section--tinted { background: var(--bg-tinted); }
.section--dark   { background: var(--bg-inverse); color: var(--text-inverse-muted); }
.section--dark h1, .section--dark h2, .section--dark h3 { color: var(--text-inverse); }
```

---

## 9. Figma setup order

1. **Fonts first.** Install Instrument Sans and Poppins locally, or the type styles will silently fall back.
2. **Primitives collection** — colors, then font sizes, then radius, then spacing. Number-type variables for sizes; color-type for hex.
3. **Semantic collection** with a `Light` mode. Every value is an alias to a primitive, never a raw hex.
4. **Text styles** — 15 composite styles from §3.4. Figma text styles aren't variables; build them manually and bind fontSize/lineHeight to variables where the plugin allows.
5. **Effect styles** — three, from §6. `shadow/control` needs two stacked drop shadows.
6. **Fill style** for `gradient/brand`.
7. **Publish as a library**, then build components against it.

Import `tokens.json` via the Tokens Studio plugin to skip steps 2–3 and 6.

---

## 10. Known gaps

Things the extraction couldn't give you — decide these deliberately rather than improvising per screen:

- **Spacing scale** — inferred, not authored. Highest-priority gap to verify.
- **Grid and breakpoints** — no container widths or column counts in the variable layer.
- **Semantic status colors** — no success / warning / error / info anywhere. You'll need to define these; they should sit outside the blue ramp.
- **Dark mode** — no dark tokens exist. The semantic layer is structured to support it (add a `Dark` mode and re-point the aliases), but the mapping is unwritten.
- **Motion** — no duration or easing tokens. The 200ms/ease in §8 is a placeholder.
- **Icon sizing** — no scale extracted.
- **Focus states** — absent from source. `shadow/focus` is my addition and is non-negotiable for accessibility.
