import React from 'react';
import renderer from 'react-test-renderer';
import Counter from './Counter';

test('renders Counter component', () => {
  const component = renderer.create(<Counter initialCount={0} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('increments count when Increment button is clicked', () => {
  const component = renderer.create(<Counter initialCount={0} />);
  let tree = component.toJSON();

 
  tree.children[1].props.onClick();

  
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('decrements count when Decrement button is clicked', () => {
  const component = renderer.create(<Counter initialCount={0} />);
  let tree = component.toJSON();

  tree.children[2].props.onClick();

  
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});