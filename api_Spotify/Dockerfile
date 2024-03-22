# Use the official Node.js 20 image as a base
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Install nodemon globally
RUN npm install -g nodemon

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 4001

# Command to run your application
CMD ["nodemon", "."]