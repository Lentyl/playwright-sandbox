FROM playwright

WORKDIR /app

COPY . /app

RUN npm install

CMD [ "npm", "test" ] 