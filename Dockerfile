FROM node:18 as builder

WORKDIR /build

COPY package*.json yarn.lock ./
RUN yarn install

COPY src/ src/
COPY tsconfig.json tsconfig.json

RUN yarn build

FROM node:18 as runner

WORKDIR /app

COPY --from=builder build/package*.json .
COPY --from=builder build/node_modules node_modules/
COPY --from=builder build/dist dist/

CMD [ "yarn","start"]
