# KARUN.DEV — The Shinobi Developer

A dark, Sharingan-inspired personal portfolio built with Next.js, TypeScript, Tailwind CSS and Framer Motion.

## Run locally (Windows)

1. Install Node.js 20 LTS.
2. Extract this folder.
3. Open the folder in VS Code.
4. In the terminal run:

```bash
npm install
npm run dev
```

5. Open http://localhost:3000

## Configure contact form

Copy `.env.example` to `.env.local`, add a Resend API key and set your destination email. The form intentionally returns an error until the service is configured.

## Deploy to Vercel

1. Push this project to a new public or private GitHub repository.
2. Import the repository into Vercel.
3. Add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and optionally `CONTACT_FROM_EMAIL` under Project Settings → Environment Variables.
4. Deploy.

## Before publishing

- Confirm project ownership, descriptions, stack and status.
- Replace placeholder LinkedIn and Instagram links.
- Add verified contact email.
- Add a real resume PDF when ready.
- Replace `example.com` metadata base with the deployed domain.
- Verify all screenshots and remove confidential data.
- Review any third-party anime artwork licensing. This starter uses an original generated portrait asset and Uchiha-inspired design cues.

## Project accuracy

Project cards are deliberately conservative. Some repository README files were generic or unavailable, so those project details are marked for verification rather than invented. GMU Connect is explicitly presented as a prototype and not a live university ERP integration.


## Cinematic Mangekyo intro (updated)

The homepage now opens with a full-screen, black-and-crimson Sharingan intro:
- Two oversized, original Itachi-inspired Mangekyo SVG eyes open with a vertical eyelid reveal.
- Three-blade tomoe motifs rotate subtly with red iris glow.
- Animated crow silhouettes cross the scene, converge during the manifestation beat, and scatter when the visitor enters the portfolio.
- Feather particles, red moon, torii silhouette, atmospheric grain and responsive title/button UI.
- Sound is opt-in (browser autoplay restrictions); use SOUND ON/OFF.
- ENTER THE TSUKUYOMI and SKIP INTRO dismiss the overlay.
- The intro is shown on each fresh homepage load. Reduced-motion preferences are respected.
- The hero artwork is an original SVG illustration; the personal photo is not used in the hero.

### Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000. The intro sound is an original synthesized ambient effect in `public/audio/sharingan-awakening.wav`.
