import React from 'react';
import { BrowserRouter as Router } from 'react-dom-browser';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
