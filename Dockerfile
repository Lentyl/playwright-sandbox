FROM mcr.microsoft.com/playwright:v1.48.1-jammy
WORKDIR /app
COPY . /app
RUN npm install
CMD ["npx", "playwright", "test"]

