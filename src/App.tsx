import './App.css'

import ApolloClient from 'apollo-boost'
import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { Route, Switch } from 'react-router-dom'

import Counter from './Counter'
import Empty from './Empty'
import Header from './Header'
import logo from './logo.svg'
import Workflows from './Workflows'

const client = new ApolloClient({
  clientState: {
    defaults: { counter: 0 },
    resolvers: null
  },
  uri: "graphql"
});

const resetStore = () => client.resetStore();

class App extends React.Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">DeepSegment PoC</h1>
          </header>
          <Header />
          <button onClick={resetStore}>empty cache</button>
          <Counter />
          <Switch>
            <Route exact={true} path="/" component={Empty} />
            <Route exact={true} path="/workflows" component={Workflows} />
          </Switch>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
