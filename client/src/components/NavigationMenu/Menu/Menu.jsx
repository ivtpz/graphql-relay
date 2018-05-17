// @flow
import * as React from 'react';
import styled from 'styled-components';
import Link from '../Link/Link';

export type Path = {
  to: string,
  name: string
};

type Props = {
  paths: Path[]
}

// Basic example of styling with styled components
const MenuWrapper = styled.div`
  background-color: ${props => props.theme.cranberry.base};
  display: flex;
`;

const Menu = ({ paths }: Props) =>
  <MenuWrapper>{paths.map(path => <Link path={path} key={path.name} />)}</MenuWrapper>;

export default Menu;
