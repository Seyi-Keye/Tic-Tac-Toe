import React from 'React';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { TicTacToe } from '../component/TicTacToe.jsx';

describe('My first test', () => {
  it('do nothing', () => {
    expect(true).to.equal(true);
  });
});

describe('Tic Tac Toe <TicTacToe />', () => {
  let wrapper;

  const initialState = {
    playerOneSymbol: 'X',
    playerTwoSymbol: 'O',
    currentTurn: 'X',
    board: Array(9).fill('')
  };

  beforeEach(() => {
    wrapper = shallow(<TicTacToe />);
  });

  it('has initial state', () => {
    expect(wrapper.state())
      .to
      .deep
      .equal(initialState);
  });

});