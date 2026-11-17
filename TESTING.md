# CITY JAM triple test

Checked in the browser on this branch, with the same rewrite a static host uses (`vercel.json`: unknown paths serve `index.html`, the tour page serves its own file). Widths: 375, 768, and 1440. Reduced motion checked with `prefers-reduced-motion: reduce`.

Contrast measured against the brand tokens: ink on paper 17.44:1, mute `#6B6A66` on paper 4.80:1, violet `#8B3FD1` on paper 4.99:1, sample label `#C8C4BC` on ink 11.32:1. All of those clear WCAG AA for the text that uses them.

## Fixes made while testing

- Concept phone screens were inheriting the page’s paper background, which hid the figures. They now stay ink, with paper type.
- Pricing tier links pointed at `#/circle`, which does not change the page. They now open `/circle`.
- The external magazine link inside that shelf is no longer intercepted by the in-site router.
- The “RENDER” watermark is off the desk tiles.

## Result by route

| Route | Result | Notes |
|---|---|---|
| `/` | Fail | Loads, no console errors, no overflow, reduced motion holds. The door button “Get a direct call with Pat” is `href="#"` and does not open a booking target. |
| `/app` | Fail | Same unset booking button. “Three concepts for the app” opens `/app/concepts`. |
| `/manifesto` | Fail | Same unset booking button. The essay and the door render. |
| `/app/concepts` | Pass | Three concept cards, each opens its prototype. Link back to `/app`. |
| `/app/concepts/a` | Pass | Command. Five screens, “Sample data” on each. Primary “Work” opens the catalogue. Fans, Live, and Business are tappable. No overflow. |
| `/app/concepts/b` | Pass | Studio Notebook. Five editorial screens, sample label on each, primary advances the issue. |
| `/app/concepts/c` | Pass | The House. Hall plus Art, Fans, Live, and Business. Primary “Art” opens that room. |
| `/labs` | Pass | Apply buttons open the Creator Labs form on the page. |
| `/teach` | Pass | “Apply to teach” opens the form. |
| `/learn` | Pass | Courses render. The action is the quiet “Coming soon” hold from the copy. |
| `/ambassadors` | Pass | “Apply for your city” opens the form. |
| `/sync` | Pass | “Send us the record” opens the form. |
| `/studios` | Pass | “Apply for certification” opens the form. |
| `/magazine` | Pass | Hold page. “Coming soon”. |
| `/circle` | Pass | Returns the app document, then the script sends the visitor to `/`. |
| `/rebels-and-legends/tour` | Pass | Hero, the required touring line, the map, and “Apply to Creator Labs” to the existing application. No overflow at 375. |
| `/playlists` | Pass | “Play us something” opens the form on the page. |
| `/desks` | Pass | Desk grid links to `/desks`. |
| `/pricing` | Pass | Tier actions now open `/circle` or the magazine. |
| `/workbook` | Pass | Edition links stay on the page anchors. |
| `/hired` | Pass | Route still loads. It is not in the nav. |
| `/cities` | Pass | City grid renders. |
| `/founders` | Pass | “Claim a Founders seat” stays on the page anchor. |
| `/careers` | Pass | Each role’s Apply opens the jobs form. |
| `/print` | Pass | “Request the media kit” opens the form. |
| `/business` | Pass | “Send it over” opens the form. |
| `/partners` | Pass | “Start the conversation” opens the form. |
| `/bookers` | Pass | “Get on the waitlist” opens the form. |
| `/terms` | Pass | Renders. |
| `/privacy` | Pass | Renders. |

Every route above returned HTTP 200. No console exceptions on home, Command, pricing, or the tour. No horizontal overflow at 375, 768, or 1440. With reduced motion, hero photos are fully open (`clip-path: none`) and the violet pulse does not run.

## Remaining failure

“Get a direct call with Pat” still has no booking address. The copy left that link open, so the button is present and does not navigate. It sits in the nav, and it is the primary action on `/`, `/app`, and `/manifesto`. Those three routes are the fails in the table. The shared nav button is the same gap on every other page; their own page actions do go somewhere.
