import React from 'react';
import Header from '../header';
import Calculator from '../calculator';
import App from '../../App';
import Quote from '../Quote';
import { Display } from '../calculatorComponent';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Home from '../home';

afterEach(cleanup);

// Testing Calculator Component
it('renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Calculator display should equal to 0', () => {
  const { getByText } = render(<Calculator />);
  expect(getByText(/0/i)).toMatchSnapshot();
});

test('Testing Events: Calculator display should equal to 85', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText(/8/i, { selector: 'button' }));
  fireEvent.click(getByText(/5/i, { selector: 'button' }));
  const display = screen.getByText(/85/i, { selector: '.display' });
  expect(parseInt(display.textContent)).toBe(85);
});
