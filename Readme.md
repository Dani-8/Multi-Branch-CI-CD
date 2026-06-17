# Employee Backend API — Multi-Branch CI/CD & Docker Pipeline

A production-ready, backend-only Node.js service engineered with a modular architecture, comprehensive test suites, multi-stage Alpine Docker virtualization, and an automated multi-branch GitHub Actions CI/CD pipeline simulating real-world enterprise deployment strategies.

## 🛠️ Tech Stack & Architecture

- Runtime Environment: Node.js (v20.x Alpine)
- Framework: Express.js (Modular routing)
- Testing Suite: Jest / Supertest (Automated unit & integration testing)
- Containerization: Docker (Multi-stage lightweight production builds)
- CI/CD Automation: GitHub Actions (Separate Staging & Production workflows)

## 📁 Project Directory Structure

> Note: `.github` must live at the absolute root of your project folder so GitHub can find your workflows.

```
.github/
└─ workflows/
   ├─ dev-ci-cd.yml       # Staging Pipeline (Triggers on 'dev' branch)
   └─ prod-ci-cd.yml      # Production Pipeline (Triggers on 'main' branch)
.dockerignore             # Docker build optimization exclusions
.gitignore                # Git exclusion rules
Dockerfile                # Multi-stage optimized build specification
package.json              # Project dependencies and scripts
server.js                 # Express application entrypoint
server.test.js            # Automated verification test suite
```

## ⚙️ CI/CD Branching Architecture

This ecosystem simulates an enterprise release pipeline across isolated environments using distinct GitHub Actions workflows.

### 1. Staging Environment (`dev` branch)

- Trigger: Automated on any push or merge to the `dev` branch.
- Workflow: Runs linting and Jest test suites. Upon verification, compiles and pushes a lightweight Docker image tagged as `:dev` to Docker Hub.
- Purpose: Enables developer testing and internal quality assurance verification before touching production.

### 2. Production Environment (`main` branch)

- Trigger: Automated on verified pull request merges from `dev` into `main`.
- Workflow: Executes the full testing cycle. Upon success, builds the production container and tags it with both `:latest` and a unique atomic short commit SHA (`:${{ steps.vars.outputs.sha_short }}`).
- Purpose: Serves the active, client-facing production application.

## 🐳 Docker Virtualization Strategy

The project utilizes a multi-stage build process inside the `Dockerfile` to guarantee high performance and minimize the final production image footprint.

- **Builder Stage** (`node:20-alpine`): Installs all development dependencies and compiles source files.
- **Production Stage** (`node:20-alpine`): Copies over only pure production files and executes `npm ci --only=production`. This slashes container size by omitting testing suites, development utilities, and unneeded dependencies.

## 🚀 Local Quickstart Guide

### Prerequisites

- Node.js v20.x installed locally
- Docker Desktop daemon running

### 1. Local Development

```bash
# Install development dependencies
npm install

# Execute the test suite
npm test

# Launch the server locally
npm start
```

The server will boot up locally at `http://localhost:5000`.

### 2. Verified Local Docker Orchestration

```bash
# Build the optimized production image
docker build -t employee-backend .

# Run the container mapping port 5000
docker run -d -p 5000:5000 --name employee-api-service employee-backend

# Verify running logs
docker logs employee-api-service

# Gracefully terminate the container
docker stop employee-api-service && docker rm employee-api-service
```

## 🔌 API Endpoints Reference

| HTTP Method | Endpoint | Description | Expected Response |
|-------------|----------|-------------|-------------------|
| GET | `/` | Base Health Check | `{"status": "success", "env": "production", "message": "Welcome to the Employee API"}` |
| GET | `/api/user` | Retrieve All Employees | `[{"id": 1, "name": "Alice Smith", "role": "DevOps Engineer", "department": "Infrastructure"}, ...]` |
| GET | `/api/management` | Retrieve Managers & Specialists | `[{"id": 4, "name": "Diana Prince", "role": "Product Manager", "department": "Product"}, ...]` |

Developed as part of a modern portfolio illustrating production-grade DevOps engineering practices.
