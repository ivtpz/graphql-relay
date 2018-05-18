// @flow
import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import styled from 'styled-components';

import { type Customer_Customer as CustomerType } from './__generated__/Customer_Customer.graphql';

type CustomerRouteProps = {
  Customer: CustomerType
};

const CustomerDetailsWrapper = styled.div`
  padding-top: 10px;
`;

const CustomerName = styled.div`
  font-weight: bolder;
  padding-bottom: 5px;
`;


const Customer = ({ Customer: { name, orders } }: CustomerRouteProps) => (
  <CustomerDetailsWrapper>
    {name && (
      <CustomerName>
        {name.first} {name.last}
      </CustomerName>
    )}
    {orders && orders.edges &&
      // NOTE: unlike Typescript, Flow does not support type preticate funcitons - https://github.com/facebook/flow/issues/1414
      // so we can't have a generic filter function for arrays to remove undefineds / nulls,
      // and have to check for each property like this
      orders.edges.map(result => result && result.node && (
        <div key={result.node.guid}>
          {result.node.date}: {result.node.total}
        </div>
      ))}
  </CustomerDetailsWrapper>
);

export default createFragmentContainer(
  Customer,
  graphql`
    fragment Customer_Customer on Customer {
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
