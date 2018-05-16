// @flow
import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import NavigationMenu from './components/NavigationMenu/Menu/Menu';
import Home from './layouts/Home/Home';
import Customers from './layouts/Customers/Customers';
import Products from './layouts/Products/Products';

const paths = [
  { to: '/', name: 'Home' },
  { to: '/products', name: 'Products' },
  { to: '/customers', name: 'Customers' },
];

const Page = styled.div`
  text-align: center;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Page>
      <BrowserRouter>
        <>
          <NavigationMenu paths={paths} />
          <h1>Bravissimo C3 App</h1>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/customers" component={Customers} />
        </>
      </BrowserRouter>
    </Page>
  </ThemeProvider>
);

export default App;
