const gameBoard = (() => {

    let _board = new Array(9)

    const _setBoard = () => {

        let player = gameController._getTurn();
        let move = gameController._getMove();

        if (_board[move] === undefined) {
            _board[move] = player.token;
            return true;
        } else {
            console.log(`invalid space`)
            return false
        }
    };

    const _getBoard = () => _board;

    const _getEmptySpace = () => {
        const spaces = _board.filter((space) => {
            typeof space === undefined;
        });

        return spaces;
    };

    const _getBoardSpace = (index) => _board[index];

    const _printBoard = () => {
        console.log(_board)
    };

    const _clearBoard = () => {
        for (let i = 0; i < _board.length; i++) {
            _board[i] = undefined;
        }
    }

    return {
        _getBoard,
        _getEmptySpace,
        _getBoardSpace,
        _setBoard,
        _printBoard,
        _clearBoard
    }

})();

const Player = (() => {

    let _player = {};
    
    const _makePlayer = (name, token) => {
        _player.name = name;
        _player.token = token;
    }

    const _getPlayer = () => _player;

    const _clearPlayer = () => {
        _player = {};
    }

    return {
        _makePlayer,
        _getPlayer,
        _clearPlayer

    }

})();

const gameAI = (() => {

    let _diff = 0;

    const _setDifficulty = (diff) => {
        _diff = diff;
    }

    const _getDifficulty = () => _diff

    return {
        _setDifficulty,
        _getDifficulty

        }

})();

const gameController = (() => {

        let _move = 0;
        let _mode = `Versus`;
        let _players = [];
        let _currentTurn = _players[0];

        const _setPlayers = (playerName, playerToken) => {
            Player._makePlayer(playerName, playerToken);
            const newPlayer = Player._getPlayer()
            _players.push(newPlayer);
            Player._clearPlayer()
        };

        const _setMode = () => {
            _mode = _mode === `Versus` ? `AI` : `Versus`;
        };

        const _setTurn = () => {
            if (_players.length === 2) {
                _currentTurn = _currentTurn === _players[1] ? _players[0] : _players[1]
            } else {
                console.log(`To Few Players`)
            }
            
        };

        const _setMove = () => {
            let _input = prompt(`Pick a number from 1-9`)
            _move = _input
        };

        const _getMode = () => _mode;

        const _getTurn = () => _currentTurn;

        const _getPlayers = () => _players;

        const _getMove = () => _move;

        function _checkRows() {
            for (let i = 0; i <3; i++) {
                let row = []
                for (let j = i * 3; j < i * 3 + 3; j++) {
                    row.push(gameBoard._getBoardSpace(j))
                }
                if (row.every(space => space === `X`) || row.every(space => space === `O`)) {
                    return true;
                }
            }
            

            return false;
        };

        function _checkColumns() {
            for (let i = 0; i <3; i++) {
                let column = []
                for (let j = 0; j < 3; j++) {
                    column.push(gameBoard._getBoardSpace(i + j * 3))
                }
                if (column.every(space => space === `X`) || column.every(space => space === `O`)) {
                    return true;
                }
            }
            

            return false;

        };

        function _checkDiagonals() {
            const diagonal1 = [gameBoard._getBoardSpace(0),
                               gameBoard._getBoardSpace(4),
                               gameBoard._getBoardSpace(8)];

            const diagonal2 = [gameBoard._getBoardSpace(2),
                               gameBoard._getBoardSpace(4),
                               gameBoard._getBoardSpace(6)];

            if (diagonal1.every(space => space === `X`) || diagonal1.every(space => space === `O`)) {
                return true;

            } else if (diagonal2.every(space => space === `X`) || diagonal2.every(space => space === `O`)) {
                return true;

            }

            return false;
        };

        const _checkWinner = () => {
            if (_checkRows() === true) {
                return true;
            } else if (_checkColumns() === true) {
                return true;
            } else if (_checkDiagonals() === true) {
                return true;
            } else {
                return false
            }
        }

        const _checkDraw = () => {
            if (!(_checkWinner) && gameBoard._getEmptySpace().length === 0) {
                return true;
            } else {
                return false;
            }
            


        }

        
        return {
            _setPlayers, 
            _getPlayers, 
            _setMode, 
            _getMode, 
            _getTurn, 
            _setTurn, 
            _getMove, 
            _setMove,
            _checkWinner,
            _checkDraw
        }

    })();

const render = (() => {
    gameController._setPlayers(`Minty`, `X`);
    gameController._setPlayers(`Caroline`, `O`);

    console.log(gameController._getPlayers());
    console.log(gameController._checkWinner())
    while (!(gameController._checkWinner()) && !(gameController._checkDraw())) {

        gameController._setTurn();
        gameController._setMove();
        gameBoard._setBoard();
        gameBoard._printBoard();
    }
    
})();

/* 
    [X,O,X
     O,X,X
     O,X,O]
*/