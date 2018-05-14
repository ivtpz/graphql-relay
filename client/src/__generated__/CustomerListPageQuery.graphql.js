/**
 * @flow
 * @relayHash 2139e5833573ff4f925f684f17eea26f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CustomerList_customers$ref = any;
export type CustomerListPageQueryVariables = {||};
export type CustomerListPageQueryResponse = {|
  +customers: ?{|
    +$fragmentRefs: CustomerList_customers$ref
  |}
|};
*/


/*
query CustomerListPageQuery {
  customers(first: 10) {
    ...CustomerList_customers
  }
}

fragment CustomerList_customers on CustomerConnection {
  edges {
    node {
      ...Customer_customer
      id
    }
  }
}

fragment Customer_customer on Customer {
  name {
    first
    last
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10,
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "CustomerListPageQuery",
  "id": null,
  "text": "query CustomerListPageQuery {\n  customers(first: 10) {\n    ...CustomerList_customers\n  }\n}\n\nfragment CustomerList_customers on CustomerConnection {\n  edges {\n    node {\n      ...Customer_customer\n      id\n    }\n  }\n}\n\nfragment Customer_customer on Customer {\n  name {\n    first\n    last\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CustomerListPageQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "customers",
        "storageKey": "customers(first:10)",
        "args": v0,
        "concreteType": "CustomerConnection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CustomerList_customers",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CustomerListPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "customers",
        "storageKey": "customers(first:10)",
        "args": v0,
        "concreteType": "CustomerConnection",
        "plural": false,
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
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "name",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Name",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "first",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "last",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7b527825c8eb955b38dcce270822ecbf';
module.exports = node;
