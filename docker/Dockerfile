FROM node:20.14-alpine

# Enable corepack and install Yarn
RUN corepack enable
RUN corepack install -g yarn@4.4.1

# Set up the working directory
RUN mkdir -p /home/app
WORKDIR /home/app

# Change ownership to the node user
RUN chown -R node:node /home/app
USER node

# Copy necessary files and directories
COPY --chown=node:node .yarn .yarn
COPY --chown=node:node .yarnrc.yml .yarnrc.yml
COPY --chown=node:node yarn.lock .
COPY --chown=node:node package.json .
COPY --chown=node:node node_modules/.prisma/client node_modules/.prisma/client
COPY --chown=node:node dist/apps/micro.news/main.js dist/apps/micro.news/main.js

# Set environment variables
ENV NODE_ENV=production

# Install dependencies
RUN yarn install --immutable

# Expose the application's port
EXPOSE 3000

# Start the application
CMD ["node", "dist/apps/micro.news/main.js"]
