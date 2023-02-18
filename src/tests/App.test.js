import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../components/App.js'

test('renders learn react link', () => {
  const { asFragment } = render(
    <Router>
      <App />
    </Router>
  );

  expect(asFragment()).toMatchSnapshot();
});
