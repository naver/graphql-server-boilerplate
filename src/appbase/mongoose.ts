/* graphql-server-boilerplate
Copyright (c) 2019-present NAVER Corp.
MIT license */
import mongoose from 'mongoose';
import { logger } from './logger';
import { MongoMemoryServer } from 'mongodb-memory-server';

// it is mongo memory server for boilerplate sample
// remove it and replace to real mongoDB in production environment
let mongoServer: MongoMemoryServer;
function connectMongoDB(): void {
  mongoServer = new MongoMemoryServer({ instance: { port: 27017, dbName: 'user' } });

  // replace real mongoDB connection in production environment
  mongoServer.getConnectionString().then(mongoUri => {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    };

    mongoose.connect(mongoUri, options);

    mongoose.connection.on('error', e => {
      logger.error(e);
    });

    mongoose.connection.once('open', () => {
      logger.info(`MongoDB successfully connected to ${mongoUri}`);
    });
  });
}

async function disconnectMongoDB() {
  mongoose.disconnect();
  mongoServer.stop();
}

export { connectMongoDB, disconnectMongoDB };
