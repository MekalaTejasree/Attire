# Attire Frontend

E-commerce React app with Firebase auth/Firestore and Stripe Checkout.

## Prerequisites

- Node.js 18+
- Yarn or npm
- Stripe account (for keys)
- Firebase project (for web config)

## Environment Variables

Create a `.env` in `frontend14/` based on `env.example`:

```
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_AUTH_DOMAIN=...
REACT_APP_FIREBASE_PROJECT_ID=...
REACT_APP_FIREBASE_STORAGE_BUCKET=...
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
REACT_APP_FIREBASE_APP_ID=...

PORT=5000
```

Never commit real secrets. `.gitignore` excludes `.env` files.

## Install and Run

```
cd frontend14
npm install
npm run start
```

### Stripe dev server

This repo includes an Express server at `frontend14/server.js` for creating checkout sessions.

```
# in another terminal
cd frontend14
npm run server
```

Configure webhook in Stripe Dashboard to `http://localhost:5000/api/webhook` and put the secret in `STRIPE_WEBHOOK_SECRET`.

## Build

```
npm run build
```

## Git Setup and Push

```
# from project root (e commerce14)
git init
git add .
git commit -m "feat: initial import with env and gitignore"
git branch -M main
git remote add origin https://github.com/MekalaTejasree/Attire.git
git push -u origin main
```

## Security

- Firebase and Stripe keys are loaded from environment variables
- Do not commit `.env` or private keys

## License

MIT
