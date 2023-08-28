import Board from "./classes/board.js";
import Player from "./classes/player.js";

const board = new Board([``, ``, ``, ``, ``, ``, ``, ``, ``])
board._printFormattedBoard()
const p1 = new Player()
const p2 = new Player()
p1.setToken(`X`)
p2.setToken(`O`)
p1.setType(`AI`)
p2.setType(`AI`)

while (board._getTerminalState().terminal === false) {
    console.log(parseInt(p1.getBestMove(board)))
    board._placeToken(p1.token, parseInt(p1.getBestMove(board)))
    console.log(parseInt(p2.getBestMove(board)))
    board._placeToken(p2.token, parseInt(p2.getBestMove(board)))
}

console.log(board._printFormattedBoard())




