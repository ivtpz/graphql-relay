import { makeExecutableSchema } from 'graphql-tools';
import Node from './node';
import Customer from './customer.js';
import resolvers from '../resolvers';
import gql from '../syntaxHelpers.js';

const RootQuery = gql`
  type RootQuery {
    customer(id: ID!): Customer
    customers(first: Int, last: Int, before: String, after: String): CustomerConnection
  }
`;

const Mutations = gql`
  input ChangeNameInput {
    clientMutationId: String!
    guid: String!
  }

  type ChangeNamePayload {
    clientMutationId: String!
    customer: Customer
  }

  type Mutation {
    updateFirstName(input: ChangeNameInput!): ChangeNamePayload
  }
`;

const SchemaDefinition = gql`
  schema {
    query: RootQuery
    mutation: Mutation
  }
`;

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, Mutations, Node, Customer],
  resolvers,
  allowUndefinedInResolve: false,
  resolverValidationOptions: {
    // requireResolversForResolveType: true
  }
});
