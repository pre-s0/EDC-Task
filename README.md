# Steve Jobs: Interactive Entrepreneur Showcase

EDC JSSUN Technical Team Recruitment 2026, **Task 02 (second-year applicants)**.
Submitted by: Priyanshu Sharma 2500910100146

## How to view or run
No install or build step is needed.
1. Unzip the folder.
2. Open `index.html` in any modern browser.

Optional: run `python3 -m http.server` in the folder and open http://localhost:8000.
Optional live deployment: push the folder to GitHub and enable GitHub Pages (Settings, Pages, branch `main`, root).

## Required sections (all present)
| Brief requirement | Where |
|---|---|
| Introduction: name, portrait placeholder, concise intro | `#intro` |
| Journey: at least 4 milestones, chronological | `#journey` (7 milestones, 1955 to 2011) |
| Companies and ventures: at least 2, with connection and official links | `#ventures` (Apple, Pixar, NeXT, iPhone) |
| Impact: 2 achievements and 2 lessons | `#impact` |
| One useful interaction | Expandable timeline, clickable venture cards with detail dialog, industry filter |
| Sources | `#sources`, with numbered citations [1] to [8] next to each fact |

## Technical decisions
- **Data-driven:** the timeline, venture cards, filter chips, impact lists and source list are all generated from arrays in `js/data.js`. To showcase another entrepreneur, only that file needs to change. The citation numbers link to the matching source entry.
- **Structure:** `index.html` (markup), `css/style.css` (styles, light and dark themes through CSS variables), `js/data.js` (content), `js/app.js` (behaviour). No frameworks or libraries, so it works offline.
- **Interactions:** expandable timeline using `aria-expanded`, a tag filter (the one bonus feature), a native `<dialog>` for venture details, a mobile menu, and a light/dark theme switch.
- **Accessibility and mobile:** semantic headings and landmarks, keyboard-operable controls with visible focus, responsive layout down to phone width, reduced-motion respected.
- **Why Steve Jobs:** his story has clear milestones, several distinct ventures across industries, and good primary sources from Apple and Stanford.

## Sources and credits
All sources are listed on the page (section Sources) and in `js/data.js`. Primary sources are Apple Newsroom, the official Pixar site and Stanford News. Wikipedia was used only to cross-check dates. No photographs or third-party images are used: the portrait is an initials placeholder. Fonts are system fonts.

## AI disclosure
I used an AI assistant (Claude by Anthropic) to help plan and write the code and the first draft of the text. I reviewed and tested the result, checked facts against the linked sources, and can explain every part of the code.

## Limitations
The portrait is a placeholder. Dates and claims are limited to what the cited sources support. Some summaries are paraphrased from the sources.
