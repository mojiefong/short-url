FROM node:22-alpine
WORKDIR /app
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
COPY . .

CMD [ "node", "--experimental-transform-types", "--no-warnings", "--watch", "src/main.ts" ]
