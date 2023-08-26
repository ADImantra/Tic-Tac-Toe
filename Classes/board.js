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
        return this.state.filter(space => {
            typeof space === ``;
        })
    };

    _fullBoard() {
        console.log(this.state)
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
        for (let i = 0; i < 3; i++) {
            let row = [];
            for (let j = i + 3; j < i * 3 + 3; j++) {
                row.push(this.state[j])
            }

            if (row.every(cell => cell === `X`) || row.every(cell => cell === `O`)) {
                return true;
            }
        }
        return false;
    };

    _checkColumns() {
        for (let i = 0; i < 3; i++) {
            column = [];
            for (let j = 0; j < 3; j++) {
                column.push(this.state[i + j*3])
            }

            if (column.every(cell => cell === `X`) || column.every(cell => cell === `O`)) {
                return true;
            }
        }

        return false;
    };

    _checkDiagonals() {
        const diagonal1 = [this.state[0], this,state[4], this.state[8]]
        const diagonal2 = [this.state[2], this,state[4], this.state[6]]

        if (diagonal1.every(cell => cell === `X`) || diagonal1.every(cel => cell === `O`)) {
            return true;
        } else if (diagonal2.every(cell => cell === `X`) || diagonal2.every(cel => cell === `O`)) {
            return true;
        } else {
            return false;
        }
    };

    _getTerminalState()  {
        if (this._emptyBoard()) {
            return false
        }

        if (this._checkRows()) {
            return true
        }

        return false
    };

    _isDraw() {
        return this._fullBoard() && !this._getTerminalState();
    };
};