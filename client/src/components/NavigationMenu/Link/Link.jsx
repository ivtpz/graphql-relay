// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Link as RouterLink, withRouter } from 'found';
import { type Path } from '../Menu/Menu';
import { type Theme } from '../../../theme';

type LinkProps = {
  path: Path,
  match: {
    location: {
      pathname: string
    }
  }
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
const Link = ({ path, match: { location: { pathname } } }: LinkProps) => (
  <LinkWrapper active={path.to === pathname}>
    <RouterLink to={path.to}>{path.name}</RouterLink>
  </LinkWrapper>
);

export default withRouter(Link);
