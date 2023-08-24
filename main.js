const gameBoard = (() => {

    let _board = new Array(9)

    const setBoard = () => {

        player = gameController.getTurn();
        move = gameController.getMove();

        if (_board[move] === undefined) {
            _board[move] = player.token;
        } else {
            console.log(`invalid space`)
            return
        }
    };

    const getBoard = () => _board;

    const getEmptySpace = () => {
        const spaces = _board.filter((space) => {
            typeof space === undefined;
        });

        return spaces;
    };

    const getBoardSpace = (index) => _board[index];

    const printBoard = () => {
        console.log(_board)
    };

    const clear = () => {
        for (let i = 0; i < _board.length; i++) {
            _board[i] = undefined;
        }
    }

    return {
        getBoard,
        getEmptySpace,
        getBoardSpace,
        setBoard,
        printBoard,
        clear
    }

})();

const Player = () => {

    let _name = ``;
     
    const getName = () => _name

    const setName = (nameInput) => {
        _name = nameInput
    }

    return {
        getName,
        setName
    }

};

const gameController = (() => {

        let _move = 0;
        let _currentTurn = 0;
        let _mode = `Versus`;
        let _players = [];

        const setPlayers = (playerName, playerToken) => {
            let player = {playerName: `${playerName}`, playerToken: `${playerToken}`};
            _players.push(player);
        }

        const setMode = () => {
            _mode = _mode === `Versus` ? `AI` : `Versus`;
        }

        const setTurn = () => {
            if (_players.length === 2) {
                _currentTurn = _currentTurn === _players[0] ? _players[1] : _players[0]
            } else {
                console.log(`To Few Players`)
            }
            
        };

        const setMove = () => {
            let _input = prompt(`Pick a number from 1-9`)
            _move = _input
        };

        const getMode = () => _mode;

        const getTurn = () => _currentTurn;

        const getPlayers = () => _players;

        const getMove = () => _move;

        
        return {
            setPlayers, 
            getPlayers, 
            setMode, 
            getMode, 
            getTurn, 
            setTurn, 
            getMove, 
            setMove 
        }

    })();



/*
    [[0,1,2],
     [3,4,5],
     [6,7,8]]

    
*/