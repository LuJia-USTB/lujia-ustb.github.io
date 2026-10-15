# Template attribution

This is a lightweight static adaptation of the AcadHomepage design selected by
Lu Jia, not an unmodified fork or a complete distribution of the upstream
Jekyll project.

- Original project: https://github.com/RayeRen/acad-homepage.github.io
- Original demo: https://rayeren.github.io/acad-homepage.github.io/
- Original author: Yi Ren; copyright (c) 2022 Yi Ren; MIT license.
- Upstream revision inspected: `2cc1577eeaf2f74dede6d016a70722dbd409ea2f`.

The sidebar, masthead, typography and academic color palette are adapted from
the upstream design. The current publication list is text-only, with full venue names. The original
MIT notice is retained in LICENSE and the site footer credits AcadHomepage.
Upstream's stylesheet also credits the Minimal Mistakes Jekyll Theme by Michael
Rose (https://github.com/mmistakes/minimal-mistakes).

The implementation in this package uses pre-rendered HTML, CSS and a small
vanilla-JavaScript enhancement. An optional Python-standard-library script
rebuilds the page from the supplied JSON files. It does not bundle Jekyll,
Ruby gems, remote font files, Font Awesome font files, Google Scholar scraping,
or third-party analytics. The original demo's dummy identities, example
publications, awards and citation totals are not used.

The current version does not include publication illustrations or placeholder
images. The portrait was extracted directly from the CV supplied by Lu Jia;
only its CSS display dimensions have been changed.

The MIT notice covers software and template material. It does not grant reuse
rights to Lu Jia's portrait, CV, personal content, or third-party publications.
