import { globalIdField, connectionDefinitions } from 'graphql-relay';
import { GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';
import { zNodeInterface } from './zNode';

const OrderType = new GraphQLObjectType({
  name: 'Order',
  description: 'A single order with customer data',
  fields: () => ({
    id: globalIdField('Order', order => order.guid),
    index: { type: new GraphQLNonNull(GraphQLInt) },
    guid: { type: new GraphQLNonNull(GraphQLID) },
    total: { type: new GraphQLNonNull(GraphQLString) },
    date: { type: new GraphQLNonNull(GraphQLString) }
  }),
  interfaces: [zNodeInterface],
  isTypeOf: obj => !!obj.total
});

const { connectionType: OrderConnection } = connectionDefinitions({ nodeType: OrderType });

export default {
  OrderType,
  OrderConnection
};
