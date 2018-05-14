import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from './Environment';
import CustomerList from './CustomerList';

const CustomerListPageQuery = graphql`
  query CustomerListPageQuery {
    customers(first: 10) {
      ...CustomerList_customers
    }
  }
`;

class CustomerListPage extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={CustomerListPageQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <CustomerList customers={props.customers} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}

export default CustomerListPage;
