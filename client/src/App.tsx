import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dummy from './components/dummy/Dummy'
import {ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { useLaunchpadsQuery } from './generated/graphql';

const client = new ApolloClient({
  uri: "http://api.spacex.land/graphql",
  cache: new InMemoryCache()
})


function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Dummy></Dummy>
      </ApolloProvider>
    </div>
  );
}

export default App;
