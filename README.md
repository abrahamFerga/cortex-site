# cortex-site

The umbrella marketing + docs site for Cortex products (Astro + Starlight, MIT stack).

- `/` — brand landing. `/pricing` — rendered from `src/data/pricing.json` (one JSON mirrors the
  Stripe Prices; fill each tier's `stripePriceId` per environment). `/products/<id>` — product
  landing pages.
- `/docs/<product>/…` — product documentation (Starlight). Docs are markdown-first and belong to
  each product's own repo; CI pulls them into `src/content/docs/docs/<product>/` at build time
  (checkout-and-copy). They live here directly until that pipeline exists.

```bash
pnpm install
pnpm dev      # local dev server
pnpm build    # static build in dist/
```

Placeholder domain: set the real one in `astro.config.mjs` (`site:`) before publishing.
See `docs/COMMERCIALIZATION.md` in the Cortex repo for the full commercial pipeline this site
fronts.
