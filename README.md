# DAISI website

The site for the Dartmouth AI Safety Initiative for Students, at https://dartmouthaisafety.org.
Built with [Astro](https://astro.build). One page, plus a thanks page after the form. Design exploration lives in `design/`; poster assets in `poster/`.

## Run it

```sh
npm install
npm run dev       # http://localhost:4321, reloads as you edit
npm run build     # static site in dist/
```

## Where things live

| What | Where |
| --- | --- |
| Email, GroupMe, booking link, dates, notice bar, nav | `src/data/site.ts` |
| Where dartmouthaisafety.org/qr goes (QR image in `poster/site-qr.*`) | `qrUrl` in `src/data/site.ts` |
| Weekly topics (collapsed on the home page) | `group.curriculum` in `src/data/site.ts` |
| The "Useful reading" list | `src/data/resources.ts` |
| Home page copy | `src/pages/index.astro` |
| The sign-up form | `src/components/SignupForm.astro` |
| Colours, type, layout | `src/styles/global.css` |
| Header, footer, `<head>`, copy-to-clipboard email links | `src/layouts/Base.astro` |

## The sign-up form

The form on the home page posts straight into the Google Form (`site.form` in `src/data/site.ts`),
so responses land in the Google Form's spreadsheet. Turn on email notifications there:
Responses tab → ⋮ → "Get email notifications for new responses".

If you change the Google Form's questions, the question ids change and the site form breaks.
To get the new ids, open the form's public link, view source, and search for `FB_PUBLIC_LOAD_DATA_`;
each question's numeric id goes in `site.form.fields` as `entry.<id>`. Checkbox options in
`site.form.timeOptions` must match the Google Form's options exactly.

## Deploy (Cloudflare Pages)

The domain is on Cloudflare, so Pages is the simplest host. No GitHub needed:

```sh
npm run build
npx wrangler login
npx wrangler pages deploy dist --project-name dartmouthaisafety
```

Then in the Cloudflare dashboard: Workers & Pages → dartmouthaisafety → Custom domains → add
`dartmouthaisafety.org` (and `www`). Repeat the build and deploy commands to publish changes.
