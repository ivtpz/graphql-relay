import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

class Customer extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.customer.name.first} {this.props.customer.name.last}
        </div>
      </div>
    );
  }
}

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
