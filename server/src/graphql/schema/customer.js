import gql from '../syntaxHelpers';
import Order from './order';

const Customer = gql`
  type Name {
    first: String
    last: String
  }

  type Customer implements Node {
    id: ID!
    index: Int
    guid: String!
    isActive: Boolean
    age: Int
    name: Name
    orders: [Order]
  }

  type CustomerEdge {
    cursor: String!
    node: Customer
  }

  type CustomerConnection {
    edges: [CustomerEdge]
    pageInfo: PageInfo!
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }
`;

export default () => [Customer, Order];
