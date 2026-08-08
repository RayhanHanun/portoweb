# SYSTEM DESIGN SPECIFICATION: DEV_CORE_V1
## STATUS: LOCKED (STRICT COMPLIANCE REQUIRED)

### 1. THEME DEFINITION
*   **Architecture Style:** Dark-Neobrutalism / Cyberpunk Terminal Mode.
*   **Core Philosophy:** Expose raw DOM structure, zero blur, maximum mechanical contrast, hardware-accelerated motion only. 
*   **Layout Behavior:** Single-Page Application (SPA) with exact anchor-based smooth scrolling. No multi-page routing.

### 2. DESIGN TOKENS (TAILWIND CONFIGURATION)
All AI UI Agents MUST strictly use these design variables. DO NOT invent new colors. DO NOT use soft shadows.

#### A. Color Palette
| Variable Name | Hex Code | Usage Target |
| :--- | :--- | :--- |
| `neo-bg` | `#121212` | Main canvas background |
| `neo-card` | `#1A1A1A` | Background for interactive components |
| `neo-border` | `#000000` | DO NOT USE for dark mode borders. Use `neo-green` or `#333333` |
| `neo-green` | `#00FF41` | Terminal text, success states, primary borders |
| `neo-pink` | `#FF77FF` | Accents, hover states, secondary highlights |
| `neo-yellow`| `#F4E285` | Warnings, soft skills tags, secondary buttons |
| `neo-white` | `#E5E5E5` | Standard body text, off-white to prevent halation |

#### B. Brutalist Shadows (Zero Blur, Static Offsets)
*   `shadow-brutal-green`: `4px 4px 0px 0px rgba(0, 255, 65, 0.8)`
*   `shadow-brutal-pink`: `4px 4px 0px 0px rgba(255, 119, 255, 0.8)`
*   *Interaction Rule:* On `:active` or `whileTap`, box-shadow MUST become `0px 0px 0px 0px` and translate X/Y to simulate a mechanical button press.

#### C. Typography Hierarchy
*   **Primary (Data/Terminal):** `Fira Code` or `JetBrains Mono`. Used for Headers, Navbar, System Logs, Tags.
*   **Secondary (Readability):** `Inter` or `Geist`. Used strictly for paragraph text/descriptions.

### 3. ANIMATION PHYSICS ENGINE (FRAMER MOTION)
AI Agents MUST NOT use standard CSS `ease-in-out` for interactive elements. All drag, hover, and scroll reveals MUST use the following Spring configuration:

```javascript
export const brutalSpring = { 
  type: "spring", 
  stiffness: 400, 
  damping: 25, 
  bounce: 0.4 
};
```

### 4. BENTO BOX GRID RULES (CSS GRID)
*   **Framework:** Strict use of CSS Grid for `#about` and `#projects` sections.
*   **Constraint:** `grid-cols-1` on mobile, `md:grid-cols-2`, `lg:grid-cols-3` or `lg:grid-cols-4` on desktop.
*   **Gap:** Consistent `gap-4` or `gap-6`. No asymmetric gaps unless explicitly defining a span (e.g., `col-span-2`).