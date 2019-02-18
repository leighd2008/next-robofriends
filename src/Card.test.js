import React from 'react';
import { shallow } from 'enzyme';
import Card from '../components/Card';

it('renders without crashing', () => {
  expect(shallow(<Card/>)).toMatchSnapshot();
});