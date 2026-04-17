# Design System Document: The Adventurer’s Odyssey

## 1. Overview & Creative North Star: "The Digital Playground"

This design system is a departure from the sterile, rigid layouts of corporate software. Our Creative North Star is **The Digital Playground**. We are not building a website; we are crafting an interactive quest.

To achieve this, the system rejects traditional "flat" design in favor of **Organic Layering**. We move beyond the "template" look by utilizing intentional asymmetry, overlapping elements that "pop" out of their containers, and a scale-defying typography hierarchy. Every interaction should feel like a reward—a "celebratory" moment—achieved through vibrant color transitions and soft, tactile surfaces that mimic high-end physical toys.

---

## 2. Colors & Tonal Depth

Our palette is a high-energy mix of adventurous blues, lush greens, and "achievement" yellows.

### The "No-Line" Rule

**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. Boundaries must be defined solely through background color shifts.

- To separate a section, transition from `surface` to `surface-container-low`.

- To highlight a callout, use a background of `secondary_container` instead of drawing a box around it.

### Surface Hierarchy & Nesting

Treat the UI as a series of physical layers. We use the Material surface tiers to create depth without clutter:

- **Base Layer:** `surface` (#f8f9ff)

- **Primary Sectioning:** `surface_container` (#e5eeff)

- **Interactive Cards:** `surface_container_lowest` (#ffffff) sitting on top of `surface_container_low`.

### The "Glass & Gradient" Rule

To capture the "game-like" essence, use **Glassmorphism** for floating UI (modals, navigation bars).

- Use a semi-transparent `surface` color with a `backdrop-blur` of 20px.

- **Signature Textures:** Main CTAs and Hero backgrounds must use linear gradients (e.g., `primary` to `primary_container`) to provide a "soulful" 3D depth that flat fills cannot replicate.

---

## 3. Typography: Bold & Narrative

We utilize a high-contrast pairing to balance playfulness with readability.

- **Display & Headlines (Plus Jakarta Sans):** Our "Adventure" font. Use `display-lg` (3.5rem) and `headline-lg` (2rem) with tight letter-spacing to create a bold, authoritative, yet friendly presence. These should often be set in `primary` or `secondary` colors to drive the narrative.

- **Body & Labels (Be Vietnam Pro):** Our "Guide" font. This provides technical clarity. `body-lg` (1rem) ensures that instructions are legible, while `label-md` handles the metadata of the "quest."

- **Hierarchy as Identity:** Use extreme scale differences. A `display-lg` headline should sit near a `body-md` description to create a sophisticated, editorial "poster" feel.

---

## 4. Elevation & Depth

In this design system, shadows are light, and surfaces are soft.

- **The Layering Principle:** Depth is achieved by "stacking." A `surface_container_highest` element placed on a `surface` background creates a natural, soft lift.

- **Ambient Shadows:** For floating elements (like action buttons), use "Cloud Shadows": Blur values of 30px-50px with a 6% opacity, using a tinted version of `on_surface` (a deep navy tint) rather than pure black.

- **The "Ghost Border" Fallback:** If a container requires definition against an identical background, use the `outline_variant` token at **15% opacity**. Never use 100% opaque lines.

- **Softness:** All containers must adhere to the **Roundedness Scale**, specifically `lg` (2rem) for cards and `xl` (3rem) for hero sections, reinforcing the approachable, game-like feel.

---

## 5. Components

### Buttons (The "Power-Up" Component)

- **Primary:** Gradient fill (`primary` to `primary_container`), `full` roundedness, and a subtle white inner-glow (top 1px) to simulate a physical button.

- **Secondary:** `secondary_container` background with `on_secondary_container` text. No border.

- **Tertiary:** `tertiary` text with an icon. Only use a background shift on hover.

### Cards & Lists (The "Inventory")

- **Forbidden:** Divider lines.

- **Required:** Use 2rem of vertical white space or a subtle shift to `surface_container_low` to separate items. Cards should use `surface_container_lowest` to "pop" against the background.

### Input Fields

- Use `surface_variant` for the text field container with `md` (1.5rem) rounded corners.

- Focus states should not just change border color; they should increase the element's scale by 2% and deepen the ambient shadow.

### Signature Component: The "Achievement Badge"

- A floating `tertiary_container` chip with `display-sm` typography and a high-blur `tertiary` ambient shadow, used to celebrate user milestones and "mission" completions.

---

## 6. Do’s and Don’ts

### Do:

- **Overlap Elements:** Let images bleed out of their containers or overlap headers to break the "grid" feel.

- **Use "Vibrant Neutrals":** Use `surface_tint` to slightly color your greys, ensuring the "adventure" feel persists even in boring areas.

- **Animate Transitions:** Every surface shift should feel fluid (300ms, cubic-bezier).

### Don't:

- **Don't use 1px lines:** This kills the "premium playground" aesthetic.

- **Don't use pure black text:** Always use `on_surface` (#121c28) to maintain a sophisticated tonal range.

- **Don't use sharp corners:** Nothing in this world should feel "sharp" or "dangerous." Stay within the `md` to `xl` roundedness range.

---

## 7. Design Tokens Reference

### Roundedness Scale

- **xl:** 3rem (Hero sections, Large containers)

- **lg:** 2rem (Standard cards, Modals)

- **md:** 1.5rem (Buttons, Inputs)

- **sm:** 0.5rem (Small tags)

- **full:** 9999px (Pills, Selection chips)

### Typography Scale (Highlights)

- **Display Large:** Plus Jakarta Sans, 3.5rem, Bold.

- **Headline Medium:** Plus Jakarta Sans, 1.75rem, Semi-Bold.

- **Body Large:** Be Vietnam Pro, 1rem, Regular.

- **Label Small:** Be Vietnam Pro, 0.6875rem, Medium (All caps for achievement tags).

### Core Color Tokens (Strategic Use)

- **Primary Action:** `primary` (#005da7)

- **Success/Growth:** `secondary` (#006d35)

- **Warning/Reward:** `tertiary` (#735c00)

- **Standard Background:** `surface` (#f8f9ff)
