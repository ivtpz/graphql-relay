import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';
import React from 'react';

import Home from './Home/Home';
import CustomerList, { CustomerListQuery } from './Customers/CustomerList';
import Customer, { CustomerQuery } from './Customers/Customer/Customer';
import Products from './Products/Products';

export default makeRouteConfig(
  <>
    <Route path="/" Component={Home} />
    <Route path="/products" Component={Products} />
    <Route path="/customers" Component={CustomerList} query={CustomerListQuery}>
      <Route path=":customerId" Component={Customer} query={CustomerQuery} />
    </Route>
  </>
);
