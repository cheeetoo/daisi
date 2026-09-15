# DAISI website

The site for the Dartmouth AI Safety Initiative for Students, built with [Astro](https://astro.build).
Four pages: home, get involved, mission, resources. Design exploration lives in `design/`.

## Run it

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
```

## Where things live

| What | Where |
| --- | --- |
| Name, email, links, current term, the green notice bar, nav | `src/data/site.ts` |
| Resources page and the home page's "Start here" list | `src/data/resources.ts` |
| Page copy (home, get involved, mission) | `src/pages/*.astro` |
| Colours, type, layout | `src/styles/global.css` |
| Header, footer, `<head>` | `src/layouts/Base.astro` |
| The expression of interest form | `src/components/InterestForm.astro` |

Everything in square brackets, like `[Winter 2027]` or `[date]`, is a placeholder to fill in.
`grep -rn '\[' src` lists them all.

## The form

The form posts three fields (`name`, `email`, `interests`) to `formEndpoint` in `src/data/site.ts`.
Until that is set, the page shows a red note under the form and submitting does nothing.

Easiest: make a free form at [formspree.io](https://formspree.io), paste the endpoint
(`https://formspree.io/f/xxxxxxxx`) into `formEndpoint`, and submissions arrive by email.
The form already sends `_subject`, `_next` (redirects to `/thanks/`) and a honeypot field.

If you host on Netlify, the `data-netlify` attribute is already on the form, so Netlify Forms will
pick it up with no endpoint at all; leave `formEndpoint` empty and delete the red-note block in
`InterestForm.astro`.

If you'd rather use a Google Form, replace `<InterestForm />` in `src/pages/get-involved.astro` with
a link or an `<iframe>` to it.

## Deploy

It's a static site, so anything works: Cloudflare Pages, Netlify, Vercel, GitHub Pages.
Build command `npm run build`, output directory `dist`. Set `site` in `astro.config.mjs` once you
have a domain.

## Design

`design/` holds the artboards behind the published design canvas (the `.dc.html` files and
`canvas.json`). They are reference only; the site does not build from them.
