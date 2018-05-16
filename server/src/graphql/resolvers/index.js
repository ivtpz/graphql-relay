import * as customerResolvers from './customers';
import * as mockCustomerResolvers from '../mocks/customers';
import * as mockOrderResolvers from '../mocks/order';
import * as orderResolvers from './order';

const resolvers = {
  ...customerResolvers,
  ...orderResolvers
};

const exportedResolvers = process.env.MOCK_GRAPHQL_RESOLVERS
  ? {
    ...resolvers,
    ...mockCustomerResolvers,
    ...mockOrderResolvers
  }
  : resolvers;

export default exportedResolvers;
