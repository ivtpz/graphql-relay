/* global document */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HashProtocol from 'farce/lib/HashProtocol';
import queryMiddleware from 'farce/lib/queryMiddleware';
import createFarceRouter from 'found/lib/createFarceRouter';
import createRender from 'found/lib/createRender';
import { Resolver } from 'found-relay';
import { injectGlobal } from 'styled-components';
import environment from './Environment';
import routes from './layouts/routes';
import { registerServiceWorker } from './registerServiceWorker';

/* eslint-disable no-unused-expressions */
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;
/* eslint-enable no-unused-expressions */

const Router = createFarceRouter({
  historyProtocol: new HashProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: routes,

  render: createRender({})
});

ReactDOM.render(<Router resolver={new Resolver(environment)} />, document.getElementById('root'));
registerServiceWorker();
