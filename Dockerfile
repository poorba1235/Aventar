# Use the official Node.js v20.15.1 image as the base image
FROM node:20.15.1-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Expose port 3000 to allow incoming traffic
EXPOSE 3000

# Start the React app in development mode
CMD ["npm", "start"]
