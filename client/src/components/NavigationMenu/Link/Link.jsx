// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Link as RouterLink, withRouter, type LocationShape } from 'react-router-dom';
import { type Path } from '../Menu/Menu';
import { type Theme } from '../../../theme';

type LinkProps = {
  path: Path,
  location: LocationShape
};

type LinkWrapperProps = {
  active: boolean
};

const LinkWrapper = styled.div`
  padding: 10px;

  > a {
    text-decoration: none;
    color: ${(props: Theme & LinkWrapperProps) => (props.active ? props.theme.neutral.base : props.theme.white.base)};
  }
`;

// Extend component props with props from withRouter
const Link = ({ path, location: { pathname } }: LinkProps) => (
  <LinkWrapper active={path.to === pathname}>
    <RouterLink to={path.to}>{path.name}</RouterLink>
  </LinkWrapper>
);

export default withRouter(Link);
