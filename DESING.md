# Design System: Arcade Bear World

## 1. Overview & Creative North Star

**Creative North Star: "The Tactile Pixel Quest"**

This design system moves away from the flat, sterile web and toward a high-fidelity, "playable" editorial experience. We are not just building an invitation; we are constructing a 2.5D JRPG world. The aesthetic blends the precision of **Voxel Geometry** with the warmth of a **Plush Bear Narrative**.

To break the "template" look, we employ **Intentional Asymmetry**. Containers should not always be perfectly centered; they should feel like floating UI windows from a classic 90s console game. We use "Extruded Depth" to make every element feel like a physical button or block that a child would want to press. This is a "Premium Playful" approach—sophisticated enough for a design-forward event, yet tactile enough for a 9-year-old’s imagination.

---

## 2. Colors & Surface Philosophy

The palette is a sophisticated take on primary arcade tones, utilizing the Material Design token set to create a rich, layered environment.

### The "No-Line" Rule & Tonal Depth

Standard 1px hairline strokes are strictly prohibited. In this system, boundaries are created by **3D Extrusion** or **Tonal Shifts**.

- **Physicality:** Use `surface_container` variants to define sections. A "Map" section should sit on `surface_container_low`, while the "Stats/Details" card should be `surface_container_lowest`.

- **The "Voxel Edge":** Instead of a border, use a 4px bottom-offset shadow using `tertiary` (#934B19) to create a "thick" 3D base for any `primary` or `secondary` element.

### Color Roles

- **Primary (#0C6780 / #87CEEB):** "The Sky World." Used for high-level hero containers and primary navigation.

- **Secondary (#705D00 / #FCD400):** "The Power-Up." Reserved for interactive elements, "New High Score" alerts, and call-to-action (CTA) backgrounds.

- **Tertiary (#934B19):** "The Bear/Ground." Used for the 3D "extrusion" effect and grounding elements.

- **Signature Textures:** Apply a 10% opacity noise texture or a subtle pixel-grid overlay to `primary_container` to give it a "screen-glow" feel.

---

## 3. Typography: The Narrative Voice

We balance "Playful Modern" with "Arcade Retro" to ensure readability while maintaining the JRPG soul.

- **Display & Headlines (Plus Jakarta Sans):** These must be set with tight letter-spacing and "Heavy" weights. The rounded nature of Jakarta Sans provides the "friendly bear" feel.
  - _Styling Tip:_ Use `headline-lg` with a text-shadow of `tertiary` to mimic 8-bit title screens.

- **Body (Be Vietnam Pro):** High legibility for party details (location, time). This acts as the "Instruction Manual" text.

- **Accents & Labels (Space Grotesk):** While the prompt asks for pixel-style fonts, we use Space Grotesk as our functional "Pixel-Lite" alternative for technical data (RSVPs, dates) to ensure maximum accessibility across all devices.

---

## 4. Elevation & Depth: The "3D Voxel" Principle

Forget standard soft shadows. This system uses **Hard-Edge Extrusion**.

- **The Layering Principle:**
  - Base: `surface`

  - Mid-ground (UI Panels): `surface_container_low`

  - Fore-ground (Interactive): `primary_container` with a `tertiary` bottom shadow.

- **Ambient Shadows:** We do not use "drop shadows" for depth. We use a **4px - 8px block offset**. If an element is "floating" (like a tooltip), use a `primary_fixed_dim` shadow at 20% opacity with a large 24px blur to simulate a "cloud" floating over the arcade world.

- **Glassmorphism:** For the "HUD" (Heads-Up Display) navigation, use `surface_container_lowest` at 80% opacity with a `20px backdrop-blur`. This simulates a transparent game menu overlay.

---

## 5. Components

### Buttons (The "Arcade Push")

- **Primary:** Background `secondary_container`, 4px hard bottom border of `secondary`, `label-md` (Space Grotesk) text in `on_secondary_container`. On hover, the button should "sink" (transform: translateY(2px)) and the shadow should shrink.

- **Tertiary (The "Ghost" Button):** No background. Use `outline` at 20% opacity only.

### Cards (The "Quest Log")

- **Style:** No borders. Use `surface_container_highest` for the card body.

- **Header:** A contrasting "tab" at the top using `primary` with `on_primary` text.

- **Constraint:** Forbid divider lines. Use 24px of vertical padding (`xl` spacing) to separate content blocks.

### Input Fields (The "Character Name Entry")

- **Style:** Thick 3px borders using `outline_variant`.

- **Focus State:** Change border color to `primary` and add a "glow" using a 0px 0px 10px `primary_fixed_dim` shadow.

### Chips (The "Inventory Items")

- Roundedness: `full`.

- Background: `primary_fixed`.

- Effect: A tiny pixel-art icon of a bear or a coin should precede the text.

---

## 6. Do’s and Don’ts

### Do:

- **Embrace Asymmetry:** Offset your hero images or "Bear" illustrations so they break the container edges.

- **Use Tonal Layering:** Separate the "When/Where" from the "Story" using `surface_container_low` vs `surface_container_high`.

- **Keep it Tactile:** If it looks like a button, it should behave like one (haptic-style transitions).

### Don’t:

- **No 1px Lines:** Do not use thin lines to separate items. It kills the "Voxel" aesthetic.

- **No Generic Icons:** Avoid thin-line SVG icons. Use thick-stroke or "blocky" icon sets that match the `outline` weight.

- **No Flat Shadows:** Avoid the default `0px 2px 4px rgba(0,0,0,0.1)`. If there is a shadow, it must have a color tint (e.g., a Brown/Tertiary tint).

---

## 7. Signature Element: The "World Map" Grid

To elevate this from a standard invite, the background of the main `surface` should feature a subtle "dot-grid" pattern using `outline_variant` at 5% opacity. This evokes the feeling of a coordinate-based game world, providing an underlying structure that feels both technical and playful.
