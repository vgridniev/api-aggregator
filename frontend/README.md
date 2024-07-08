# Frontend - API Aggregator

This folder contains the source code for the frontend application of the API Aggregator, built with Next.js.

## Prerequisites

- Node.js (v18.x)

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Environment Variables

Create environment variable files for the frontend application.

- **.env.local**: For local development
- **.env.prod**: For production deployment

#### Example `.env.local`:

```plaintext
NEXT_PUBLIC_API_URL=http://localhost:4000
```

#### Example `.env.prod`:

```plaintext
NEXT_PUBLIC_API_URL=https://your-production-api-url.com
```

### 3. Running the Application

#### Development

```bash
npm run dev
```

### 4. Deployment

The frontend application is deployed to Vercel.

```bash
npx vercel --prod --token ${{ secrets.VERCEL_TOKEN }} --cwd frontend
```

## CI/CD Pipeline

The CI/CD pipeline uses GitHub Actions to automate the build and deployment process.

### Build and Deploy

The pipeline is triggered on push to the `main` branch and pull requests to `main`.

- **Build**: Installs dependencies and builds the frontend project.
- **Deploy**: Deploys the frontend to Vercel.

## Notes

- Ensure that the environment variables are correctly set in the Vercel dashboard for the production deployment.
