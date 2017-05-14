// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

import React from 'React';
import { shallow } from 'enzyme';
import expect from 'chai';

describe('My first test', () => {
  it('do nothing', () => {
    expect(true).to.equal(true);
  });
});