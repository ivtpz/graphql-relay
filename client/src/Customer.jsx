import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

const Customer = props => (
  <div>
    {props.customer.name.first} {props.customer.name.last}
  </div>
);

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
