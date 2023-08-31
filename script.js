import Board from "./classes/board.js";
import Player from "./classes/player.js";

const board = new Board([``, ``, ``, ``, ``, ``, ``, ``, ``])
board._printFormattedBoard()
const p1 = new Player()
const p2 = new Player()
p1.setToken(`X`)
p2.setToken(`O`)
p1.setType(`Player`)
p2.setType(`AI`)

const domManager = (() => {

})();

const render = (() => {

})();

/* 
    All the Actual code is in the Board and Player classes
*/




