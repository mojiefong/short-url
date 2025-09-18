FROM node:22-alpine
WORKDIR /app
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
COPY . .
RUN corepack enable

CMD [ "node", "--experimental-transform-types", "--no-warnings", "--env-file=.env", "src/main.ts" ]
