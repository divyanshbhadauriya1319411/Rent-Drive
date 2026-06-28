# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**RentDrive** is a car rental/booking web application built with React 19 + Vite. The UI is based on a Bootstrap-based "car rental" HTML template (served as static assets from `public/`), and the app uses Redux Toolkit + redux-saga for state management. There is no test framework configured.

## Commands

Run from the project root:

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint over all `.js`/`.jsx` files (config in `eslint.config.js`)

There are no tests. There is no separate formatter configured.

## Environment

Environment variables live in `.env` at the repo root and are consumed via `import.meta.env.VITE_*` (Vite convention). Key vars:

- `VITE_APP_BACKEND_SERVER` — base URL for the REST backend (default `http://localhost:8000`)
- `VITE_APP_IMAGE_SERVER` — base URL for image assets
- `VITE_APP_SITE_NAME`, `VITE_APP_ADDRESS`, `VITE_APP_MAP1/2`, `VITE_APP_EMAIL`, `VITE_APP_PHONE`, `VITE_APP_WHATSAPP`, and the social handles — used by `Navbar`/`Footer` for branding and contact info

## Architecture

### Entry & routing
- `src/main.jsx` mounts `<App />` wrapped in Redux `<Provider>` and React `<StrictMode>`
- `src/App.jsx` is the route table — `BrowserRouter` + `Navbar` + `Routes` + `Footer`. Public routes (`/`, `/about`, `/car`, etc.) and Admin routes (`/admin/*`) are defined here. The wildcard route renders `Pages/ErrorPage.jsx`
- Admin pages live under `src/Pages/Admin/<Resource>/` and share the sidebar at `src/Components/Admin/AdminSidebar.jsx` (links to brand/car/category/feature/service/faq/setting/newsletter/contact/user — many of those pages do not yet exist)

### State management (Redux Toolkit + redux-saga)
- `src/Redux/Store.jsx` configures the store with `configureStore`, registers the saga middleware, and immediately calls `Saga.run(RootSaga)` at module load
- Convention for every resource (Category, Brand, Car, Feature, Service, Faq, Setting):
  - Action type constants in `src/Redux/Constant.jsx` — pairs of `CREATE_X` / `CREATE_X_RED`, `GET_X` / `GET_X_RED`, `UPDATE_X` / `UPDATE_X_RED`, `DELETE_X` / `DELETE_X_RED`. The `_RED` suffix is the reducer-bound action emitted by sagas; the plain one is the watcher-trigged action dispatched from components
  - Action creators in `src/Redux/ActionCreators/<Resource>ActionCreators.jsx`
  - Worker sagas + watchers in `src/Redux/Sagas/<Resource>Saga.jsx` (use `takeEvery`)
  - Reducer in `src/Redux/Reducers/<Resource>Reducer.jsx`
  - Wired into `RootSaga` (`src/Redux/Sagas/RootSaga.jsx`) and `RootReducer` (`src/Redux/Reducers/RootReducer.jsx`)
- The HTTP layer is in `src/Redux/Sagas/Services/index.jsx` — five helpers (`createRecord`, `createMultipartRecord`, `getRecord`, `updateRecord`, `updateMultipartRecord`, `deleteRecord`) that all `fetch` against `${VITE_APP_BACKEND_SERVER}/${collection}`. Pick the multipart variant when the payload contains file uploads (`FormData`); pick the JSON variant otherwise. `CategorySaga.jsx` shows both alternatives commented out — follow that pattern when adding new resources

### Form validation
- `src/FormValidators/TextValidators.jsx` — switch on `e.target.name`; currently only validates a `name` field (required, 2–100 chars). Extend the switch when adding fields
- `src/FormValidators/ImageValidators.jsx` — checks type (jpg/jpeg/png/gif/webp) and size (≤1 MB); returns an error string or `""`

### Template assets
The `public/` folder holds the original template's static assets (CSS, images, JS, SCSS, and vendor libs in `public/lib/` — wow, easing, waypoints, counterup, owlcarousel, lightbox, animate). `index.html` loads `bootstrap.min.css`, `style.css`, Google Fonts, Font Awesome, Bootstrap Icons, and a stack of jQuery/Bootstrap/template scripts. `src/main.jsx` does NOT import CSS — styling is entirely template-driven via the `public/` assets and Bootstrap classes used inline in JSX.

### DataTable usage
`datatables.net-dt` is initialized imperatively inside a `useEffect` on the Admin Category page (`new DataTable('#myTable')`). When adding new admin list pages, follow the same pattern (init in `useEffect` with a short `setTimeout`).

## Things to know

- The `Constant.jsx` file currently contains duplicate `CATEGORY` constant blocks — clean up before adding anything that imports those constants
- Some ActionCreator files import malformed constants (e.g. `CarActionCreators.jsx` imports `CREATE_CARGET_CAR` instead of `CREATE_CAR`). These are existing bugs; fix the import to match the actual constant name in `Constant.jsx`
- The `NavLink` for "Contact" in `Navbar.jsx` is missing a leading slash: `to="contact"` instead of `to="/contact"` — flag if you touch that file
- Admin sidebar lists many resources (brand, feature, service, faq, setting, newsletter, contact, user) whose routes/pages do not exist yet. Adding one of those features requires creating: ActionCreators → Constant entries → Saga (worker + watcher) → Reducer → register both in `RootSaga`/`RootReducer`, plus the page
- No backend is included in this repo — `VITE_APP_BACKEND_SERVER` must point at a separate REST API