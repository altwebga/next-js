FROM node:lts as dependencies
WORKDIR /portfolio
COPY ./package.json  .
RUN npm install

FROM node:lts as builder
WORKDIR /portfolio
# COPY . .
COPY --from=dependencies /portfolio/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /portfolio
ENV NODE_ENV production

COPY --from=builder /portfolio/public ./public
COPY --from=builder /portfolio/package.json ./package.json
COPY --from=builder /portfolio/.next ./.next
COPY --from=builder /portfolio/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]