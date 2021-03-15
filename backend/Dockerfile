FROM node:14-alpine3.10

WORKDIR /app

COPY package*.json ./
RUN npm install --production
COPY . .

EXPOSE 2000
CMD ["npm", "start"]