/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'found';
import { graphql, createPaginationContainer } from 'react-relay';

// Redo props for found
type CustomerListProps = {
  viewer: any,
  children: React.Element<any>,
  relay: any
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const CustomerList = ({ viewer, children, relay }: CustomerListProps) => (
  <Container>
    <div>
      {viewer && viewer.customers && viewer.customers.edges.map(({ node }) => (
        <div key={node.guid}>
          <Link to={`/customers/${node.guid}`}>
            {node.name.first} {node.name.last}
          </Link>
        </div>
      ))}
      <div onClick={() => relay.loadMore(3)}>More...</div>
    </div>
    {children}
  </Container>
);

export const CustomerListQuery = graphql`
  query CustomerListViewerQuery($count: Int!, $cursor: String) {
    viewer {
      ...CustomerList_viewer
    }
  }
`;

export default createPaginationContainer(
  CustomerList,
  graphql`
    fragment CustomerList_viewer on Viewer {
      customers(first: $count, after: $cursor) @connection(key: "CustomerList_customers") {
        edges {
          node {
            guid
            name {
              first
              last
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `,
  {
    direction: 'forward',
    query: graphql`
      query CustomerListForwardQuery($count: Int!, $cursor: String) {
        viewer {
        ...CustomerList_viewer
        }
      }
    `,
    getFragmentVariables(previousVariables, totalCount) {
      return {
        ...previousVariables,
        count: totalCount
      };
    },
    getVariables(props, paginationInfo /* , fragmentVariables */) {
      return {
        count: paginationInfo.count,
        cursor: paginationInfo.cursor,
      };
    }
  }
);
