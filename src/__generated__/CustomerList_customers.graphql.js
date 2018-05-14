/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Customer_customer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CustomerList_customers$ref: FragmentReference;
export type CustomerList_customers = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +$fragmentRefs: Customer_customer$ref
    |}
  |}>,
  +$refType: CustomerList_customers$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "CustomerList_customers",
  "type": "CustomerConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "CustomerEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Customer",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "Customer_customer",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '645525fe84cd25df97d60e5baf2a1e7d';
module.exports = node;
