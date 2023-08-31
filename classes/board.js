export default class Board {
    constructor(state = new Array(``,``,``,``,``,``,``,``,``)) {
        this.state = state;

    };

    _printFormattedBoard() {
        let formattedString = ``;
        this.state.forEach((cell, index) => {
            formattedString += cell ? `${cell} |` : `   |`;
            if ((index + 1) % 3 === 0) {
                formattedString = formattedString.slice(0, -1);
                if(index < 8) {
                    formattedString += '\n\u2015\u2015\u2015 \u2015\u2015\u2015 \u2015\u2015\u2015\n'
                }
            }
        });
        console.log(`%c` + formattedString, `color: #c11dd4;font-size:16px`)
    };

    _getEmptyCells() {
        const moves = [];
        this.state.forEach((cell, index) => {
            if (!cell) {
                moves.push(index)
            }
        });

        return moves;
    };

    _fullBoard() {
        return this.state.every((cell) => {
            return cell;
        })
    };

    _emptyBoard() {
        return this.state.every((cell) => {
            return !cell
        })
    };

    _placeToken(token, move) {
         if (![0,1,2,3,4,5,6,7,8].includes(move)) {
            throw new Error(`Cell index out of range`);
         }

         if (![`X`,`O`].includes(token)) {
            throw new Error(`Invalid token value. must be "X" or "O"`)
         }

         if (this.state[move]) {
            return false
         }

         this.state[move] = token;
         return true;
    };

    _checkRows() {
        let row1 = [this.state[0], this.state[1], this.state[2]];
        let row2 = [this.state[3], this.state[4], this.state[5]];
        let row3 = [this.state[6], this.state[7], this.state[8]];

        if (row1.every(space => space === `X`) || row1.every(space => space === `O`)) {
            return true;
        };

        if (row2.every(space => space === `X`) || row2.every(space => space === `O`)) {
            return true;
        };

        if (row3.every(space => space === `X`) || row3.every(space => space === `O`)) {
            return true;
        };

        return false
    };

    _checkColumns() {
        let col1 = [this.state[0], this.state[3], this.state[6]];
        let col2 = [this.state[1], this.state[4], this.state[7]];
        let col3 = [this.state[2], this.state[5], this.state[8]];

        if (col1.every(space => space === `X`) || col1.every(space => space === `O`)) {
            return true;
        };

        if (col2.every(space => space === `X`) || col2.every(space => space === `O`)) {
            return true;
        };

        if (col3.every(space => space === `X`) || col3.every(space => space === `O`)) {
            return true;
        };

        return false
    };

    _checkDiagonals() {
        const diagonal1 = [this.state[0], this.state[4], this.state[8]]
        const diagonal2 = [this.state[2], this.state[4], this.state[6]]

        if (diagonal1.every(cell => cell === `X`) || diagonal1.every(cell => cell === `O`)) {
            return true;
        } else if (diagonal2.every(cell => cell === `X`) || diagonal2.every(cell => cell === `O`)) {
            return true;
        } else {
            return false;
        }
    };

    _getTerminalState(token)  {
        if (this._emptyBoard()) {
            return {terminal: false, winner: `None`, board: this.state}
        }

        if (this._checkRows()) {
            return {terminal: true, winner: token, board: this.state}
        }

        if (this._checkColumns()) {
            return {terminal: true, winner: token, board: this.state}
        }

        if (this._checkDiagonals()) {
            return {terminal: true, winner: token, board: this.state}
        }

        if (this._fullBoard()) {
            return {terminal: true, winner: `Draw`, board: this.state}
        }

        return {terminal: false, winner: `None`, board: this.state}
    };

    _clear() {
        this.state = [``,``,``,``,``,``,``,``,``]
    }
};