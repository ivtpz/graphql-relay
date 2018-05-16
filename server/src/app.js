// Dotenv is only used in development
import './env';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import config from 'config';
import debugModule from 'debug';
import express from 'express';
import morgan from 'morgan-debug';
import path from 'path';
import schema from './graphql/schema';

const { NODE_ENV } = process.env;
const isDevelopment = NODE_ENV === 'development';

const app = express();
const debug = debugModule('server:http');
const port = config.get('serverPort');
const logFormat = isDevelopment ? 'dev' : 'combined';

app.use(morgan(debug.namespace, logFormat));
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.use('/*', express.static(path.join(__dirname, '../../client/build')));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
