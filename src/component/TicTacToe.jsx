import React, { Component } from 'react';

class TicTacToe extends Component {

  constructor() {
    super();
    this.state = {
      playerOneSymbol: 'X',
      playerTwoSymbol: 'O',
      currentTurn: 'X',
      board: Array(9).fill(''),
      };
    this.boardView = [];
    this.checkWin = this.checkWin.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
  }

  handleDisplay(index, value) {
    if(this.state.board[index]=== ' ') {
      this.setState = {
        board: this.state.board,
        currentTurn: this.state.currentTurn===this.state.playerOneSymbol ? this.state.playerTwoSymbol : this.state.playerOneSymbol
      }
      console.log('currentTurn', this.state)
    }

    const boardSquareState = {};
    boardSquareState[index] = value || '0 value';
    console.log('Board square state: ', boardSquareState,  ' board :', this.setState.board)
    this.boardView = this.boardView.concat(boardSquareState);
    // console.log(this.boardView, 'boardViews');
    this.checkWin();
  }

  handleClick() {  }

  drawTreeForMoves() {}
  randomMove() {}
  decideResult() {}
  checkWin() {
    if(this.board === []) {
      alert('Hw');
    }
  }

  updateBoard(){}

  render() {
    return (
      <div className="board">
        {this.state.board.map((square, index) =>
            <div className="square" key={index} onClick={() => console.log('index: ', index, ' boardView:', this.boardView, this.state.currentTurn)}> {index}{this.handleDisplay(index)} </div>
        )}
      </div>
    );
  }
}

export default TicTacToe;
