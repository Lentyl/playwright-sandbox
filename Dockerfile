FROM mcr.microsoft.com/playwright:v1.48.1-jammy

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install

RUN ls -al

RUN playwright --verion

CMD [ "npx", "playwright", "test" ]

