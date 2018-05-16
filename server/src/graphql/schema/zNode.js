/* eslint-disable global-require */

/*

NOTE: Separating this interface definition into its own file creates
circular dependencies between node, and any type that implements the node
interface (ex. Customer needs the zNodeInterface definition, and node needs
the CustomerType definition). To make this work, this file should always
be imported after any file that depends on it, so in all other files, customer
needs to be imported before node. As a reminder, this file is named z.node.

SUMMARY OF ABOVE NOTE: Import this file last.

ESLINT NOTE: The eslint rules attempt to inforce this, but the sort-order rule also enforces
rules about the type of import, that can override the alphabetical rule
see https://eslint.org/docs/rules/sort-imports, memberSyntaxSortOrder,
so there is currently no way to enforce this using eslint rules.

If / when this MR is merged into import/order - https://github.com/benmosher/eslint-plugin-import/pull/629
we may be able to configure the rules correctly to inforce the zNode import always coming last

*/

import { fromGlobalId, nodeDefinitions } from 'graphql-relay';
import { getCustomer, getOrder } from '../resolvers';

const { nodeInterface: zNodeInterface, nodeField: zNodeField } = nodeDefinitions(globalId => {
  const { type, id } = fromGlobalId(globalId);
  if (type === 'Customer') {
    return getCustomer(id);
  }
  if (type === 'Order') {
    return getOrder(id);
  }
  return null;
  // Pull in types at runtime to avoid issue with circular dependency
}, obj => (obj.name ? require('./customer').CustomerType : require('./order').OrderType));

export default {
  zNodeInterface,
  zNodeField
};
