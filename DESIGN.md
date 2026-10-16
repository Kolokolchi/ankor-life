# Ankor redesign

The design connects a real botanical ingredient with the precision of a Kazakh research brand. Its memorable element is an oversized, sunlit RENOVA still life beside a strong Cyrillic headline. Everything around it is quiet and useful.

Palette: porcelain #FAFBF7, pine #263C32, muted leaf #6F7C62, sea buckthorn #D9652A, pale botanical yellow #F2F0DC, line #DEE3D9.

Typography: locally hosted Manrope, 400–800, with deliberately open paragraph leading and tightly set display headlines. No decorative serif or science-fiction type.

Layout: wide navigation, asymmetric two-column hero, four compact factual qualities, four products in a spacious two-column grid, ingredient story, research timeline, laboratory photography, practical questions, and contact/footer. All content is left aligned except the hero's floating botanical annotation. New cards reuse the original typography, spacing, colors and interactions; the laboratory uses the same heading system and image corners.

Desktop concept:
```
logo           navigation                 contact / bag
------------------------------------------------------
Botanical brand intro  |                              |
Large headline        |   sunlit product photograph   |
Short text + action   |                              |
Research note         |              product label  |
------------------------------------------------------
origin       ingredient        technology       format

Products heading                     comparison link
[RENOVA editorial image]        [DETOX editorial image]
name / details / price           name / details / price
[RENOVA+ photograph]            [NIGELLA S. photograph]
name / details / price           name / details / price

[macro botanical photograph]     ingredient narrative
                                 composition + process

Research story + clear timeline in four columns
Laboratory heading + short introduction
[wide laboratory photograph]    [equipment detail]
Questions with topic switching / contact action
Large, quiet branded footer
```

Review: retain actual Ankor identity and packaging. The light yellow comes from sunlit botanical photography, the orange from sea buckthorn, and green from existing packaging. Avoid repeated hero carousels, medicinal promises, generic review cards, decorative statistics and invented certifications. Original products and contacts were checked on ankor.life on 2026-10-16; the owner supplied the two new prices and product photographs. All orders prepare a WhatsApp message using the owner’s current prices; the older store has a different price list. Generated hero photography is art direction; new product and laboratory photographs are the owner's originals. Both header and footer use the supplied July 2025 vector logo geometry, with the green symbol retained on light and dark backgrounds.

Motion: first-view delight on this marketing page, with one-time 600 ms opacity/16 px entrances and a capped 50 ms stagger. IntersectionObserver and WAAPI keep the default content visible if animation support is absent. Button press feedback takes 160 ms, image/link hover feedback 200–250 ms; hover motion is limited to fine pointers. Reduced motion uses a 200 ms fade only. Keyboard navigation cancels entrances immediately. No perpetual movement or layout animations.
