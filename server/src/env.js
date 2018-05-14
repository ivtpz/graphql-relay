/* eslint-disable global-require */
// Loads env vars for local development
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: `${process.cwd()}/config/env-development` });
}
