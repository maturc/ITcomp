import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Do all components inside home get rendered?', () => {
  const { getByText } = render(<App />);
  getByText("Home");
  getByText("About Us");
  getByText("What We Do");
  getByText("More projects");
  getByText("User reviews");
  getByText("Created by Matija Turčec");
  getByText("Want to work with us?");
});
