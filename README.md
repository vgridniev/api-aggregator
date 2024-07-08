# Production example
https://frontend-vgridniev-vgridnievs-projects.vercel.app/ - frontend
https://api-aggregator-backend-10c40939c945.herokuapp.com - backend

# API Aggregator

This repository contains the source code for the API Aggregator application, which consists of a frontend and backend. The frontend is built with Next.js, and the backend is built with Nest.js.

## Folder Structure

- `backend`: Contains the Nest.js backend application.
- `frontend`: Contains the Next.js frontend application.

## Prerequisites

- Node.js (v18.x)
- PostgreSQL (v16.x)
- Docker (optional, for containerization)

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/vgridniev/api-aggregator.git
cd api-aggregator
```

### 2. Install dependencies

```bash
cd backend
npm install
cd ../frontend
npm install
```

### 3. Environment Variables

Create environment variable files for both backend and frontend.

- **Backend**: Create `.env.local` and `.env.prod` files in the `backend` folder.
- **Frontend**: Create `.env.local` and `.env.prod` files in the `frontend` folder.

Refer to the respective `README.md` files in `backend` and `frontend` for details.

### 4. Running the Applications

#### Backend

```bash
cd backend
npm run start:dev
```

#### Frontend

```bash
cd frontend
npm run dev
```

### 5. Deployment

Refer to the `README.md` files in `backend` and `frontend` for deployment instructions.

## CI/CD Pipeline

The project uses GitHub Actions for CI/CD. The pipeline includes building and deploying both backend and frontend applications.

### Build and Deploy

The pipeline is triggered on push to the `main` branch and pull requests to `main`.

- **Build**: Installs dependencies and builds both backend and frontend projects.
- **Deploy Backend**: Builds and pushes a Docker image to Heroku Container Registry and releases it.
- **Deploy Frontend**: Deploys the frontend to Vercel.

Refer to `.github/workflows/ci-cd.yml` for the complete configuration.
