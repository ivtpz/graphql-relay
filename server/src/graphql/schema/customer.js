import { globalIdField, connectionFromArray, connectionArgs, connectionDefinitions } from 'graphql-relay';
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLBoolean, GraphQLID } from 'graphql';
import { getOrdersByCustomer } from '../resolvers';
import { OrderConnection } from './order';
import { zNodeInterface } from './zNode';

const NameType = new GraphQLObjectType({
  name: 'Name',
  fields: () => ({
    first: { type: GraphQLString },
    last: { type: GraphQLString }
  })
});

const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  description: 'A Bravisismo customer',
  fields: () => ({
    id: globalIdField('Customer', customer => customer.guid),
    index: { type: GraphQLInt },
    guid: { type: new GraphQLNonNull(GraphQLID) },
    isActive: { type: GraphQLBoolean },
    age: { type: GraphQLInt },
    name: { type: NameType },
    orders: {
      type: OrderConnection,
      description: "A customer's orders",
      args: connectionArgs,
      resolve: (customer, args) => connectionFromArray(getOrdersByCustomer(customer.guid), args)
    }
  }),
  interfaces: [zNodeInterface],
  isTypeOf: obj => !!obj.name
});

const { connectionType: CustomerConnection } = connectionDefinitions({ nodeType: CustomerType });

export default {
  // Exporting as function to avoid issue with circular dependency between node type,
  // and types that implement node
  CustomerType,
  CustomerConnection
};
