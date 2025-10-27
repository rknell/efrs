# eFRS (Enterprise Field Reporting System)

This repository contains the open-source release of **eFRS**, a Node.js/React
Native platform for building and distributing rich field-data collection
workflows. The codebase is split into:

- `server/` – Express + MongoDB API powering web/mobile clients.
- `app/` – React Native application targeting iOS and Android.
- Supporting scripts, workers, and infrastructure configs.

The project has been sanitised for public release—secrets, certificates, and
branding have been replaced with placeholders. Follow the guidance below to
provision your own credentials and get the system running.

---

## Quick Start

### 1. Prerequisites

| Component         | Requirement                                   |
|-------------------|-----------------------------------------------|
| Node.js           | ≥ 18.x (developed with Node 23 during audit)  |
| Yarn              | ≥ 1.x (preferred package manager)             |
| MongoDB           | Replica set-capable MongoDB 4.x or newer      |
| Watchman (macOS)  | Required for optimal React Native experience  |
| Xcode / CocoaPods | iOS builds                                    |
| Android SDK/NDK   | Android builds                                |

> **Note:** Tests were not passing in the original environment and still
> require additional work. The instructions below focus on getting the app and
> API running; expect to invest time stabilising the test suites.

### 2. Install dependencies

```bash
yarn install          # installs server dependencies
(cd app && yarn)      # installs React Native dependencies
```

The `app/` project uses CocoaPods for iOS:

```bash
(cd app/ios && pod install)
```

### 3. Provide credentials and configuration

Most production credentials were removed. You must supply your own secrets via
environment variables or local files. Common locations:

- `certs/README.md` – describes where to place API certificates/keys.
- `server/certificates/README.md` – describes APNs/Firebase cert locations.
- `mongoServer/README.md` – explains how to generate a replica-set key.
- `app/android/app/README.md` & `app/ios/README.md` – outline required mobile
  configuration files (`google-services.json`, signing keys, etc.).

Create an `.env` (or export variables) with values such as:

```
DB_URI=mongodb://localhost:27017/efrs
JWT_SECRET=change-me
SENDGRID_APIKEY=your-sendgrid-key
STRIPE_PRIVATE_KEY=your-stripe-key
AWS_ACCESS_KEY=...
AWS_SECRET_KEY=...
GOOGLE_STATIC_MAPS_KEY=...
GOOGLE_STATIC_MAPS_SECRET=...
```

Review `pm2.json` and `ecosystem.json` for the full list of expected runtime
variables. Replace `<your-...>` placeholders with real values.

### 4. Seed development data (optional)

Tests rely on fixtures under `server/tests/fixtures/`. You can load them into a
dev database using the existing test setup script or your own seeding process.
Remember that all emails/domains are anonymised placeholders.

### 5. Run the API locally

```bash
yarn start            # or node server/app.js
```

For PM2 users:

```bash
pm2 start pm2.json
```

### 6. Run the React Native app *(currently broken)*

At the time of open-sourcing, the mobile app **does not compile**:

- The project targets an outdated React Native (0.59.x). Upgrading to a modern
  release is non-trivial and cascades into major changes across MobX,
  decorators, and a number of native modules. Expect substantial work before
  either platform builds again.
- Android is in a dependency deadlock—Gradle resolves conflicting packages and
  the build fails long before reaching an installable APK. Multiple attempts
  have been made without success; if you dive in, document any breakthroughs.

You can still attempt to run the existing project with:

**iOS (legacy setup)**

```bash
cd app
npx react-native run-ios
```

**Android (currently fails)**

```bash
cd app
npx react-native run-android
```

Provide a running Metro bundler if not auto-started:

```bash
cd app
npx react-native start
```

> **Status:** Both iOS and Android require significant refactoring before they
> produce working builds. Treat the existing code as a starting point rather
> than a production-ready app.

### 7. Tests (known issues)

- Server tests: `yarn test:dev` (expect failures; see note above).
- Mobile tests: `cd app && yarn test`.

Document failing suites as you stabilise them so contributors know what to
expect.

---

## Project Structure

```
server/             Express API, views, services, tests
app/                React Native mobile project
workers/            Background jobs (e.g. S3 backups)
scripts/            Utility scripts and API client samples
mongoServer/        MongoDB replica-set configuration
certs/, server/certificates/   Credential mounting points
```

Notable files:

- `LICENSE.txt` – Community Source License governing usage.
- `backupsendgridsettings.txt` – instructions for SendGrid config.
- `Dockerfile` – container build reference (update env vars before use).

---

## Deployment Notes

1. **Environment variables** – never commit live secrets. Inject them via your
   deployment pipeline (Docker, PM2, Heroku, etc.).
2. **Certificate management** – store signing keys/JSON service accounts in a
   secure secret store (Vault, AWS Secrets Manager) and mount/inject them at
   deploy time.
3. **Database** – production systems should run against a replica-set MongoDB
   cluster with authentication enabled. Update `DB_URI` accordingly.
4. **Emails & Payments** – integrate your own SendGrid/Mailgun and Stripe keys
   before enabling notification or billing functionality.

---

## Contributing

1. Fork the repository and create feature branches (`feat/...`, `fix/...`).
2. Ensure new secrets/config instructions are documented.
3. Submit pull requests referencing the issue/feature you’re addressing.

Please note the license obligations: modifications must be contributed back,
and commercial resale/third-party hosting is not permitted.

---

## License

Released under the **eFRS Community Source License** (`LICENSE.txt`). The
license permits internal use and modification but disallows commercial resale
or offering the platform as a service to third parties. Contributions back to
the main project are required for derivative works.
