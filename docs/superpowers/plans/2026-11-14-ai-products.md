# AI products overview implementation plan

**Goal:** Implement the owner-selected second displayed concept (A), preserving both product previews and adapting small screens.
**Architecture:** One React overview at #ai-products using SectionHeader, ProjectIntroLink and ProjectPagination. Two isolated interactive previews reuse Taste Studio assets. Existing project articles remain the introduction destinations; no invented product case studies.
**Tech Stack:** React 19, Vite 7, shared theme.css, Python Playwright for browser validation.
**Spec:** Owner approval in .taste-studio/feedback.md; docs/visual-style.md; docs/section-header.md.

## Constraints and decisions
- Work in the explicitly requested C:/Projects/Annabelle-portfolio directory; preserve pre-existing artifact deletions/untracked files.
- Use current theme variables and shared header, not generated signature/sidebar substitutions.
- Insert AI products third, between UX/UI and Data & AI; retain existing hashes.
- Desktop: Waymark text left / blue preview right, Taste Studio preview left / text right. Below 1100px, both stack in reading order. 320px minimum checked width.
- Waymark confirmation demo is local/resettable, never calls a model or reads private data. Taste Studio buttons switch actual source sketches and explanatory text.
- Chinese/English, keyboard controls, visible focus, 44px touch targets, reduced motion, no horizontal overflow.

## Tasks
- [ ] Add a failing navigation test for #ai-products and preserved article routes. Run node --test tests/ai-products.test.mjs.
- [ ] Implement src/sections/AIProducts.jsx and ai-products.css, import/copy five static Taste Studio assets, register in App.jsx/navigation.js, add sidebar entry and pagination group.
- [ ] Run navigation tests and production build; use installed runtime satisfying repository Node floor.
- [ ] Browser check at 1440, 1024, 768, 390 and 320px, Chinese/English, demo controls, menu, back/forward, article links, missing images and console errors. Inspect desktop/mobile screenshots.

## Review focus
Overflow at 320px and at English labels; keyboard selection/focus; mobile drawer closes on navigation; reduced-motion state transitions; real article destinations and unchanged existing route behavior.

## Validation record
Pending.

## Completed verification
- All implementation tasks completed in the user-requested checkout; no publishing or unrelated artifact changes.
- Navigation regression: observed RED (missing route), then GREEN (12 navigation tests).
- Full Node suite: 84 tests; 75 passed, 9 pre-existing opt-in/live checks skipped, 0 failed.
- Production build passed; existing >500 kB bundle advisory remains.
- Browser: Chinese and English at 1440/1024/768/390/320px, no horizontal overflow, missing images or page errors. Confirm/reset, three job tabs, design-study keyboard selection, article navigation/back, mobile drawer navigation and reduced-motion controls passed.
- Review found mobile header overlap caused by navigation-motion.css generic section padding. Added scoped page spacing; regression reproduced failure (header y=12, controls bottom=56), then browser checks passed with clearance.
- Corrected QA language switching to click the real control and assert lang; waited for sidebar transitions before screenshots.
- Source review completed by a separate reviewer. Desktop/mobile screenshots visually inspected after corrections.
- Decision: project introduction actions reuse the current Waymark/Taste Studio articles, preserving their content and URLs. Preview interactions are explicitly local demonstrations, not claims of online AI availability.


## Overview refinement verification
- Simplified Waymark to invitation, confirmation and progress change; distinguished local message processing from optional AI excerpt interpretation.
- Enlarged the three floral concepts, preserved the original gold wordmark flourish, and added a full-sketch dialog.
- Unified desktop preview stage ratios, headers and footers; tightened spacing and consolidated project links.
- Production build completed (existing bundle-size advisory remains).
- Browser checks passed for Chinese and English at 1440, 1280, 1100, 1024, 768, 390 and 320px: no horizontal overflow; equal desktop preview heights; complete contained artwork; confirmation/reset; dialog keyboard close and focus return; article links; mobile navigation; reduced motion. No page errors.
- Visually reviewed full-page Chinese desktop and English 320px screenshots. Local changes only.


## Workspace composition revision
Supersedes the invitation-only preview and equal-height desktop frames: the approved direction is now a flatter three-column board, restrained blue/gold role cards and compact assistant overlay. Use live text and local confirmation state; sample roles are explicitly conceptual. On narrow screens, render a selected role, interview preparation and assistant in normal flow. The ribbon now uses hero-art.png with the same wide composition and radial fade as Data pages. Existing Taste Studio art and gold flourish remain.
Validation: production build, route unit test and Chinese/English responsive browser checks at 320–1440px passed. Full desktop/mobile screenshots reviewed; additional overlap checks cover both confirmation states across desktop/tablet widths.
