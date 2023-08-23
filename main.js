const gameBoard = (() => {

    const _board = new Array(9)

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

    const printBoard = () => {
        console.log(_board)
    };

    return {getBoard, setBoard, printBoard}

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

    const getWinner = () => {
        setWinner();
        return _winner;
    };

    const setWinner = () => {

        const board = gameBoard.getBoard();
        console.log(typeof board[0])

        if (board[0] === board[1] && board[1]  === board[2]) 
            {
                console.log(`registered winner`)
                Object.assign(_winner, _currentTurn)
            }

    };


    return {getTurn, setTurn, getMove, setMove, getWinner, setWinner}

})();

const render = (() => {
    const board = gameBoard.getBoard();
    let winner = gameController.getWinner();
    let _count = 0;

    while (_count < 9 && winner.length === 0) {
        gameController.setMove();
        gameBoard.setBoard();
        gameBoard.printBoard();

        if (Object.keys(winner.length === 0)) {
            gameController.setTurn();
            console.log(`repeat`)
        } else {
            console.log(`${gameController.getTurn().name} is the winner`);
            break;
        }

        ++_count
    }
    

})();

/*
    [0][1][2]
    [3][4][5]
    [6][7][8]
*/