# Use an official Node.js 18 runtime as a base image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
COPY tsconfig.json ./
COPY .env ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY src ./src

# Build TypeScript code
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Command to run your application
CMD ["node", "dist/controller/server/app.js"]
