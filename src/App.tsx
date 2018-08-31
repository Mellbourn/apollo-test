import './App.css'

import ApolloClient from 'apollo-boost'
import * as React from 'react'
import { ApolloProvider } from 'react-apollo'

import logo from './logo.svg'
import WorkflowSerials from './WorkflowSerials'

const client = new ApolloClient({
  uri: "graphql"
});

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
