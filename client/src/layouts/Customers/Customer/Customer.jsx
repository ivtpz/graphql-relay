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
  <>
    <CustomerDetailsWrapper>
      {name && (
        <CustomerName>
          {name.first} {name.last}
        </CustomerName>
      )}
      {orders &&
        orders.map(order => (
          <div key={order.guid}>
            {order.date}: {order.total}
          </div>
        ))}
    </CustomerDetailsWrapper>
  </>
);

export const CustomerQuery = graphql`
  query CustomerQuery($customerId: ID!) {
    customer(id: $customerId) {
      id
      name {
        first
        last
      }
      orders {
        total
        date
      }
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
    }
  `
);
