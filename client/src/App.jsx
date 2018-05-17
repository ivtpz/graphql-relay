// @flow
import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import NavigationMenu from './components/NavigationMenu/Menu/Menu';

const paths = [
  { to: '/', name: 'Home' },
  { to: '/products', name: 'Products' },
  { to: '/customers', name: 'Customers' },
];

const Page = styled.div`
  text-align: center;
`;

/* eslint-disable */
const AppProps = {
  children: Element
};
/* eslint-enable */

const App = ({ children }: AppProps) => (
  <ThemeProvider theme={theme}>
  <>
    <NavigationMenu paths={paths} />
    <Page>
      <h1>Bravissimo C3 App</h1>
      {children}
    </Page>
    </>
  </ThemeProvider>
);

export default App;
