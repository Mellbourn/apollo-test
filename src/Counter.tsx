import { ApolloClient } from 'apollo-boost'
import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'

const GET_COUNTER = gql`
  {
    counter @client
  }
`;

const Counter = () => (
  <Query query={GET_COUNTER}>
    {({ data, client }) => {
      // tslint:disable-next-line:no-console
      console.log("data", data);
      return (
        <div>
          <button onClick={increase(client)}>Increase!</button>
          <span>{data.counter}</span>
        </div>
      );
    }}
  </Query>
);

export default Counter;

const increase = (
  client: ApolloClient<any>
): ((event: React.MouseEvent<HTMLButtonElement>) => void) => {
  return () => client.writeData({ data: { counter: 1 } });
};
