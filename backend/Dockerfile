# Use the official Node.js image as the base image
FROM node:20-alpine AS buider

# Set the folder where the app will be build
WORKDIR /app

# Copy only the package files first (to optimize speed and cache installation)
COPY package.json package.lock.json ./

# Run 'npm ci' to clean-install ALL dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .
