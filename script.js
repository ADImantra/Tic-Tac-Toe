import Board from "./Classes/board.js";

const board = new Board();
board._printFormattedBoard();

console.log(board._emptyBoard());
console.log(board._fullBoard());
console.log(board._getTerminalState());

