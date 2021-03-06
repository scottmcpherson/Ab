import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { meteorClientConfig } from 'meteor/apollo';
import { Meteor } from 'meteor/meteor';

import Layout from '../../ui/layouts/AppLayout';
import Home from '../../ui/pages/HomePage';
import Tasks from '../../ui/pages/TasksPage';


const client = new ApolloClient(meteorClientConfig())

Meteor.startup(() => {
  render(
    <ApolloProvider client={client}>
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="tasks" component={Tasks}/>
        </Route>
      </Router>
    </ApolloProvider>,
    document.getElementById('app')
  )
});