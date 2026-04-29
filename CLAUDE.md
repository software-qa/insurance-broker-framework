# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Run all tests
npx playwright test

# Run a single test file
npx playwright test tests/registerlogin.spec.js --headed chrome

# Run a single test by name
npx playwright test -g "Register User"

# Run tests in headed (visible browser) mode
npx playwright test --headed

# Open the HTML test report after a run
npx playwright show-report
```

## Architecture

This is a **Playwright end-to-end test automation framework** targeting the Guru99 Insurance demo application at `https://demo.guru99.com/insurance/v1/index.php`.

- **`playwright.config.js`** — Central config. Sets `baseURL` to the insurance app, runs tests in Chromium only, uses HTML reporter, enables full parallelism locally, and limits to 1 worker + 2 retries on CI.
- **`utils/baseclass.js`** — `BaseClass` wraps all raw Playwright calls (`click`, `fill`, `navigate`, `verifyURL`, `takeScreenshot`, etc.). Every page object extends this class so common actions stay in one place.
- **`pages/`** — Page Object Model classes, each extending `BaseClass`. Locators and page-level action methods live here; no `expect` calls or test logic.
  - `RegisterPage.js` — register form locators + `registerUser(userData)` composite action.
  - `LoginPage.js` — login form locators + `login(email, password)` composite action.
  - `DashboardPage.js` — post-login verification (`verifyDashboardLoaded`, `logout`).
- **`tests/`** — Spec files only. Import page objects, supply data, assert outcomes. No raw `page.locator` calls here.
  - `auth.spec.js` — register → dashboard, login → dashboard, invalid-login stays on index.

### Conventions

- All locators stay inside page objects; specs never reference selectors directly.
- Screenshots are saved to `screenshots/<name>.png` via `BaseClass.takeScreenshot()`.
- Locators use XPath for text-based elements (`//a[text()="Register"]`) and CSS IDs for form fields (`#user_email`).
- Navigation paths are relative to the origin: `page.goto('/insurance/v1/index.php')`.

### Note on module format

`package.json` declares `"type": "commonjs"`, but all files use ESM `import` syntax. Playwright's transform layer handles this — do not add `"type": "module"` to `package.json`.
