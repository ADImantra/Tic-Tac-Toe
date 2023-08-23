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
        for (let i = 0; i <_board.length; i++) {
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

};

const gameController = (
    (playerOneName = `Player One`, playerTwoName = `Player Two`) => {

    const _players = [
    {
        name: playerOneName,
        token: `X`
    },
    {
        name: playerTwoName,
        token: `O`
    }];

    let _move = 0;

    let _currentTurn = _players[0];

    let _winner = {};

    const getTurn = () => _currentTurn;

    const setTurn = () => {
        _currentTurn = _currentTurn === _players[0] ? _players[1] : _players[0]
    };

    const getMove = () => _move;

    const setMove = () => {
        let _input = prompt(`Pick a number from 1-9`)
        _move = _input
    };

    


    return {getTurn, setTurn, getMove, setMove}

})();



/*
    [[0,1,2],
     [3,4,5],
     [6,7,8]]

    
*/