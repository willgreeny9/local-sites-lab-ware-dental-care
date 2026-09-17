# Ware Dental Care — design brief

**Layout name:** Under One Roof Care Hub  
**Slug:** ware-dental-care  
**Concept host:** https://ware-dental-care.localsiteslab.com  
**Official site:** http://www.waredentalcare.co.uk/

## Target customer

Local residents and families in Ware / Hertfordshire who need to **call to make an appointment** for NHS or private care, plus patients (and referring dentists) seeking specialist pathways without leaving the High Street practice.

## Customer job

1. Trust the practice quickly (CQC + longevity + patient voice).  
2. See which care sits under one roof (general → specialist).  
3. Know how to arrive (parking / alley entrance is a real friction point).  
4. Call 01920 462208 with confidence.

## Why this layout (unique vs other LSL dental concepts)

| Concept | Architecture |
| --- | --- |
| **Epping Dental** | Treatment Clarity Pathway — numbered new-patient steps + `/treatments/*` index |
| **Great Dunmow Dental** (sibling batch) | Expected to lean NHS/High-Street trust repair — must not share this Care Hub chrome |
| **Ware Dental Care (this site)** | **Care Hub mosaic** — bento service cards, horizontal **specialist lane**, **find-us / parking-first** visit band, Fraunces+Outfit type, navy/teal from logo |

Hard fail avoided: no pathway steppers, no `/treatments` tree, no utility-bar+gold clinical chrome clone of Epping. Ware leads with multi-disciplinary “under one roof” density and visit logistics.

**Do not surface COVID opening-protocol messaging** even though the live site still promotes it — commercial brief explicitly excludes that.

## Brand

- **Logo source:** http://www.waredentalcare.co.uk/assets/img/ware_dental_logo-2026.png → `public/images/logo.png`
- **Extracted logo hexes:** `#002030` (navy), `#30C0B0` / `#00A896` (teal)
- **Roles:** navy surfaces + teal CTAs + cream/mist grounds; LSL bar `#0B1220` / `#EAFF38`
- **Header:** light paper plate so the dark logo remains readable
- **Photos:** practice heroes and open-day image from the official site (`hero-practice.jpg`, galleries, `practice-open-day.jpg`)

## Visual / UX methodology (cited)

- Material 3 colour roles / contrast: https://m3.material.io/styles/color/system/overview  
- Component patterns: https://component.gallery/  
- Design systems directory: https://designsystems.one/  
- Split heroes without text-on-photo scrims (LSL standing rule + WCAG contrast mindset)  
- Mobile hamburger with Escape dismiss; tap targets ≥ 44px  
- Short above-fold hero (headline + punch + CTA); practice history below the fold

## Competitor / conversion notes

Strong UK dental peers emphasise: call-first appointment CTA, CQC/trust near top, scannable treatment cards, parking clarity for High Street premises, and specialist access without burying it in brochure carousels. Ware’s live site still leads with a COVID protocol banner and dated carousel — this concept replaces that with Care Hub scanning and visit guidance.

## Primary CTA pattern

Sticky header call button + hero cream CTA + closing call band. Email secondary. No fake booking form.

## Shared product safeguards

ConceptNotice `ware-dental-care-concept-notice-dismissed-v5`, sticky LSL sales bar, noindex robots, ScrollToTop + `history.scrollRestoration = "manual"`, privacy + 404.
