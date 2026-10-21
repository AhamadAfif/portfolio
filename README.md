# Ahamad Afif – Portfolio

React 18 + TypeScript + Vite + Tailwind CSS v4. Deployed on Vercel, with the contact form
sending email through [Resend](https://resend.com) via a serverless function (`api/contact.ts`).

## Run locally

```bash
npm install
npm run dev            # frontend only (contact form will not send)
```

To test the contact form locally, run it together with the API route:

```bash
npm i -g vercel
cp .env.example .env.local   # then fill in the values
vercel dev
```

## Contact form setup (Resend)

1. Create an API key at <https://resend.com/api-keys>.
2. In Vercel → Project → Settings → Environment Variables, add (Production, Preview, Development):

   | Name | Value |
   | --- | --- |
   | `RESEND_API_KEY` | your Resend API key |
   | `CONTACT_TO_EMAIL` | the inbox that should receive messages |
   | `RESEND_FROM` *(optional)* | defaults to `Portfolio Contact <onboarding@resend.dev>` |

3. Redeploy so the variables take effect.

Notes:
- With the default `onboarding@resend.dev` sender, Resend **only delivers to the email address of your
  own Resend account**. To send to any other inbox, verify a domain in Resend and set `RESEND_FROM`
  to an address on it.
- The API key lives only in server-side environment variables. Never put it in `src/` or commit it.
- Messages arrive with `Reply-To` set to the visitor, so you can just hit Reply.

## Project layout

```
api/contact.ts      Resend serverless function
src/components/     Page sections (Hero, About, Skills, Certifications, Projects, Resume, Contact…)
src/components/ui/  The few shadcn/ui primitives actually used
src/data/           Skills, projects and certifications content
src/assets/         Optimised images (WebP)
```

## Scripts

`npm run dev` · `npm run build` · `npm run preview` · `npm run typecheck`

## Attributions

UI primitives adapted from [shadcn/ui](https://ui.shadcn.com/) (MIT).
