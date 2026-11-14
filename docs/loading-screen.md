# Portfolio startup — direction A

Selected 2026-11-14. Center the existing blue/gold brand mark above Annabelle Zhu, with an ivory (#FCFAF3) background, navy Georgia name (32–62px), a 144px gold hairline and a 44px sapphire indeterminate segment. A large signature watermark uses 3.5% opacity below the content. Small system-font bilingual status provides meaningful loading feedback. Mobile keeps the same focal order without horizontal overflow.

The screen lives in index.html with inline SVG and critical CSS. It needs no external artwork or font request. It lasts until React mounts, with no artificial minimum duration; decorative and below-fold images do not block entry. The legacy hero ID and yellow background are removed from the startup path. Module download failure replaces progress with a reload action; JavaScript-disabled browsers receive explicit guidance. Reduced motion disables segment animation.

Validation: tests/startup_browser.py holds and releases the bundle at 1440, 390 and 320px; checks background, overflow, inline identity, reduced motion, automatic handoff, module-failure retry and JavaScript-disabled fallback. Production build passes.
