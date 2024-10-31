FROM mcr.microsoft.com/playwright:v1.48.1-jammy

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install

RUN ls -al

RUN npm init playwright@latest

RUN npx playwright --version


CMD [ "npx", "playwright", "test" ]

