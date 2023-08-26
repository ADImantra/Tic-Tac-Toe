import Board from "./Classes/board.js";
import Player from "./Classes/player.js";

const _displayController = (() => {
    const board = new Board([``, ``, ``, ``, ``, ``, ``, ``, ``, ]);

    board._printFormattedBoard();
})();

