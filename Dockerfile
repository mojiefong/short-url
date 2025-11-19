FROM node:22-alpine
WORKDIR /app
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
COPY . .

# CMD [ "node", "--experimental-transform-types", "--no-warnings", "--env-file=.env", "main.ts" ]
CMD [ "node", "--experimental-transform-types", "--no-warnings", "src/main.ts" ]
