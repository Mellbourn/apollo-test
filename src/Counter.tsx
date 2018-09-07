import { ApolloClient } from 'apollo-boost'
// import gql from 'graphql-tag'
import * as React from 'react'
import { ApolloConsumer } from 'react-apollo'

// const GET_COUNTER = gql`
//   {
//     counter @client
//   }
// `;
const Counter = () => (
  <ApolloConsumer>
    {client => <button onClick={increase(client)}>Increase!</button>}
  </ApolloConsumer>
);

export default Counter;

const increase = (
  client: ApolloClient<any>
): ((event: React.MouseEvent<HTMLButtonElement>) => void) => {
  return () => client.writeData({ data: { counter: 1 } });
};
