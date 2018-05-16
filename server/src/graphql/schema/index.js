import { connectionFromArray, connectionArgs } from 'graphql-relay';
import { CustomerType, CustomerConnection } from './customer';
import { getCustomer, getCustomers } from '../resolvers';
import { GraphQLSchema, GraphQLObjectType, GraphQLID } from 'graphql';
import { zNodeField } from './zNode';

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    customer: {
      type: CustomerType,
      args: {
        id: { type: GraphQLID }
      },
      resolve: (_, { id }) => getCustomer(id)
    },
    customers: {
      type: CustomerConnection,
      args: connectionArgs,
      resolve: (_, args) => connectionFromArray(getCustomers(), args)
    },
    node: zNodeField
  })
});

// const RootMutation = gql`
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
