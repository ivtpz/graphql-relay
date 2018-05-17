// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'found';
import { graphql, createFragmentContainer } from 'react-relay';

// Redo props for found
type CustomerListProps = {
  customers: any,
  children: React.Element
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const CustomerList = ({ customers, children }: CustomerListProps) => (
  <Container>
    <div>
      {customers.edges.map(({ node }) => (
        <div key={node.guid}>
          <Link to={`/customers/${node.guid}`}>
            {node.name.first} {node.name.last}
          </Link>
        </div>
      ))}
    </div>
    {children}
  </Container>
);

export const CustomerListQuery = graphql`
  query CustomerListQuery {
    customers(first: 10) {
      ...CustomerList_customers
    }
  }
`;

export default createFragmentContainer(
  CustomerList,
  graphql`
    fragment CustomerList_customers on CustomerConnection {
      edges {
        node {
          guid
          name {
            first
            last
          }
        }
      }
    }
  `
);
