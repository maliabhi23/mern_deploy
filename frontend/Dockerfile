# Use Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build frontend
RUN npm run build

# Install and use a lightweight web server for serving the frontend
RUN npm install -g serve

# Expose frontend port
EXPOSE 3000

# Start frontend
CMD ["serve", "-s", "build", "-l", "3000"]
