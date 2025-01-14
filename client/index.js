import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App';
import LoginForm from './components/LoginForm';


const networkInterface = createNetworkInterface({
  //when making network interface, it does not default to /graphql,
  //hence need to redefine the uri
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
    //this line above tells it to send along cookies to the server
    //when making a request
  }
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route path='login' component={LoginForm} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
