// @flow
import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

// Redo props for found
type CustomerListProps = {
  customers: any
};

const CustomerList = ({ customers }: CustomerListProps) =>
  customers.edges.map(({ node }) => (
    <div>
      <p>
        {node.name.first} {node.name.last}
      </p>
    </div>
  ));

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
          ...Customer_customer
        }
      }
    }
  `
);
