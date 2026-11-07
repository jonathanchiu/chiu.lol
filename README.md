# chiu.lol

Jonathan Chiu's personal site. Astro, TypeScript, and Bun; hosted on Netlify.

## Development

Use Bun 1.4.2 and Node 24.

```sh
bun install --frozen-lockfile
bun run dev      # localhost:4321
bun run check    # Type checks
bun run build    # Static output in dist/
bun run preview  # Preview production build
```

## Editing

- `src/data/`: personal details, links, and releases
- `src/pages/`: page content
- `src/styles/global.css`: styling
- `src/layouts/Layout.astro`: shared layout and metadata

## Deployment

The existing Netlify project uses `netlify.toml`: build with `bun run check && bun run build`, publish `dist`. Commit `bun.lock`.

For the first deploy after Gatsby, clear the build cache, remove any Gatsby plugins in Netlify, and use a current build image.

If changing domains, update `astro.config.mjs` and `public/robots.txt`.

## Compatibility

TypeScript 6 is required by `astro check`. `@emnapi/runtime` is pinned to 1.11.3 to match the checker's WASM core; revisit when updating Astro's language tools.
