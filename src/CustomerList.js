import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Customer from './Customer';

class CustomerList extends Component {
  render() {
    return <div>{this.props.customers.edges.map(({ node }) => <Customer key={node.__id} customer={node} />)}</div>;
  }
}

export default createFragmentContainer(
  CustomerList,
  graphql`
    fragment CustomerList_customers on CustomerConnection {
      edges {
        node {
          ...Customer_customer
        }
      }
    }
  `
);
