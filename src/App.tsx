import './App.css'

import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import * as React from 'react'
import { ApolloProvider, Query } from 'react-apollo'

import logo from './logo.svg'

const client = new ApolloClient({
  uri: "graphql"
});

client
  .query({
    query: gql`
      {
        allTasks {
          nodes {
            workflowSerial
          }
        }
      }
    `
  })
  // tslint:disable-next-line:no-console
  .then(result => console.log(result));

const WorkflowSerials = () => (
  <Query
    query={gql`
      {
        allTasks {
          nodes {
            workflowSerial
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) {
        return <p>Loading...</p>;
      }
      if (error) {
        return <p>Error :(</p>;
      }

      let key = 0;
      // tslint:disable-next-line:no-console
      console.log("data", data);
      return data.allTasks.nodes.map(
        ({ workflowSerial }: { workflowSerial: number }) => (
          <div key={key++}>
            <p>{`${workflowSerial}`}</p>
          </div>
        )
      );
    }}
  </Query>
);

class App extends React.Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">DeepSegment PoC</h1>
          </header>
          <p className="App-intro">Workflow serials:</p>
          <WorkflowSerials />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
