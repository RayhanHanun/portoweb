# BUILD PLAN & IMPLEMENTATION ARCHITECTURE
## PROJECT: DEV_CORE_V1 (Single-Page Portfolio)
## TARGET SUBJECT: Rayhan Hanun (Full-Stack Developer & Systems Analyst)
## STATUS: STRICT COMPLIANCE MANDATORY

### 1. ARCHITECTURE & TECH STACK OVERVIEW
*   **Core Framework:** Next.js 14+ (App Router, strictly Client Components `use client` where motion is involved).
*   **Language:** TypeScript (Strict typing required. Any `any` types will fail the build).
*   **Styling Engine:** Tailwind CSS + `clsx` + `tailwind-merge` (for dynamic class overriding).
*   **Physics/Motion Engine:** Framer Motion (Strict adherence to `brutalSpring` config).
*   **Micro-Interactions:** `react-bits` (Terminal Typing Effect) and `21st.dev` logic (Magnetic Buttons).

### 2. DIRECTORY STRUCTURE BLUEPRINT
AI Agent MUST scaffold the project exactly as follows:
```text
src/
├── app/
│   ├── layout.tsx         # Global font injection (Fira Code, Inter) & Meta tags
│   ├── page.tsx           # Main SPA Aggregator (Renders all sections)
│   └── globals.css        # Tailwind directives & Dotted Grid Background CSS
├── components/
│   ├── ui/
│   │   ├── TerminalCard.tsx      # Polymorphic wrapper component (Framer Motion)
│   │   ├── MagneticButton.tsx    # 21st.dev logic injected with brutalSpring
│   │   └── BrutalistToggle.tsx   # (Reserved for future/Post-deployment)
│   ├── sections/
│   │   ├── Navbar.tsx            # Sticky anchor navigation
│   │   ├── HeroSection.tsx       # Typing effect & Glitch profile
│   │   ├── AboutSection.tsx      # Bento Box Grid implementation
│   │   ├── ProjectsSection.tsx   # Project mappings
│   │   └── ContactSection.tsx    # Form & Network transmission
├── data/
│   └── portfolioData.ts          # Centralized raw data source
└── lib/
    └── utils.ts                  # cn() utility function
```

### 3. CENTRALIZED DATA INJECTION (`src/data/portfolioData.ts`)
Before building UI components, the AI MUST populate this exact JSON structure:
*   **Profile:** Name: "Rayhan Hanun", Role: "Fullstack Web Developer | Technology Innovation".
*   **Academic:** Universitas AMIKOM Yogyakarta (S1 Analisis Sistem & Sistem Informasi, 2024-Present), SMK SMTI Yogyakarta (Mechatronics & Robotics, 2018-2022).
*   **Experience Grid Data:**
    1.  `{ title: "Chief Technology Officer", company: "BINA BUMI", duration: "7 Months", desc: "Led technical direction and practical tech innovation." }`
    2.  `{ title: "Frontend Developer", company: "Amikom Computer Club", duration: "8 Months", desc: "Developed responsive web UIs and collaborative tech projects." }`
    3.  `{ title: "Logistics Operator", company: "PT. Astra Daihatsu Motor", duration: "2 Years", desc: "Managed inventory flow and industrial material operations." }`
    4.  `{ title: "Mechanical Technician", company: "Solo Mechatronic Indonesia", duration: "7 Months", desc: "Technical support and industrial troubleshooting." }`
*   **Tech Stack:** Laravel, React, Next.js, Tailwind CSS, MySQL, Python, IoT.

### 4. SPRINT EXECUTION LOGIC (STRICT CHRONOLOGY)

#### SPRINT 1: Core Systems & Wrappers
1.  **Initialize Next.js & Tailwind.**
2.  **Global CSS:** Inject the `neo-bg` color (`#121212`) and create a repeating dotted background pattern in `globals.css`.
3.  **Build `<TerminalCard />`:**
    *   *Props Required:* `children` (ReactNode), `headerTitle` (string, optional), `accentColor` (enum: green, pink, yellow, transparent), `isInteractive` (boolean).
    *   *Motion Logic:* If `isInteractive` is true, apply `whileHover={{ x: -4, y: -4 }}` and `whileTap={{ x: 4, y: 4, boxShadow: '0px 0px 0px 0px #000' }}` using `brutalSpring`.

#### SPRINT 2: Anchor Navigation (`<Navbar />`)
1.  **Layout:** `fixed top-0 w-full z-50` with a thick `border-b-[3px] border-neo-green`.
2.  **Navigation Links:** Implement anchor tags (`href="#projects"`, etc.).
3.  **Scroll Behavior:** Ensure `html { scroll-behavior: smooth; }` is active.

#### SPRINT 3: Terminal Hero (`<HeroSection />`)
1.  **Typing Effect:** Use `react-bits` or custom `useEffect` to type out: `> ACCESS GRANTED: RAYHAN HANUN // FULL-STACK ENGINEER`.
2.  **Profile Visual:** Insert an image with a CSS filter: `grayscale contrast-125`. On hover, remove grayscale and apply a slight X-axis translation (Glitch simulation).
3.  **Magnetic CTA:** Implement `<MagneticButton label="DEPLOY_PROJECTS" href="#projects" />`.

#### SPRINT 4: Bento Box Analytics (`<AboutSection />`)
1.  **CSS Grid Enforcement:** The wrapper MUST use `grid grid-cols-1 lg:grid-cols-3 gap-6`. No Flexbox for the main layout.
2.  **Quote Block:** `col-span-1 lg:col-span-3`. Large typography executive summary.
3.  **Academic & Skills:** `col-span-1`. Render lists as solid Neobrutalist tags (tight padding, thick borders).
4.  **Experience:** Map over `portfolioData.ts` to render 3-4 `<TerminalCard>` components. These must act as static data logs (`isInteractive={false}`).

#### SPRINT 5: Executable Projects (`<ProjectsSection />`)
1.  **Layout:** CSS Grid, `lg:grid-cols-2`.
2.  **Card Requirements:** Use `<TerminalCard isInteractive={true}>`.
3.  **Image Optimization:** Use Next.js `<Image />` component with `border-[2px] border-neo-border` separating the image from the text below it.

#### SPRINT 6: Network Transmission (`<ContactSection />`)
1.  **Form Data:** Render raw text inputs `bg-transparent border-b-[3px] border-neo-border focus:border-neo-green outline-none`.
2.  **Social Grid:** A 2x2 CSS grid displaying large monospace links to LinkedIn, GitHub, Instagram, and WhatsApp.