import { graphql } from 'react-relay';

const CustomerQuery = graphql`
  query CustomerQuery($customerId: ID!) {
    Customer(id: $customerId) {
      id
      ...Customer_Customer
    }
  }
`;

export default CustomerQuery;

