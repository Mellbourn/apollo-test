import './App.css'

import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import * as React from 'react'
import { ApolloProvider } from 'react-apollo'

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

class App extends React.Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
