# Product Requirements Document
## Mahesh Mokalkar — Personal Brand Website Redesign

**Prepared for:** maheshmokalkar.in
**Version:** 1.0
**Date:** September 2026
**Doc owner:** Design & Engineering

---

## 1. Background & Context

### 1.1 Who is the site for
Mahesh Mokalkar is a multi-hyphenate public figure based in **Wardha, Maharashtra, India**:

| Role | Detail |
|---|---|
| **Profession** | Assistant Engineer, Grade‑II — Public Works Department (PWD), Government of Maharashtra. A qualified Civil Engineer who manages multi-crore infrastructure projects (roads, buildings, bridges). |
| **Rotary** | Past District Governor, Rotary International District 3030. Rotarian since 1997. Founded/drove formation of Rotary Clubs of Hinganghat, Arvi, and Wani. Recipient of the "Outstanding President Award" and "Rotary Service Award" for Polio Eradication. |
| **Signature initiative** | "Sapne Sach Hue" (Dreams Come True) — years of work giving underprivileged children memorable experiences. |
| **Flagship project** | 105 pediatric heart surgeries funded in a single Rotary year (~₹1 crore). |
| **Other social work** | Malnutrition meal programs run under expert dietician supervision; "Night School" for rag-pickers' children (recognized and funded by the Govt. of Maharashtra); homes for the homeless; vocational training for girls; workshops for the differently-abled; interest-free self-employment loans; school/child adoption for education; health check-up camps; blood donation drives; disaster management response. |
| **Institution founded** | Founder-President (3 consecutive terms) of a 550-member credit co-operative housing society — "Shelter for the Shelterless" — providing finance to those without conventional collateral. |
| **Publication** | Author of *GENIUS*, a handbook for departmental engineers in Maharashtra. |
| **Personal** | Wife **Aarti Mokalkar** — Past President, Inner Wheel Club of Gandhi City Wardha; both are Rotary Major Donors. Children: **Purvesh** and **Disha**. |
| **Tagline (site)** | "Dynamic yet dedicated; Energetic yet staid; Suave yet simple — that is Mahesh!" |
| **Contact** | Wardha, Maharashtra, IND · maheshdg1617@gmail.com · +91 96898 98968 |
| **Social** | Facebook, Twitter/X, Instagram (@mahesh_mokalkar), LinkedIn |

### 1.2 Current-state audit (as fetched from live site)

**IA / navigation:** Home · About (dropdown: About Me / As Gov. Employee / As Rotarian) · Blog · Gallery · Downloads · Contact Me.

**Home page sections (top to bottom):**
1. Header/hero — portrait photo + "I'm Mahesh Mokalkar" script headline, role subtitle ("Asst. Engineer (PWD)", "Past Dist. Governor RID3030"), signature graphic.
2. "Aai‑Baba" tribute block — dark panel, parents-photo collage, quote about parents/honor.
3. "As a Rotarian" — portrait + Rotary quote.
4. Auto-rotating image carousel (13 slides) of Rotary/handover/donation moments.
5. "As Govt. Employee" — loyalty statement + photo at a statue/memorial.
6. "Moments" — quote + 3×4 photo grid (12 thumbnails).
7. Full-width banner photo (charkha/Gandhi statue with couple).
8. Second carousel (award ceremonies, family, felicitations).
9. Blog Post grid (4 cards) — **currently polluted with spam/unrelated posts** (Korean casino SEO spam, generic AI news, Belgian/French gambling spam) — must be purged.
10. Testimonials carousel — 5 Rotarian endorsements (Rtn. Kishor Kedia, Rtn. Madhu Rughwani, Rtn. Shabbir Shakir, Rtn. Rajiv Sharma, Rtr. Anand Zunzunwala).
11. Footer — bio blurb, social icons, quick links (Gallery/Downloads), contact block, copyright.

**Sub-pages:** About Me (long-form bio, reproduced above), As Gov. Employee (short statement), As Rotarian (short statement + one photo), Gallery (photo grid), Downloads (single CV file — currently a legacy `.doc`), Contact Me (contact form page), Blog (WordPress post archive).

**Known problems to fix in the redesign:**
- Spam/junk blog content unrelated to the person — needs full content purge and an editorial policy for what's allowed.
- Many `<img>` tags resolve empty/broken (lazy-load class present but `src` missing in static fetch) — indicates reliance on JS lazy-loading without fallbacks; new build must guarantee real `src`/`srcset`.
- No real testimonial photos rendered (icon placeholders only).
- Legacy WordPress/Elementor visual language: default carousel arrows, dashed section dividers, plain card borders, no motion design, no icon system, inconsistent spacing.
- Thin content on "As Gov. Employee" and "As Rotarian" sub-pages relative to their importance — redesign should enrich these with structured facts, stats, and timelines rather than a single paragraph.
- CV download is a `.doc` file — should become a designed, downloadable `.pdf`.

---

## 2. Goals

1. **Reposition** the site as a modern personal-brand / public-service portfolio — not a WordPress brochure site.
2. **Tell three intertwined stories** clearly: the *Engineer* (public infrastructure), the *Rotarian* (District Governor, philanthropy), and the *Family man / Person* (values, "Aai-Baba", Aarti, Purvesh, Disha).
3. **Quantify the impact** — turn prose claims (105 surgeries, ₹1 crore, 550 members, 3 clubs founded) into visual stat/metric components instead of buried paragraph text.
4. Introduce a **modern visual system**: custom color palette, icon set, card system, and motion design (Framer Motion, scroll-triggered reveals) while staying dignified/professional (this is a civic/public figure, not a startup).
5. Fix technical debt: broken images, spam content, non-semantic markup, no responsive image strategy, `.doc` download.
6. Keep it easy for the client to self-manage content later (headless CMS or structured JSON content model) — you will supply new photography ("I will provide all the pics later"), so the build must treat all images as swappable placeholders keyed by section.

## 3. Non-goals
- No e-commerce, no login/auth, no multilingual switcher in v1 (structure content so Marathi/Hindi can be added later).
- Not rebuilding on WordPress — target a modern JS stack (see §7).
- Not designing new photography — PRD assumes placeholder/blurred image slots until real assets are supplied.

---

## 4. Brand & Visual Identity

### 4.1 Color palette (from supplied palette image — bronze-forward)

| Token | Hex | RGB | Role |
|---|---|---|---|
| `--color-primary` (Bronze) | `#924931` | 146, 73, 49 | **Primary brand color.** Headlines, primary buttons, active nav state, icon fills, key accents, link hover. |
| `--color-secondary` (Sand) | `#E7CFAE` | 231, 207, 174 | Section backgrounds, card fills, soft dividers, badge backgrounds. |
| `--color-tertiary` (Camel/Gold) | `#D4A96B` | 212, 169, 107 | Secondary buttons, hover states, highlight underlines, stat number accents, progress/rating fills. |
| `--color-ink` (Deep Espresso) | `#350D06` | 53, 13, 6 | Near-black replacement — body text on light sections, dark section backgrounds (footer, testimonials, "Aai‑Baba" panel), header background. |
| `--color-surface` | `#FFFFFF` | 255,255,255 | Base canvas / card surface on light sections. |
| `--color-surface-alt` | `#FBF6EF` | derived tint of Sand | Alternating section background for rhythm. |

**Usage rules:**
- Primary Bronze `#924931` = the dominant brand color (nav accents, CTA buttons, icon strokes, active states, key headline words).
- Ink `#350D06` replaces pure black everywhere (text, dark sections) for warmth and brand consistency — never use `#000000`.
- Sand `#E7CFAE` and Camel `#D4A96B` used together create the "warm terracotta" feel for cards, tags, quote blocks, and stat chips.
- Maintain **WCAG AA contrast**: Ink-on-Sand and Bronze-on-White both pass; verify Camel is never used for body text (decorative/accent only).
- Gradients: allow a subtle Bronze→Camel diagonal gradient (135deg) for hero backgrounds and CTA buttons only — used sparingly, not on every card.

### 4.2 Typography
- **Display/serif** for the personal "signature" feel (retain the handwritten-script energy of "I'm Mahesh Mokalkar" from the old hero, but reimplemented as a proper display font, e.g. `Fraunces` or `Playfair Display`, not an image).
- **Sans-serif workhorse** for body/UI: `Inter`, `Manrope`, or `General Sans` — variable font for weight-based hierarchy.
- Type scale: modular scale 1.25, base 16px, hero H1 ~64px desktop / 36px mobile.

### 4.3 Iconography
- One consistent icon family throughout — **Lucide** or **Phosphor Icons** (duotone weight), recolored to Bronze/Ink, never mixed styles.
- Custom icon set for the three pillars: 🛠 Engineer (blueprint/bridge icon), ⚙ Rotary (Rotary gear-wheel motif abstracted, not the literal trademarked logo), ❤ Community/Family (heart-hands).
- Stat icons for: children helped, surgeries funded, clubs founded, years of service, members in the housing society.

### 4.4 Cards & surfaces
- Elevation system: flat cards (Sand bg, 1px Bronze/10% border) for content cards; elevated cards (soft shadow, white bg, rounded-2xl, Bronze top accent bar) for testimonials/stats; glass/blur cards over hero imagery.
- Consistent radius token: `--radius-card: 20px`; buttons `--radius-btn: 999px` (pill) for primary CTAs.

---

## 5. Motion & Interaction Design (Framer Motion)

All motion should read as **understated, dignified, editorial** — this is a civic leader's site, not a gaming/SaaS landing page. Motion should support storytelling, not distract.

| Element | Motion behavior | Implementation notes |
|---|---|---|
| **Page load / Hero** | Staggered fade-up of eyebrow → headline → subtitle → CTA (120ms stagger), portrait image scales from 1.05→1 with slight parallax on scroll. | `motion.div` with `variants`, `staggerChildren`. |
| **Scroll reveals (all sections)** | Elements fade+translateY(24px→0) as they enter viewport, one-time trigger. | `whileInView` + `viewport={{ once: true, amount: 0.3 }}`. |
| **Stat counters** ("105 surgeries", "₹1 Cr raised", "550 members", "3 clubs founded", "27+ yrs of service") | Numbers count up from 0 when scrolled into view. | `framer-motion` `useInView` + `animate` on a `useMotionValue`, or `react-countup`. |
| **Pillar tabs (Engineer / Rotarian / Person)** | Animated underline/pill indicator slides between tabs; content cross-fades. | `layoutId` shared layout animation. |
| **Timeline (career + Rotary milestones)** | Vertical timeline line draws in (`pathLength` animation on an SVG line) as user scrolls; each milestone node pops in. | `motion.path` with `pathLength: useScroll` progress. |
| **Photo galleries / Moments grid** | Masonry grid, images have a subtle scale-on-hover (1→1.04) with a Bronze gradient overlay + caption slide-up. Lightbox open = scale+fade from clicked thumbnail (shared element transition). | `layoutId` per image for the lightbox shared transition. |
| **Carousels (Rotary moments, felicitations)** | Replace default browser/Elementor arrows with custom pill-shaped Bronze arrow buttons; auto-play with pause-on-hover; drag-to-scroll on mobile; snap scrolling. | Embla Carousel or Swiper + Framer Motion drag. |
| **Testimonials** | Auto-rotating card carousel with quote-mark icon animating in, avatar with Bronze ring, crossfade + slight scale between slides. | Framer Motion `AnimatePresence mode="wait"`. |
| **Nav bar** | Transparent-over-hero → solid Ink background with blur on scroll (`backdrop-filter`). Mobile menu = full-screen overlay, links stagger in. | `useScroll` + `useTransform` for background opacity/blur. |
| **Buttons** | Micro-interactions: scale 0.97 on tap, background sheen sweep on hover for primary CTA. | `whileHover`, `whileTap`. |
| **Section dividers** | Replace the old dashed-line ASCII-style dividers with an animated thin Bronze line that draws left→right on scroll into view. | SVG `pathLength`. |
| **Cursor-aware hero background** | Optional soft radial-gradient blob (Camel/Bronze, low opacity) that gently follows pointer on desktop only, disabled on mobile/reduced-motion. | `useMotionValue` + `useSpring` for cursor tracking. |
| **Reduced motion** | Respect `prefers-reduced-motion`: fall back to opacity-only fades, no parallax/counters snap to final value instantly. | Framer Motion `useReducedMotion()` hook gating all transforms. |

---

## 6. Information Architecture — New Site Map

```
/                      Home (narrative overview + highlights of all 3 pillars)
/about                 About Me (full long-form bio, values, family, timeline)
/engineer              As a Govt. Engineer (PWD projects, role, philosophy) [renamed from "As Gov. Employee"]
/rotary                As a Rotarian (District Governor story, initiatives, stats, clubs founded)
/initiatives           NEW — dedicated page consolidating flagship projects: Sapne Sach Hue, 105 Heart Surgeries, Night School, Shelter Housing Society, Malnutrition Program, Vocational Training
/gallery               Photo gallery, filterable by pillar (Engineer / Rotary / Family / Community)
/blog                  Blog / News (curated, on-brand posts only — no spam)
/downloads             Press kit: CV/Bio (PDF), GENIUS handbook info, photos press-kit
/contact               Contact form + map + socials
```

Global persistent footer across all pages: bio blurb, social links, quick links, contact block — same as current site but restyled.

---

## 7. Recommended Tech Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | **Next.js 15 (App Router)** | SSR/SSG for SEO (public figure site needs discoverability), image optimization built-in. |
| Styling | **Tailwind CSS** + CSS variables for the palette tokens in §4.1 | Fast, consistent, easy theming. |
| Animation | **Framer Motion** | As specified in §5. |
| Carousel | **Embla Carousel React** | Lightweight, works well with Framer Motion drag physics. |
| Icons | **Lucide-react** | Consistent, tree-shakeable, MIT licensed. |
| CMS/content | **Structured JSON/MDX content collections** (or headless CMS like Sanity/Payload if client wants a dashboard) | Keeps bio/stats/timeline/testimonials editable without touching code. |
| Forms | Contact form via **Formspree/Resend + serverless route** | No spam-prone WordPress form plugin. |
| Hosting | **Vercel** | Zero-config Next.js hosting, image CDN, analytics. |
| Fonts | `next/font` self-hosted Google Fonts (Fraunces + Inter) | Performance, no FOUC. |

---

## 8. Page-Level Content & Component Specs

### 8.1 Home
1. **Hero** — Bronze-gradient-accented headline "I'm Mahesh Mokalkar", role chips ("Asst. Engineer, PWD" · "Past District Governor, RID 3030"), primary CTA "Explore My Story", secondary CTA "Download CV". Portrait with soft Bronze glow, animated on load.
2. **Three Pillars tabbed section** — Engineer / Rotarian / Family-Person, animated tab switch (shared layout indicator), each tab shows a short blurb + "Read more →" link to its dedicated page.
3. **Impact stats strip** — animated counters: `105` surgeries funded · `₹1 Cr+` raised in one year · `3` Rotary Clubs founded · `550` housing-society members · `27+` years of Rotary service (1997–present).
4. **"Aai-Baba" tribute** — restyled as an elegant dark (Ink bg) quote block with family portrait, Bronze quotation-mark icon animating in.
5. **Timeline** — animated vertical timeline: 1997 Joined Rotary → Club formations (Hinganghat/Arvi/Wani) → District Governor 2016-17 → 105 heart surgeries year → Night School recognition → present. Reuse for `/about`.
6. **Moments gallery preview** — masonry grid, 8–10 images, hover captions, "View full gallery →" CTA to `/gallery`.
7. **Testimonials carousel** — the 5 existing quotes, restyled cards with Bronze ring avatars (need real photos supplied).
8. **Latest posts** (3 curated blog cards max) — only if `/blog` has genuine content; omit section entirely if empty rather than showing spam.
9. **Footer** — as in current IA but redesigned per §4.

### 8.2 About Me
Full bio (reflow the existing About Me copy verbatim/lightly edited — content already strong), plus:
- Family block: Aarti Mokalkar (Past President, Inner Wheel Club of Gandhi City Wardha), children Purvesh & Disha — small photo-card row.
- "GENIUS" handbook callout card with a book-icon and short description, linking to `/downloads`.
- Values list as icon+text cards (Integrity, Self-sufficiency, Servant Leadership, Continuous Learning) drawn from the bio's own language ("Wisdom is not a product of schooling…", "success has no shortcuts").

### 8.3 As a Govt. Engineer (`/engineer`)
Expand the current single paragraph into:
- Role card: Assistant Engineer Gr-II, PWD, Govt. of Maharashtra.
- "What I build" icon grid: Roads · Buildings · Bridges · Multi-crore public infrastructure projects.
- Philosophy quote: "Indirectly serving society at large by building roads, buildings and bridges."
- Photo of him at the memorial/statue (existing asset), captioned appropriately.

### 8.4 As a Rotarian (`/rotary`)
- District Governor RID 3030, 2016–17 story front and center.
- Full initiative list as expandable/animated accordion or card grid: Sapne Sach Hue, 105 heart surgeries, malnutrition meal program, Night School for rag-pickers' children (with Govt. of Maharashtra recognition badge), homes for the homeless, vocational training for girls, workshops for the differently-abled, interest-free self-employment loans, school/child adoption, health check-ups, blood donation drives, disaster management.
- Clubs founded: Hinganghat, Arvi, Wani — small map/badge row.
- Awards: Outstanding President Award, Rotary Service Award (Polio Eradication).
- Photo carousel (reuse the 13 existing Rotary moment photos + new ones supplied later).

### 8.5 Initiatives (`/initiatives`) — NEW page
One card per flagship initiative (grid of 6–8 cards), each expandable to a detail view/modal with: description, year, impact numbers, photo. This solves the "buried in one paragraph" problem from the audit.

### 8.6 Gallery
Filterable masonry grid (All / Engineer / Rotary / Family / Community), lightbox with shared-element transition, lazy-loaded with real `srcset`/blur-up placeholders (fixes the broken-image bug in the audit).

### 8.7 Blog
- **Content policy:** only posts authored about Mahesh's own work/community activity. Purge all currently indexed spam posts (Korean casino, generic AI funding news, Belgian gambling, French slot-machine content) — these are almost certainly the result of a compromised/abandoned WordPress install and are actively harming the person's SEO and reputation. Recommend a security audit of the old WordPress instance before any content migration, and recommend 301-redirecting/removing the spam URLs from Search Console.
- New empty-state design if no posts exist yet: "Stories & updates coming soon."

### 8.8 Downloads
- CV/Bio as a professionally designed **PDF** (not `.doc`), auto-generated from the structured bio content (see docx/pdf skill for actual file production when photos are supplied).
- Optional: press-kit ZIP (headshots + short bio + logo) for journalists/event organizers.

### 8.9 Contact
- Left: form (Name, Email, Subject, Message) → serverless email relay.
- Right: address card (Wardha, Maharashtra), email, phone, social icons, embedded map (static styled map matching palette, not default Google blue).

---

## 9. Accessibility & Performance Requirements
- Lighthouse targets: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95.
- All animations gated behind `prefers-reduced-motion`.
- All images: real `alt` text (bio-relevant, e.g. "Mahesh Mokalkar handing over relief kit at Wardha flood response 2022"), responsive `srcset`, blur-up placeholders — no broken/empty `src`.
- Semantic HTML landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`), skip-to-content link retained.
- Color contrast verified per §4.1.
- Open Graph / meta tags per page for social sharing (LinkedIn/Facebook/Twitter previews).

---

## 10. AI Build Prompts (for Antigravity / agentic coding tools)

Use these as sequential prompts when building the site in an agentic coding environment (e.g., Google Antigravity, Claude Code, Cursor). Each prompt assumes the previous steps' output is already in the repo. Replace `[IMAGE: ...]` placeholders with real assets once supplied.

**Prompt 1 — Project scaffold**
```
Create a new Next.js 15 App Router project with TypeScript and Tailwind CSS.
Install and configure: framer-motion, embla-carousel-react, lucide-react, clsx.
Set up CSS variables in globals.css for this exact palette:
--color-primary: #924931 (bronze)
--color-secondary: #E7CFAE (sand)
--color-tertiary: #D4A96B (camel)
--color-ink: #350D06 (deep espresso, used instead of black)
--color-surface: #FFFFFF
--color-surface-alt: #FBF6EF
Configure next/font with Fraunces (display/serif) for headings and Inter (sans) for body text.
Set up a design tokens file for spacing, radius (card: 20px, button: 999px pill), and shadow scale.
Create the folder structure: app/(site)/{about,engineer,rotary,initiatives,gallery,blog,downloads,contact}/page.tsx,
components/ui/, components/sections/, lib/content/.
```

**Prompt 2 — Content model**
```
Create a structured TypeScript content file lib/content/profile.ts containing all real facts about
Mahesh Mokalkar (role: Asst. Engineer Gr-II PWD Govt. of Maharashtra; Past District Governor RID 3030;
Rotarian since 1997; founded Rotary Clubs of Hinganghat, Arvi, Wani; 105 heart surgeries funded (~₹1 crore,
single Rotary year); Night School for rag-pickers' children recognized by Govt. of Maharashtra;
founder-president of a 550-member credit co-operative housing society, 3 terms; authored engineering
handbook "GENIUS"; wife Aarti Mokalkar, Past President Inner Wheel Club of Gandhi City Wardha;
children Purvesh and Disha; based in Wardha, Maharashtra; contact maheshdg1617@gmail.com,
+91 9689898968; socials Facebook/Twitter/Instagram/LinkedIn) as strongly typed exported objects:
profile, stats[], timeline[], initiatives[], testimonials[]. Also scaffold a Zod schema to validate
this content shape so future edits are type-safe.
```

**Prompt 3 — Design system components**
```
Build reusable UI components in components/ui/ using Tailwind + the CSS variables from Prompt 1:
Button (primary pill w/ hover sheen animation via Framer Motion whileHover/whileTap),
Card (flat + elevated variants), Badge/Chip, SectionHeading (with animated underline that draws in
on scroll using an SVG path and framer-motion pathLength), StatCounter (animates a number from 0 to
target using useInView + useMotionValue when it enters viewport), Tabs (with a shared layoutId sliding
indicator), Accordion, Avatar (with bronze ring), and a reduced-motion-aware MotionSection wrapper that
fades+translates children in on scroll (whileInView, viewport once true).
```

**Prompt 4 — Hero + Nav**
```
Build the site Header: transparent over the hero, transitions to a solid --color-ink background with
backdrop-blur as the user scrolls (useScroll + useTransform on opacity/blur). Desktop nav links: Home,
About, Engineer, Rotary, Initiatives, Gallery, Blog, Downloads, Contact. Mobile: full-screen overlay
menu with staggered link entrance animation.
Build the Home page Hero section: two-column layout, left = eyebrow text, display-font H1 "I'm Mahesh
Mokalkar", role chips ("Asst. Engineer · PWD, Govt. of Maharashtra", "Past District Governor · RID 3030"),
primary CTA "Explore My Story" (scrolls to pillars section), secondary CTA "Download CV" (links to
/downloads). Right = portrait image [IMAGE: hero-portrait.jpg] with a soft bronze/camel gradient glow
behind it and a subtle scale+fade-in on load, plus gentle parallax on scroll.
```

**Prompt 5 — Three Pillars + Stats**
```
Build a "Three Pillars" section on the Home page using the Tabs component: Engineer / Rotarian /
Family & Values. Animate content crossfade between tabs. Below it, build an "Impact" stats strip with
5 StatCounter components pulling numbers from lib/content/profile.ts stats[] (105 surgeries funded,
₹1 Cr+ raised, 3 clubs founded, 550 housing-society members, 27+ years of service), each with a
lucide-react icon above the number.
```

**Prompt 6 — Timeline**
```
Build an animated vertical Timeline component: a central SVG line whose pathLength animates in as the
user scrolls (useScroll progress mapped to pathLength), with milestone nodes (dot + card) popping in
via whileInView as each is reached. Populate with lib/content/profile.ts timeline[] data
(1997 joined Rotary → club formations → District Governor 2016-17 → flagship surgeries year →
Night School recognition → present). Reuse this component on both / and /about.
```

**Prompt 7 — Gallery + Lightbox**
```
Build /gallery: a filterable masonry photo grid (categories: All, Engineer, Rotary, Family, Community)
using CSS columns or a masonry library, images with lazy loading, real srcset/blur-up placeholders
(no broken lazyload classes), hover state = subtle scale (1 to 1.04) + bronze gradient overlay + caption
slide-up. Clicking an image opens a Lightbox using a Framer Motion layoutId shared-element transition
from the thumbnail to a full-screen viewer with prev/next controls and keyboard navigation. Populate
with placeholder images tagged by category until real photos are supplied — build the data structure to
make swapping trivial.
```

**Prompt 8 — Carousels (Moments + Testimonials)**
```
Build a "Moments" carousel section using embla-carousel-react wrapped with Framer Motion drag physics:
custom pill-shaped bronze prev/next buttons (replace default browser arrows), autoplay with
pause-on-hover, snap scrolling, dot pagination. Build a Testimonials carousel using
lib/content/profile.ts testimonials[] (Rtn. Kishor Kedia, Rtn. Madhu Rughwani, Rtn. Shabbir Shakir,
Rtn. Rajiv Sharma, Rtr. Anand Zunzunwala) with AnimatePresence mode="wait" crossfade between slides,
bronze-ring Avatar, animated quotation-mark icon.
```

**Prompt 9 — Sub-pages (Engineer, Rotary, Initiatives, About)**
```
Build /engineer, /rotary, /about, and /initiatives pages per the PRD section 8.2-8.5: expand the thin
existing copy into structured sections (role card, "what I build" icon grid, initiative accordion/card
grid with expandable detail modals using layoutId shared transitions, awards badges, family block,
values cards). All sections wrapped in the MotionSection scroll-reveal wrapper from Prompt 3.
```

**Prompt 10 — Downloads, Contact, Footer**
```
Build /downloads with a designed CV card (PDF download button) and an optional press-kit download.
Build /contact with a left-side form (Name, Email, Subject, Message) posting to a Next.js API route
that relays via Resend/Formspree, and a right-side info card (address: Wardha, Maharashtra, IND;
email: maheshdg1617@gmail.com; phone: +91 9689898968; social icon row: Facebook, Twitter, Instagram,
LinkedIn) plus a palette-matched static map. Build the global Footer: bio blurb, social icons, quick
links, contact block, copyright, all restyled with the design system — remove all legacy dashed-line
dividers and default WordPress styling.
```

**Prompt 11 — Blog cleanup**
```
Build /blog as an empty-state-ready blog listing page (curated posts only, MDX-based) with a clean
"Stories & updates coming soon" state if no posts exist. Do NOT port over any existing WordPress blog
content — the current blog contains unrelated spam posts (gambling/casino SEO content in Korean, Dutch,
and French, and generic AI-industry news) that must not be migrated. Flag this in a code comment and in
the README as an item requiring a security review of the legacy WordPress install before decommission.
```

**Prompt 12 — Accessibility, SEO, and QA pass**
```
Add per-page metadata (title, description, Open Graph image, Twitter card) for all routes. Ensure all
images have descriptive alt text, all interactive elements are keyboard-navigable and have visible
focus states in --color-primary, and wrap all Framer Motion animations to respect
prefers-reduced-motion via a useReducedMotion() check. Run a Lighthouse pass and fix any Performance/
Accessibility/SEO issues below 90. Add a sitemap.xml and robots.txt.
```

---

## 11. Open Items / Inputs Needed From Client
- [ ] New, high-resolution photography for hero, gallery categories, and each testimonial avatar (explicitly promised: *"I will provide all the pics later"*).
- [ ] Confirmation on whether the legacy WordPress instance should be fully decommissioned (recommended, given the spam content found) or kept for redirects only.
- [ ] Final copy sign-off for the expanded Engineer/Rotary/Initiatives pages (drafted above from existing site copy + light expansion — should be reviewed by Mahesh/team for accuracy).
- [ ] Decision on CMS: fully static content file (fastest, cheapest) vs. headless CMS dashboard (easier for non-technical updates going forward).
- [ ] Final wording/branding approval for the new "Initiatives" page and page renames (`As Gov. Employee` → `As a Govt. Engineer`).

---

*End of PRD.*
