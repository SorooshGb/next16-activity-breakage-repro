# Next.js 16 cacheComponents / Activity Reproduction

## Steps

1. Install dependencies:

```
npm install
```

2. Install Playwright Chromium:

```
npx playwright install chromium
```

3. Run the development server:

```
npm run dev
```

4. Test the app manually to observe the problems mentioned in the GitHub issue

5. While the dev server is running, execute the E2E tests:

```
npm run test:e2e
```

This will show the failing test caused by Activity-based route preservation in Next.js 16 (`cacheComponents: true`).

## Note

Setting `cacheComponents` to `false` in `next.config.js` will prevent Activity from preserving previous routes and fixes all issues demonstrated in this repo: [vercel/next.js#86577](https://github.com/vercel/next.js/issues/86577)
