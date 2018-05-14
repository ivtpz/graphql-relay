import gql from '../syntaxHelpers';

const Node = gql`
  interface Node {
    id: ID!
  }
`;

export default Node;
