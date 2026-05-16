# Seattle Seasons

> A Guide for New Arrivals

An interactive field guide to Seattle's 14 unofficial seasons. The original is a deadpan civic-style poster that gets passed around when someone moves here. This is the poster with weather.

[Live → seattle.onk.io](https://seattle.onk.io)

## The pitch

The poster is funny because it's serious. Bone-dry municipal layout, civic "EXPECT:" mood notes, and 14 named seasons that range from the obvious (The Dark Wet) to the absurd (Paralyzing Snow, ¼ inch). Static, on a fridge, it makes you laugh once. Animated, the joke gets to keep working as Seattle moves through the year.

Drag the year wheel along the bottom and the canvas drenches into each season's mood: Smoke goes apocalypse orange, Glorious Sun blasts gold, Flowering Wet rains cherry-blossom petals, Spiders has a couple of them descend on threads, Jünuary stays grey (the joke is nothing happens). The civic chrome — masthead, "Right Now" advisory, Today marker — never reflows; the atmosphere underneath does.

## Design objectives

Lifted from the original design brief:

- **Civic chrome, drenched scenes.** Two color strategies at odds: a restrained navy + cream frame on top, a fully drenched seasonal palette below. The tension is the design.
- **The poster's voice is preserved verbatim.** Every "EXPECT:" line, every asterisked footnote — those are the joke. The copy didn't get rewritten.
- **The year wheel scrubber IS the interaction.** Drag, scroll, swipe, or use the arrow keys. The fact that the year ends with The Dark Wet returning at week 45 — the visual loop point on the scrubber — is the punchline made interactive.
- **No card grids, no slop.** Typography sidesteps the AI-default fonts (Inter, Plex, Fraunces, et al) in favor of Khand, Fragment Mono, and Nippo. Color is OKLCH. Motion is ease-out-quart, no bounce.
- **Production-polished single page.** One HTML file, atmospheric per-season scenes, smooth motion, real `role="slider"` with full keyboard parity, mobile swipe, and a reduced-motion path.

## Architecture

| File | Role |
|---|---|
| `public/index.html` | Semantic chrome, scrubber rig, content layer, inline Space Needle SVG |
| `public/style.css` | OKLCH season palette, three-layer z-stack, reveal sequence, motion tokens |
| `public/app.js` | 14-season data, scrubber controller, particle engine, sampled ambience engine, live weather |
| `public/audio/*.ogg` | 13 CC0 field recordings from Freesound (one per non-silent season), trimmed to ~25s loopable beds |
| `public/favicon.svg` + PNG/ICO family | 14-segment year wheel with a Space Needle silhouette at center |
| `public/site.webmanifest` | PWA manifest (navy theme, cream background) |
| `README.md`, `.gitignore` | Repo-only |

### Three z-layers

0. **Backdrop drench** (`#drench`) — OKLCH gradient set per season, transitions over 900ms with `ease-out-quart`.
1. **Canvas particles** (`#scene`) — 12 named particle systems sharing a single canvas. Seasons compose multiple layers (Molding Wet = fog + corner mold patches + spores; Spiders = corner webs + descending spiders; Flowering Wet = pollen haze + cherry-blossom petals).
2. **Civic chrome + content** — masthead, "Right Now" advisory button (click it to jump to today), persistent Today marker on the scrubber, big season name + body + civic-red `EXPECT` kicker. The civic-red itself adapts per season (`--season-red`): lifts on dark scenes, deepens on bright ones, so contrast holds across all 14 drenches.

### Audio

Sampled field recordings from [Freesound](https://freesound.org), all CC0. One OGG per season in `public/audio/` (~25s each at 80kbps Vorbis, ~3 MB total, ~250 KB per clip). Lazy-loaded: nothing is fetched until you toggle audio on, then the current season plus its two neighbors are decoded. Crossfading between seasons uses two `AudioBufferSourceNode`s ping-ponging through a shared master gain (1.4s linear ramps).

Jünuary stays silent on purpose. The fetch is suppressed entirely — no 404, no decode, just gain → 0.

Off by default; toggle with `M` or the speaker icon. Full attribution lives in the About modal (`?` icon) under "Sound credits."

## Run locally

The site lives in `public/` so the deploy target can `git pull` straight into the document root with no rsync step. Serve that directory:

```sh
python3 -m http.server -d public 8765
# then visit http://localhost:8765
```

`file://` won't work because `app.js` is loaded as an ES module.

## Keyboard

Arrow keys, `M`, and `R` work anywhere on the page. `Home`, `End`, `PageUp`, and `PageDown` require the scrubber handle to have focus (standard slider conventions).

| Key | Action |
|---|---|
| ← / → (or ↑ / ↓) | Step one season, wrapping at the year boundary |
| `Home` / `End` | Jump to the first / last week of the year (slider focused) |
| `PageUp` / `PageDown` | Skip ±4 weeks (slider focused) |
| `M` | Toggle ambient audio |
| `R` | Jump to today |

## Seasons by week

| # | Season | Weeks | EXPECT |
|---|---|---|---|
| 1  | The Dark Wet | 1–7 | Rain, gray skies, and deep thoughts |
| 2  | Paralyzing Snow | 8–9 | Panic, abandoned hatchbacks, and joy |
| 3  | Brightening Wet | 10–13 | Rain, but make it optimistic |
| 4  | Suncadia Break\* | 14 | Crowds, traffic, and regret for not leaving sooner |
| 5  | Molding Wet | 15–18 | Moss, mushrooms, and mystery smells |
| 6  | Flowering Wet | 19–22 | Blooms, allergies, the audacity of pollen |
| 7  | Jünuary | 23–25 | Confusion, layers, and a somber gloom |
| 8  | Glorious Sun | 26–29 | Vitamin D, crowds, and mild sunburn |
| 9  | Oppressive Sun | 30–32 | Complaints, AC envy, and melted patience |
| 10 | Smoke | 33–36 | Air filters, cancellations, and indoor everything |
| 11 | Welcome Drizzle | 37–39 | Light rain, deep sighs, and high acceptance |
| 12 | Spiders | 40–42 | Webs, jump scares, and dramatic exits |
| 13 | Convergence Zones | 43–45 | Chaos, micro-climates, and weird traffic |
| 14 | The Dark Wet (returns) | 46–52 | Peace, familiarity, and a warm hoodie |

\* Not a typo.

## Credits

- Concept: the original "Seattle Seasons" advisory poster (anonymous civic humorist). Source PNG kept locally as a design reference; gitignored.
- Site by [Dave](https://onk.io).
- Built with Claude Code and the `impeccable` design skill.
