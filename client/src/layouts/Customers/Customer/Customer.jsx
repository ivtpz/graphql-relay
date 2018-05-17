// @flow
import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import styled from 'styled-components';

type CustomerRouteProps = {
  customer: any
};

const CustomerDetailsWrapper = styled.div`
  padding-top: 10px;
`;

const CustomerName = styled.div`
  font-weight: bolder;
  padding-bottom: 5px;
`;

const Customer = ({ customer: { name, orders } }: CustomerRouteProps) => (
  <CustomerDetailsWrapper>
    {name && (
      <CustomerName>
        {name.first} {name.last}
      </CustomerName>
    )}
    {orders &&
      orders.edges.map(({ node }) => (
        <div key={node.guid}>
          {node.date}: {node.total}
        </div>
      ))}
  </CustomerDetailsWrapper>
);

export const CustomerQuery = graphql`
  query CustomerQuery($customerId: ID!) {
    customer(id: $customerId) {
      id
      ...Customer_customer
    }
  }
`;

export default createFragmentContainer(
  Customer,
  graphql`
    fragment Customer_customer on Customer {
      name {
        first
        last
      }
      orders {
        edges {
          node {
            guid
            total
            date
          }
        }
      }
    }
  `
);
