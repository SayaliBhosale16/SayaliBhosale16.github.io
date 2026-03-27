# Frontend — Portfolio

Inherits all rules from the root `/CLAUDE.md`.

## Stack
- React 19 + TypeScript (strict mode)
- Vite + TanStack Router
- Tailwind CSS v4

## Architecture
- 3 pillar cards: Backend (teal), DevOps (purple), ML & AI (amber)
- All portfolio content in `src/data/` as TypeScript config
- Static images in `public/`

## Code Rules
- Named exports only, no default exports (except route components)
- Functional components only, no `any` type
- Tests: vitest + @testing-library/react

## Commands
```bash
npm run dev       # dev server on :5173
npm run build     # production build
npm run lint      # eslint
npm run test      # vitest
```
