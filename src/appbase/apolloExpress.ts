/* graphql-server-boilerplate
Copyright (c) 2019-present NAVER Corp.
MIT license */
import express from 'express';
import errorhandler from 'errorhandler';
import http from 'http';
import cookieParser from 'cookie-parser';
import { ApolloServer, ApolloServerExpressConfig, ServerRegistration } from 'apollo-server-express';
import { createTerminus } from '@godaddy/terminus';
import { disconnectMongoDB } from './mongoose';
import { allSchema } from '../graphql/schema';
import { MongooseDataloaderFactory } from 'graphql-dataloader-mongoose';
import { logger } from './logger';

function runServer() {
  const app = express();
  const port = 10000;

  if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler());
  }

  // compression : recommanded to use nginx gzip compression directive
  // response header : recommanded to use nginx add header directive

  app.use(cookieParser());

  applyApollo(app);

  // create server
  const server = http.createServer(app);

  // add terminus cleanup config
  const cleanupOptions = {
    onSignal,
    onShutdown,
    timeout: 10000,
    signals: ['SIGINT', 'SIGTERM'],
  };

  createTerminus(server, cleanupOptions);

  // start server
  server.listen(port, () => {
    logger.info(`express server is listening port ${port}`);
  });
}

function applyApollo(app: any) {
  // applly apollo confing to express app
  const apolloConfig: ApolloServerExpressConfig = {
    schema: allSchema,
    context: async ctx => {
      const dataloaderFactory = new MongooseDataloaderFactory();
      return { ...ctx, dataloaderFactory };
    },
    formatError: error => {
      logger.error(`[Graphql ERROR] ${error}`);
      return error;
    },
  };

  const apolloRegistration: ServerRegistration = {
    app,
    path: '/graphql',
    cors: true,
    bodyParserConfig: true,
  };

  const apollo = new ApolloServer(apolloConfig);
  apollo.applyMiddleware(apolloRegistration);
}

async function onSignal() {
  logger.info('server is starting cleanup');
  return Promise.all([disconnectMongoDB()]);
}

async function onShutdown() {
  logger.info('cleanup finished, server is shutting down');
}

export { runServer };
