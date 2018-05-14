import Customer from './customer';
import gql from '../syntaxHelpers';

const Order = gql`
  type Order implements Node {
    id: ID!
    index: Int!
    guid: String!
    customer: Customer!
    total: String!
    date: String!
  }
`;

export default () => [Order, Customer];
