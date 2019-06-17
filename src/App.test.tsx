import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from 'react-apollo-hooks';
import { mockApolloClient } from './test-helper';

it('renders without crashing', () => {
  const client = mockApolloClient();
  const div = document.createElement('div');
  
  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
