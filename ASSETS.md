# Assets and source content

Official reference: https://ankor.life/, inspected 2026-10-16. The source is an existing Shopify storefront. Public product metadata was read from https://ankor.life/products.json. Product identities, current prices, variant IDs and contact details are retained. No testimonials or medical efficacy claims were invented.

## Original brand assets

Logo: supplied `../Tex/0725_ankor_Logotype.pdf`, checked against `0725_ankor_Logotype-01.png` and `0725_ankor_Logotype-02.png`. The vector paths are exported without redrawing or changing their relative proportions. The PDF's background and artboard margins are omitted for web use. `logo.svg` uses the approved green symbol (#5f9243) and dark lettering (#1d1d1b); `logo-on-dark.svg` keeps the same green symbol and uses the supplied light lettering (#f2f2f2). The footer must not apply a monochrome CSS filter. The favicon uses the same original symbol.

RENOVA editorial: https://ankor.life/cdn/shop/files/Im_2b94fc9c-2817-4f00-a80c-be14d0506c3d.jpg

DETOX editorial: https://ankor.life/cdn/shop/files/Box_Mockup_Vol_3232_2.jpg

RENOVA packaging reference: https://cdn.shopify.com/s/files/1/0665/9538/9616/files/PILLSBOTTLEMOCKUP_2.png

Font: Manrope, distributed through Google Fonts, hosted locally in this project.

## User-supplied reference library, reviewed 2026-10-16

The local `../Tex` folder contains 22 files: 14 PDFs, five PowerPoint presentations and three PNG logo files. Two pairs are exact duplicates: the Full Final / Full Final-1 PDFs and Logotype / Logotype-01 PNGs. Source documents remain local; they are not distributed with the public website. Rendered review pages and extracted text are in ignored `qa/references`.

Primary sources for website copy:

- `0525_Ankor_Presentation_Full text version_Final.pdf`: pages 1–3 cover the "От ягоды к капсуле" positioning, research history and raw-material quality checks; pages 5–6 cover TOM K-90 / RENOVA; page 9 describes the origins of DETOX ingredients. Russian and Kazakh versions were compared.
- `ANKOR PRODUCT.pdf`: page 9 explicitly lists the DETOX ingredients as defatted sea-buckthorn fruit and rosehip fruit, with 20 sachets of 10 g. The exact ingredient list replaces the old generic modal copy.
- `0825_ankor_Leaflet_TOM K-90.pdf`: page 1 describes the lipophilic concentrate and lists omega-3, 6, 7 and 9, polyphenols and carotenoids. Used for a plain-language technology explanation, without adding clinical outcome claims.
- `0725_Ankor_Renova_Leaflet_Curves.pdf`: visually reviewed because its text is outlined. Confirms the product naming, original packaging, brand palette and quality-control narrative.
- `0925_ankor_Banner_200x60.pdf`: visually reviewed for the original logo proportions and "Опора для здоровья" positioning.

The remaining PDF versions provide overlapping product, ingredient and historical context. `Short text version_Final.pdf` actually contains 18 pages, combining a full and a shortened presentation. The five PPTX files contain slides as images; their slide images were reviewed, not treated as empty decks when XML text extraction returned no text.

PowerPoint themes retained as research context:

- `ANKOR_Cellular_Recovery_System.pptx`: tissue recovery, cell membranes, mitochondria, microcirculation and the RENOVA / DETOX pairing.
- `ANKOR_Health_Architecture.pptx`: the brand's conceptual hierarchy from genetics to symptoms.
- `Architecture_of_Life_(2).pptx`: systems thinking, membranes, cellular energy; also mentions NIGELLA S. Its website card is based on the later user-supplied packaging photographs and price, rather than the conceptual bottle illustrations in these slides.
- `Omega-7_Cellular_Architecture.pptx`: emphasis on palmitoleic acid (omega-7) and membrane biology.
- `Systemic_Bioregulatory_Medicine.pptx`: a proposed systemic approach, microbiota and cellular energy. It includes conceptual packaging that differs from the actual product photographs.

Editorial decisions and unresolved source differences:

- Dates for patents differ between the existing storefront and supplied presentations (the latter associate patent 30994 with 2014). No grant date was independently established; the website timeline uses the consistently documented 1990 research-program milestone instead of the previous 2005 patent claim.
- The May 2025 documents contain older telephone numbers. The existing contact +7 771 537 1627 remains consistent with https://ankor.life/pages/contact, checked during review.
- Doses, durations and storage instructions vary. `ANKOR PRODUCT.pdf` even prints +250°C for DETOX storage. The website refers readers to the current packaging rather than silently selecting or correcting these instructions.
- Disease-treatment claims, clinical protocols, proposed lab-marker improvements, "2.8 kg per capsule", and comparisons with conventional medicine were not copied into consumer-facing efficacy promises. The presentations alone are not clinical validation of the finished products.
- Existing store prices, checkout variants and RENOVA excipients remain from the official storefront snapshot. The two additional products are explicitly requested by the user, as documented below.

## New products and laboratory photographs

The user authorized adding RENOVA+ for 40,000 KZT and NIGELLA S. for 38,000 KZT on 2026-10-16, with photographs from `E:/Drive/Ankor/Фотографии`. The front labels establish 60 capsules for RENOVA+ and 90 capsules for NIGELLA S. The latter's front label spells the name `NIGELLA S.`; some rear-label headers spell it differently. The site follows the front label.

Photographs retain their original composition and colors. WebP delivery copies are resized with EXIF orientation applied; the page uses CSS to fit the photographs into its existing layout.

| Website asset | User-supplied source |
| --- | --- |
| `dist/assets/renova-plus-editorial.webp` | `E:/Drive/Ankor/Фотографии/Renova +/Renova + .jpg` |
| `dist/assets/nigella-s-editorial.webp` | `E:/Drive/Ankor/Фотографии/НИГЕЛЛА С/Каталог без названия7856.jpg` |
| `dist/assets/renova-plus.webp` | `E:/Drive/Ankor/Фотографии/Renova +/Каталог без названия3072.JPG` |
| `dist/assets/nigella-s.webp` | `E:/Drive/Ankor/Фотографии/НИГЕЛЛА С/Каталог без названия7882.jpg` |
| `dist/assets/laboratory.webp` | `E:/Drive/Ankor/Фотографии/FINAL/final1/RAZ_1575-HDR.jpg` |
| `dist/assets/laboratory-detail.webp` | `E:/Drive/Ankor/Фотографии/FINAL/final1/RAZ_1588.jpg` |

Additional label references inspected: `Renova+.JPG`, `Renova+ rus.JPG`, `Renova+ ruz..JPG`, and NIGELLA photographs 7731, 7759 and 7770. RENOVA+ identifies TOM K-90, omega-7, succinic acid, beta-carotene, vitamins E and K. NIGELLA S. identifies black-cumin concentrate, omega-3/6/9, thymoquinone and catechin. Product details label these as selected components on the packaging, not a complete ingredient declaration. Dosage and therapeutic claims are not inferred.

Laboratory copy uses the 2023 opening date in the supplied Full Final presentation. `E:/Drive/Ankor/Анатационный отчет/Презентации_проектов ITP.pptx`, slide 1, confirms an extractor developed for the production of concentrates. The copy does not expose technical recipes, internal financial records or unrelated company documents.

The public `https://ankor.life/products.json` catalogue was checked again on 2026-10-16 and still lists only RENOVA and DETOX. Orders containing either new product therefore prepare a WhatsApp message containing **every** cart item, quantities and the total, for confirmation by the existing sales contact. Orders containing only the original products continue to the existing Shopify checkout. No variant IDs were invented and no order message is sent automatically.

## Generated images

Generated using the built-in image_gen tool. The original generated PNGs remain in the user's Codex generated_images directory. WebP delivery versions were encoded locally without altering composition. Photography is an art-directed illustration; original packaging photography remains visible in the product catalog.

### dist/assets/hero.webp

Input reference: official RENOVA packaging image, `renova.png`.

Final prompt:

> Use case: product-mockup. Create a premium editorial product photograph for the right half of the Ankor natural supplements website hero. Input image is the exact existing amber glass RENOVA bottle with gold cap, white and deep dark-green label, orange RENOVA lettering and sea buckthorn illustrations. Preserve the bottle identity, packaging shape, label typography, colors and branding faithfully. One single bottle standing at a subtle 8-degree angle on a substantial rough ivory limestone slab near the bottom center, real fresh orange sea buckthorn berries and thin silvery sage-green leaves on delicate woody branches entering from the right foreground. A few loose berries and two amber capsules on the stone, tastefully sparse. Warm pale butter yellow / ivory studio backdrop, refined natural directional sunlight from upper left producing beautiful soft botanical shadows and believable amber glass reflections. Close editorial still life photographed with an 85mm lens. Bottle is the main focal point and takes about 60% image height, stone takes bottom 20%. Composition square 1:1, generous clean pale background above, subtle texture, sophisticated premium wellness brand photography, very high photographic realism. No additional texts, captions, logos, watermarks, frames or UI. Do not add a second product. Save the finished image for use in the website.

### dist/assets/botanical.webp

Final prompt:

> Use case: photorealistic-natural. Asset for premium natural supplements website Ankor, botanical editorial photograph. A sunlit macro closeup of fresh ripe orange sea buckthorn berries clustered on a thin woody branch with elegant narrow silvery olive-green leaves. Lush yet naturally imperfect foliage, tiny drops of dew, beautiful dappled natural light and deep forest green softly out-of-focus background. Branch enters from lower left diagonally toward upper right, richly tactile berries lit warm amber, shallow depth of field, exquisite film photography, medium format, high detail, sophisticated botanical science magazine. Portrait 4:5 composition. Realistic plant structure. No text, graphics, labels, human hands, borders or watermark.

## Price and motion update, 2026-10-16

The owner revised all prices: RENOVA 41,810 KZT, DETOX 21,470 KZT, RENOVA+ 41,810 KZT, NIGELLA S. 54,200 KZT. These supersede the earlier prices documented above. The official store still returned 33,000 / 16,000 KZT for its two variants during this update. All checkout messages now go to the existing WhatsApp sales contact so the requested price list carries through to ordering.

The NIGELLA S. catalogue card now uses one bottle: `dist/assets/nigella-s-single.webp`, from `E:/Drive/Ankor/Фотографии/НИГЕЛЛА С/Каталог без названия7770.jpg`. The delivery copy only applies EXIF orientation, resizing and WebP encoding; CSS controls its framing and gently blends the empty background edges into the card. The earlier multi-bottle photograph is retained as an unused asset.
