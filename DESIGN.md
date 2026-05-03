---
name: Cueserve
description: AI-native technology partner — enterprise brand built on confident clarity and approachable expertise
colors:
  ocean-depth: "#0c385a"
  ocean-depth-hover: "#1a4a6b"
  ocean-depth-mid: "#0e4a73"
  meridian-blue: "#2384c6"
  meridian-blue-hover: "#3991cd"
  meridian-blue-soft: "#7db8d8"
  surface: "#ffffff"
  surface-tint: "#f4f8fb"
  surface-subtle: "#fafcfe"
  surface-accent: "#eef6fc"
  surface-dark: "#0f1920"
  border: "#e8eff5"
  border-strong: "#d0dfec"
  border-accent: "#c8dff0"
  ink: "#1e2e3d"
  ink-muted: "#5a7a91"
  ink-subtle: "#647f93"
  ink-faint: "#8ba4b8"
  ink-trace: "#b0c8db"
  success: "#1a9b5c"
  success-tint: "#e8f7ef"
  warning: "#d97706"
  warning-tint: "#fef3c7"
  error: "#dc2626"
  error-tint: "#fee2e2"
typography:
  display:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  body-sm:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.1em"
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  2xl: "20px"
  full: "9999px"
spacing:
  gutter: "1.5rem"
  section: "5rem"
  page-max: "75rem"
  content-max: "53.75rem"
components:
  button-primary:
    backgroundColor: "{colors.ocean-depth}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.ocean-depth-hover}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  button-cta:
    backgroundColor: "{colors.meridian-blue}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "14px 32px"
  button-cta-hover:
    backgroundColor: "{colors.meridian-blue-hover}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "14px 32px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ocean-depth}"
    rounded: "{rounded.sm}"
    padding: "13px 28px"
  button-ghost-hover:
    backgroundColor: "transparent"
    textColor: "{colors.meridian-blue}"
    rounded: "{rounded.sm}"
    padding: "13px 28px"
---

# Design System: Cueserve

## 1. Overview

**Creative North Star: "The Trusted Advisor's Office"**

Cueserve's visual system is built around one idea: a visitor should feel they have walked into the office of someone who has already solved their problem. The design is confident without grandstanding, approachable without being casual. Every choice — the compressed headlines, the navy that anchors rather than floats, the brand-tinted shadows — communicates competence before copy does.

This is not an AI product aesthetic. There are no particle swarms, no glowing neural nets, no abstract intelligence visualizations. The system trusts specificity: real outcomes, real numbers, real workflows documented in concrete terms. Where other AI services sites perform ambition, this system demonstrates it. The visual design is proof-of-work.

The palette is committed to two colors. Ocean Depth navy anchors authority across full-section backgrounds and primary CTAs; Meridian Blue signals action and progress at interactive moments. Everything else serves these two: surfaces step back, borders are quiet, text scales from near-black to ghost. The brand colors carry full weight precisely because nothing competes with them.

**Key Characteristics:**
- Committed two-color brand strategy: Ocean Depth anchors, Meridian Blue activates
- Display headings with compressed negative tracking (-0.025em to -0.03em) — no airy, floating type
- Elevation earned through structure and interaction; flat surfaces at rest
- Alternating dark/light section rhythm giving Ocean Depth full-section presence on every page
- Section eyebrow labels (11px, uppercase, 0.1em tracking, Meridian Blue) as a consistent wayfinding convention
- Brand-tinted shadow vocabulary using rgba(12, 56, 90) so depth cues reinforce brand color

## 2. Colors: The Ocean Depth Palette

Two brand anchors — deep authority and active signal — supported by a soft blue-neutral family across surfaces, borders, and text steps.

### Primary
- **Ocean Depth** (`#0c385a`): The brand's gravitational center. Used for CTA buttons, ProcessSection background, hero headlines, nav CTA, and any surface that must communicate weight and authority. Does not appear as passive decoration.
- **Ocean Depth Mid** (`#0e4a73`): Gradient partner to Ocean Depth inside the CTA banner (`linear-gradient(135deg, #0C385A 0%, #0E4A73 100%)`). Not used independently outside dark-section contexts.
- **Meridian Blue** (`#2384c6`): Signals action, progress, and interaction. Used on section eyebrow labels, icon accents, link hover color, active tab fill, interactive chip text, check-icon containers. Carries exactly one voice: "this is live, clickable, and worth your attention now."
- **Meridian Blue Soft** (`#7db8d8`): Meridian Blue at reduced saturation. Used for subdued accent text on dark-navy backgrounds, such as the ProcessSection eyebrow label.

### Neutral (Surfaces)
- **Clear Canvas** (`#ffffff`): Primary page background and card fill at rest.
- **Cloud Tint** (`#f4f8fb`): Alternating section background one step cooler than white. Used by FeaturesSection.
- **Whisper Subtle** (`#fafcfe`): Panel secondaries and feature right-panel background.
- **Accent Wash** (`#eef6fc`): Icon container backgrounds, service chip fills, check-icon badges — Meridian Blue at approximately 5% over white.
- **Deep Canvas** (`#0f1920`): Footer background. Near-black with a strong Ocean Depth undertone.

### Neutral (Borders)
Borders step from `#e8eff5` (default resting border) to `#d0dfec` (strong, structural dividers) to `#c8dff0` (accent-tinted, used on interactive chips and focus-adjacent borders).

### Neutral (Text)
Text steps from `#1e2e3d` (ink, primary body) through `#5a7a91` (muted, secondary body), `#647f93` (subtle, supporting text), `#8ba4b8` (faint, metadata labels), `#b0c8db` (trace, disabled states), to `#c0d5e6` (ghost, barely visible). Use the step nearest the required contrast — never skip to a lighter step unless the surrounding surface justifies it.

### Named Rules
**The Two-Color Conviction Rule.** Ocean Depth and Meridian Blue are the only accent-weight colors in this system. Neither appears decoratively. Ocean Depth anchors trust; Meridian Blue signals action. No other color competes for attention.

**The Brand-Tinted Depth Rule.** All shadows use `rgba(12, 56, 90, α)`. Pure black (`rgba(0,0,0)`) shadows are prohibited. Even depth cues reinforce Ocean Depth.

## 3. Typography: The Precision Pairing

**Display Font:** Space Grotesk (with system-ui, sans-serif fallback)
**Body Font:** DM Sans (with system-ui, sans-serif fallback)
**Mono Font:** JetBrains Mono (for technical annotations, pipeline labels, code-adjacent contexts)

**Character:** Space Grotesk carries the brand's confidence: geometric, compressed, authoritative without coldness. DM Sans handles the detail work: humanist warmth that keeps dense technical copy readable at body scale. Together they balance conviction with approachability — the brand's stated personality expressed through type alone.

### Hierarchy
- **Display** (700, clamp 2.75rem–3.5rem, line-height 1.08, tracking -0.03em): Hero headlines only. The tightest tracking in the system. Always set in Ocean Depth on light surfaces or white on dark. Never used inside cards or secondary sections.
- **Headline** (700, 2.25rem, line-height 1.1, tracking -0.025em): Section H2 headings. Center-aligned only for single-focus announcement sections (ProcessSection); left-aligned for all content-driven sections.
- **Title** (700, 1.625rem, line-height 1.25, tracking -0.02em): Card and sub-section H3 headings inside FeaturesSection and similar two-column layouts.
- **Body** (400/500, 1.0625rem, line-height 1.7): Primary running text in section introductions and hero subheadings. Maximum line length 70ch. Weight 500 reserved for lead paragraphs or first-line emphasis.
- **Body Small** (400, 0.875rem, line-height 1.6): Card body copy, feature bullet points, footer link labels, supporting metadata.
- **Label** (600, 0.6875rem, tracking 0.1em, uppercase): Section eyebrow labels. Always in Meridian Blue on light, Meridian Blue Soft on Ocean Depth backgrounds. The widest tracking in the system, earned by its smallest size.
- **Mono** (400, 0.8125rem, line-height 1.5): JetBrains Mono for pipeline step labels, technical identifiers, chat-interface copy, and code-adjacent visual components only.

### Named Rules
**The Compressed Headline Rule.** Display and Headline never carry positive letter-spacing. Tight negative tracking (-0.025em to -0.03em) distinguishes this system from generic corporate type. Any headline that reads "airy" or "open" is wrong and must be corrected.

**The Minimum Floor Rule.** No user-readable copy falls below 0.75rem. Label class is 0.6875rem and is the documented exception — used only for eyebrows and metadata, never for instructional or body copy.

## 4. Elevation: Structural, Not Decorative

This system uses shadows as structural signals, never as ambient decoration. A shadow marks: this element is above the resting plane because hierarchy or interaction demands it. Surfaces are flat at rest.

All shadows use rgba(12, 56, 90, α) — the Ocean Depth color tinted over white. Pure black shadow values are prohibited in this system.

### Shadow Vocabulary
- **cs-sm** (`0 2px 8px rgba(12, 56, 90, 0.06)`): Structural separation only. Appears on the sticky header when scrolled, and on the feature tab pill container. Marks hierarchy, not decoration.
- **cs-md** (`0 4px 16px rgba(12, 56, 90, 0.10)`): Interactive hover lift on content cards. Applied via hover state only; never present at rest.
- **cs-lg** (`0 4px 24px rgba(12, 56, 90, 0.08)`): Structural container elevation. Reserved for large panels that act as contained environments (FeaturesSection's two-column panel).
- **cs-xl** (`0 8px 32px rgba(12, 56, 90, 0.16)`): Highest elevation tier. Reserved for modals and overlays that float above all other content.
- **cs-glow** (`0 6px 24px rgba(12, 56, 90, 0.22)`): Intentional focus or press glow state on primary CTAs. Not used passively.

### Named Rules
**The Structural-Only Rule.** Shadow does not appear on passive decorative elements. A card at rest is flat. Shadow is earned through hover interaction, scrolled header state, or structural containment (panel, dialog). Any shadow on a passive, non-interactive surface is incorrect and must be removed.

## 5. Components

### Buttons
Confident yet approachable: each variant's intent is unmistakable without excess weight. Transitions are 150ms ease-out — responsive, not sluggish.

- **Shape:** 6px radius for primary and ghost (decisive, not sharp); 8px radius for CTA on dark (marginally warmer for banner context).
- **Primary** (Ocean Depth background, white text, 14px/28px padding, 6px radius): One per hero or main section. "Book a Free Call", "Start a Project". Used on light surfaces where Ocean Depth has maximum contrast.
- **Primary Hover:** Background shifts to `#1a4a6b`. No scale transform, no glow. Controlled darkening only.
- **CTA** (Meridian Blue background, white text, 14px/32px padding, 8px radius): Used exclusively on dark-navy surfaces (CTA Banner, ProcessSection). The one context where Meridian Blue fills a button — the dark background earns it.
- **Ghost** (transparent, 1.5px border `#c8dff0`, Ocean Depth text, 6px radius): Secondary actions on white surfaces ("See Our Services →"). Border and text transition to Meridian Blue on hover.
- **Ghost on Dark** (transparent, 1.5px border `rgba(255,255,255,0.25)`, `rgba(255,255,255,0.75)` text): Secondary actions on navy backgrounds. Border and text transition to full white on hover.

### Navigation
Sticky at z-50. White surface at rest, `backdrop-blur-md` with cs-sm shadow on scroll. Max-width 75rem, horizontal padding 1.5rem. Link type: DM Sans 500, 0.875rem. Active state: 2px bottom border in Meridian Blue, Ocean Depth text. Inactive: ink-subtle text, transparent border, transitions to Ocean Depth on hover. Mobile collapses to a hamburger at md breakpoint; mobile menu renders inline below the nav bar with surface-tint row backgrounds.

### Cards (Feature and Pillar)
Rounded-xl (12px), border in `#e8eff5`, white background at rest. On hover: border steps to `#c8dff0`, background steps to surface-subtle, cs-md shadow appears. Padding: p-5 (20px) for compact pillar cards, p-10 to p-12 for large feature panel interiors. Icon containers inside cards: rounded-lg (8px), surface-accent fill, Meridian Blue icon.

### Chips and Eyebrow Labels
- **Section Eyebrow:** 0.6875rem, 600 weight, uppercase, tracking 0.1em, Meridian Blue (`#2384c6`) on light — Meridian Blue Soft (`#7db8d8`) on Ocean Depth backgrounds. Positioned above the H2 with mb-3 to mb-4 spacing. Every named section has one.
- **Feature Tag Chip:** 4px radius, surface-accent fill, Meridian Blue text, 0.6875rem, 600 weight, tracking 0.04em. Compact inline badge above feature panel headings.

### Feature Tab Bar
Pill container: rounded-xl (12px) border, white background, cs-sm shadow. Internal padding: 6px. Tab items: rounded-lg (8px), 10px/20px padding. Active state: Ocean Depth background, white text. Inactive state: transparent background, ink-muted text, transitions to Ocean Depth on hover. Background fill is the selection signal — no underline, no border indicator.

### Section Rhythm
Backgrounds alternate by section in a fixed order: white (Hero, WhySection), surface-tint (FeaturesSection), Ocean Depth navy (ProcessSection), white (CTABanner outer), dark-canvas (Footer). The navy and dark-canvas sections interrupt the light rhythm deliberately to reset attention. Do not add a dark section without purpose, and do not repeat the pattern out of order.

## 6. Do's and Don'ts

### Do:
- **Do** place a section eyebrow label (0.6875rem, uppercase, Meridian Blue, tracking 0.1em) above every named section heading to orient the visitor at a glance.
- **Do** compress Display and Headline tracking to -0.025em or -0.03em. Headlines that look open or airy have lost the brand's precision character.
- **Do** tint every shadow with rgba(12, 56, 90, α). Pure black shadows break the brand's color coherence.
- **Do** let Ocean Depth fill at least one full-width section background per page so the navy reads as a brand color, not an accent.
- **Do** write specific outcomes in copy: real numbers, real timelines, named technologies. Vague claims are invisible to the skeptical evaluator this site is built for.
- **Do** reserve Meridian Blue for interactive and active states. Its sparing use is what makes it signal.
- **Do** apply card hover lift (shadow-cs-md, border-accent, surface-subtle background) consistently so interactive cards feel alive.

### Don't:
- **Don't** look like a generic IT outsourcing site. No stock photography of handshakes, no blue gradient hero banners, no copy that could apply to any company ("Transforming Business Through Technology"). Every claim must be specific to Cueserve.
- **Don't** look like a hyperscaler AI vanity page (Google AI, Microsoft Azure style). No abstract particle visualizations, no floating neural network imagery, no swirling data-stream graphics. Concrete outcomes only; abstraction is a credibility tax.
- **Don't** use the dark AI aesthetic: neon gradients on black, matrix rain effects, neon-on-dark-canvas palettes, or cyberpunk reference points. Ocean Depth is a navy for authority, not a canvas for glow effects.
- **Don't** apply `border-left` or `border-right` greater than 1px as a colored accent stripe on cards, callouts, or list items. Use a full border, background tint, or leading icon instead.
- **Don't** apply `background-clip: text` with a gradient fill. Single solid colors only; emphasis comes from weight or size.
- **Don't** add shadows to passive, flat surfaces at rest. Shadow is earned through hover interaction, structural header separation, or contained panel contexts.
- **Don't** use glassmorphism as a decorative style. Blur with transparency is not part of this system.
- **Don't** apply positive letter-spacing to headings or body text. Tracking 0.1em exists only for the 0.6875rem eyebrow label. Every other text role is zero or negative.
- **Don't** build identical card grids: same size, same icon-plus-heading-plus-text structure, repeated in a uniform n-column layout. Vary density, grid structure, and content format to reflect the brand's precision rather than defaulting to the SaaS content grid cliche.
