# -- STAGE 1: Build the application --
# ------------------------------------

# Use the official Node.js image as the base image
FROM node:20-alpine AS builder

# Set the folder where the app will be build
WORKDIR /app

# Copy only the package files first (to optimize speed and cache installation)
COPY package.json package-lock.json ./

# Run 'npm ci' to clean-install ALL dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .



# -- STAGE 2: Create the production image --
# ------------------------------------------

# Use the official Node.js image as the base image for production
FROM node:20-alpine

# Set the folder where the app will run
WORKDIR /app

# Copy just the package files here to install only what we need to run the app
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy ONLY the main backend server file from Stage 1 (builder)
COPY --from=builder /app/server.js ./server.js

# Expose the port that the backend server will run on
EXPOSE 5000

# Start the backend server
CMD ["node", "server.js"]