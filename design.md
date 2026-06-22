# Portfolio Design System

## Project Overview

Portfolio website for a Product & UI/UX Designer.

### Tech Stack

* React
* Vite
* Tailwind CSS
* Framer Motion
* Lenis

### Hosting

* GitHub Pages

### Design Direction

* Apple-inspired
* Minimal
* Premium
* Typography-driven
* Smooth interactions
* Large whitespace
* Clean visual hierarchy

---

## Core Development Rules

### Responsiveness

* Entire website must be responsive.
* Mobile, tablet, and desktop supported.
* Design values provided on a 1920×1080 canvas are treated as design references only.
* Implementation must use responsive sizing and spacing.

### Architecture

* Modular components.
* Reusable sections.
* Clean file structure.
* Maintainable codebase.

### Motion Philosophy

* Motion supports content.
* Avoid excessive animation.
* Smooth and intentional transitions.
* Premium feeling over flashy effects.

---

## Color System

### Light Mode

Background:
#EFECE4

Heading:
#0F0E0D

Subtext:
#5D5C59

Tertiary:
#D8D5CF

### Dark Mode

Background:
#0F0F0E

Heading:
#ECECE7

Subtext:
#949490

Tertiary:
#808080

---

## Scroll System

### Global Behavior

* Entire website behaves as a continuous scroll experience.
* Sections are treated as visual windows.
* Movement between sections should feel intentional.
* Smooth scrolling handled by Lenis.

### Section Transition Philosophy

* User fully experiences a section before moving to the next.
* Transitions should feel guided rather than abrupt.
* Scroll interactions may be used to reveal content inside a section before progressing.

---

## Typography

### Status

TBD

### Principles

* Strong hierarchy.
* Large hero typography.
* Minimal decorative typography.
* Readability first.

---

## Components

### Preloader

Status:
Approved

Layout:

* Fullscreen.
* Centered SVG logo.
* Thin progress bar below logo.

Animation:

1. Logo fades in.
2. Progress bar fills.
3. Loader fades out.
4. Hero fades in.

Duration:
1.5–2 seconds.

Theme Support:

* Light mode.
* Dark mode.

Logo Color

Light Mode:
#5D5C59

Dark Mode:
TBD

Logo Type:
Single-color SVG

Implementation:
SVG color should be controlled through CSS/theme variables rather than hardcoded fills.

---

### Navbar

Status:
Approved behavior

Initial Hero State:
- No visible pill container.
- Logo positioned on far left.
- Navigation links positioned on far right.
- Layout spans across top of Hero.
- Background is transparent.
- No blur.
- No shadow.

On Scroll State:
- Logo and navigation move toward center.
- Elements combine into a centered pill.
- Pill background appears.
- Uses liquid glass / iOS-style blur.
- Soft shadow appears.
- Navbar becomes compact.

Interaction Type:
- Scroll-transforming navbar.
- Initial state belongs to Hero composition.
- Scrolled state becomes floating centered navigation.

---

## Sections

### 01. Preloader

Status:
Approved

### 02. Hero

### Hero

Status:
Approved for v1 build

Height:
- 100vh

Layout:
- Uses responsive 12-column grid system.
- Reference design: 1920×1080.
- Reference grid: 12 columns, 50px margins, 20px gutters.
- Name block spans as wide as possible within the grid.

Theme:
- Light and dark mode share identical layout.
- Only color tokens change.

Typography:
- Primary font: Syne ExtraBold.
- Secondary font: Inter.
- Name reference size: 224px on 1920×1080 canvas.
- Implementation must use responsive sizing, not fixed 224px.

Hero Name:
- Text: Nikhil Mawar.
- Rendered as live text, not image.
- Each character can animate individually on hover.
- Hover effect: subtle tilt/rotation per character.

Animation:
- Hero appears underneath preloader.
- Preloader fades away.
- Hero elements reveal with Vertical Mask Reveal.
- Staggered sequence:
  1. Navbar
  2. Role label
  3. Nikhil
  4. Mawar
  5. Description
  6. Status pills
  7. Scroll indicator

Description:
Description:
- Static intro text:
  "Delhi raised, Ontario based."
- Second static line:
  "Eight years of experience across"
- Final word cycles through domains.
- Cycling word is bold and uses a different accent color.
- Only the domain word animates.
- Animation style: Vertical Mask Reveal.
- No typing effect.
- No fade-only effect.
- No full-paragraph cycling.

Cycling Domains:
- Banking
- Fitness
- Streaming
- Food Tech

Motion:
- One domain visible at a time.
- Word exits upward/downward through mask.
- Next word enters with same vertical mask reveal.
- Interval: approximately 3 seconds.
- Motion should feel premium and controlled.
- Static paragraph for v1.
- No cycling text for now.

Status Pills:
- Decorative only.
- Not clickable.

Scroll Indicator:
- Hero only.
- Vertical label: SCROLL.
- Base line remains static.
- Overlay line animates from 0% to 100%.
- Overlay color: #F95019.
- Animation loops continuously.

Theme Toggle:
- Bulb toggle.
- Smooth theme transition.
- Pull-string interaction.
- String/slack reacts elastically when clicked.
- Theme changes after pull interaction begins.

Mobile:
- Same component system.
- Different placement and sizing later.
- Mobile layout not finalized yet.

### 03. Projects

Status:
Not Designed

### 04. Journey

Status:
Not Designed

### 05. Contact

Status:
Not Designed

### 06. Footer

Status:
Not Designed

---

# Progress History

## Session 01

* React + Vite project created.
* Tailwind configured.
* Framer Motion installed.
* Lenis installed.
* GitHub Pages repository prepared.

## Session 02

* Design system established.
* Scroll philosophy defined.
* Color system finalized.
* SVG preloader approved.
* Created project design documentation.
