/* graphql-server-boilerplate
Copyright (c) 2019-present NAVER Corp.
MIT license */
import { connectMongoDB } from './appbase/mongoose';
import { runServer } from './appbase/apolloExpress';

connectMongoDB();
runServer();
