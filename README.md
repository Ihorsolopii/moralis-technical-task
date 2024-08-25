## Test automation framework for Moralis Application

### Prerequisites:

- Node.js version 20+
- npm version 8+

### Tools:

1. Node v22.7.0
2. Typescript
3. Playwright
4. ESlint
5. Prettier
6. Husky
7. Dotenv
8. GitHub Actions

### Getting started:

#### Install project dependencies

```bash
npm install
```

or

```bash
npm ci
```

#### Add ENV variables

```bash
cp ./.env.example ./.env
```

This config is also personal, so you could modify it as you like.

#### Setting proper env variables

- `FRONTEND_URL` defines frontend URL. Defaults to `https://admin.moralis.io`
- `BACKEND_URL` defines backend URL. Defaults to `https://api.dashboard.moralis.io`
- `USER_EMAIL` defines user email
- `USER_PASSWORD` defines user password

#### Run tests

```bash
npm run test
```

or

```bash
npm t
```

#### Run tests in UI mode

```bash
npm run test:ui:mode
```

#### Check the code quality

```bash
npm run check-all
```

#### HTML Report

```bash
npm run report
```
