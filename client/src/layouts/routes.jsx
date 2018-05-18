import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';
import React from 'react';

import App from '../App';
import Home from './Home/Home';
import CustomerList, { CustomerListQuery } from './Customers/CustomerList';
import Customer from './Customers/Customer/Customer';
import CustomerQuery from './Customers/Customer/CustomerQuery';
import Products from './Products/Products';

export default makeRouteConfig(
  <Route path="/" Component={App}>
    <Route getComponent={() => Home} />
    <Route
      path="products"
      Component={Products}
    />
    <Route
      path="customers"
      Component={CustomerList}
      query={CustomerListQuery}
      prepareVariables={params => ({
        ...params,
        count: 5,
        cursor: null
      })}
    >
      {/* customerId will be passed as a variable to the customerQuery */}
      <Route path=":customerId" Component={Customer} query={CustomerQuery} />
    </Route>
  </Route>
);
