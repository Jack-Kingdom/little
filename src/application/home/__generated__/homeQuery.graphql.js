/**
 * @flow
 * @relayHash 549247ebade14aab418bc5e39e36304c
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type homeQueryResponse = {|
  +articles: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query homeQuery {
  articles {
    ...articleList_viewer
    id
  }
}

fragment articleList_viewer on Article {
  id
  title
  slug
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "homeQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Article",
        "name": "articles",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "articleList_viewer",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQueryType"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "homeQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "homeQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Article",
        "name": "articles",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "Article",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "title",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "slug",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query homeQuery {\n  articles {\n    ...articleList_viewer\n    id\n  }\n}\n\nfragment articleList_viewer on Article {\n  id\n  title\n  slug\n}\n"
};

module.exports = batch;
