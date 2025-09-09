FROM node:18-alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json* ./
RUN npm ci --only=production
COPY . .
RUN mkdir -p /usr/src/app/uploads && chown -R node:node /usr/src/app/uploads
EXPOSE 5000
USER node
CMD ["node", "src/index.js"]
