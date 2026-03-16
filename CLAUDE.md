# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Start development server
npm run build    # Build production bundle
npm test         # Run tests (Jest + React Testing Library)
```

No dedicated lint command — ESLint runs automatically during build/test via the `react-app` preset.

## Environment Setup

Create a `.env.local` file with your NYT API key:
```
REACT_APP_CARPE_DIEM_NYT=your_api_key_here
```

## Architecture

Carpe Diem is a React SPA morning dashboard. It uses class components throughout (no hooks), with local state per component — no Redux or Context API.

**Component tree:**
```
App
├── Header        (static)
├── Quote         (fetches from kanye.rest on mount)
└── NewsList      (fetches from NYT Top Stories API on mount)
    └── NewsCard  (per-article card; click opens Bootstrap Modal)
```

**External APIs:**
- NYT Top Stories (Arts): `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=...`
- Kanye quotes (no auth): `https://api.kanye.rest/`

Note: Axios interceptors are intentionally not used for the NYT API key (commented out in `src/index.js`) — the NYT API doesn't handle interceptors correctly. The API key is appended as a query param in `NewsList.js` instead.

`BrowserRouter` is configured in `src/index.js` but routing is not yet used in the component tree.
