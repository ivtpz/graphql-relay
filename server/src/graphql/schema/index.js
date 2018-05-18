import { connectionFromArray, connectionArgs } from 'graphql-relay';
import { CustomerType, CustomerConnection } from './customer';
import { getCustomer, getCustomers } from '../resolvers';
import { GraphQLSchema, GraphQLObjectType, GraphQLID } from 'graphql';
import { zNodeField } from './zNode';

const Customer = {
  type: CustomerType,
  args: {
    id: { type: GraphQLID }
  },
  resolve: (_, { id }) => getCustomer(id)
};

const Customers = {
  type: CustomerConnection,
  args: connectionArgs,
  resolve: (_, args) => connectionFromArray(getCustomers(), args)
};

const ViewerType = new GraphQLObjectType({
  name: 'Viewer',
  fields: () => ({
    customer: Customer,
    customers: Customers
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    Customer,
    Customers,
    viewer: {
      type: ViewerType,
      resolve: viewer => ({ viewer })
    },
    node: zNodeField
  })
});

// const RootMutation = `
//   input ChangeNameInput {
//     clientMutationId: String!
//     guid: String!
//   }

//   type ChangeNamePayload {
//     clientMutationId: String!
//     customer: Customer
//   }

//   type Mutation {
//     updateFirstName(input: ChangeNameInput!): ChangeNamePayload
//   }
// `;

export default new GraphQLSchema({
  query: RootQuery
});
