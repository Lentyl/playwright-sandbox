FROM mcr.microsoft.com/playwright:v1.48.1-jammy

WORKDIR /app

COPY package.json /app

RUN npm install

CMD [ "npm", "test" ]

