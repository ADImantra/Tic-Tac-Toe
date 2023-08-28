import Board from "./board.js";

export default class Player {
    constructor(score = 0, 
                token = ``, 
                name = `player`, 
                type = ``,
                maxDepth = -1) {
                    
        this.score = score;
        this.token = token;
        this.name = name;
        this.type = type;
        this.maxDepth = maxDepth;
        this.nodesMap = new Map();
    };

    setName(nameInput) {
        this.name = nameInput;
    };

    setToken(tokenInput) {
        if (![`X`, `O`].includes(tokenInput)) {
            throw new Error(`Invalid token value. must be "X" or "O"`)
        };

        this.token = tokenInput;
    };

    setScore(scoreInput) {
        this.score++
    }

    setType(typeInput) {

        if (![`AI`, `Player`].includes(typeInput)) {
            throw new Error(`Player type must be Player or AI`)
        };

        this.type = typeInput;
    }

    getBestMove(board, max = true, callBack = () => {}, depth = 0) {
        if (this.type !== `AI`) {
            throw new Error(`Player two is not a robot`)
        };

        if (depth === 0) {
            this.nodesMap.clear();
        };

        if (board._getTerminalState(this.token).terminal || depth === this.maxDepth) {
            if (board._getTerminalState(this.token).winner === `X`) {
                return 100 - depth
            } else if (board._getTerminalState(this.token).winner === `O`) {
                return -100 + depth
            } else {
                return 0;
            };
        };

        if (max) {

            let best = -100;

            board._getEmptyCells().forEach(index => {

                const childBoard = new Board([...board.state]);
                
                childBoard._placeToken(`O`, index)

                const nodeValue = this.getBestMove(childBoard, false, callBack, depth + 1);

                best = Math.max(best, nodeValue);

                if (depth === 0) {
                    const moves = this.nodesMap.has(nodeValue)
                        ? `${this.nodesMap.get(nodeValue)},${index}`
                        : index;

                    this.nodesMap.set(nodeValue, moves)
                }
            })

            if (depth === 0) {
                let returnValue;
                if (typeof this.nodesMap.get(best) === `string`) {
                    const moveList = this.nodesMap.get(best).split(`,`);
                    const randInt = Math.floor(Math.random() * moveList.length);
                    returnValue = moveList[randInt];
                } else {
                    returnValue = this.nodesMap.get(best);
                }

                callBack(returnValue);
                return returnValue;
            }
            console.log(best)
            return best;
        };

        if (!max) {
            let best = 100;

            board._getEmptyCells().forEach(index => {
                const childBoard = new Board([...board.state]);
                
                childBoard._placeToken(`X`, index);

                let nodeValue = this.getBestMove(childBoard, false, callBack, depth + 1)

                best = Math.min(best, nodeValue);

                if (depth === 0) {
                    const moves = this.nodesMap.has(nodeValue)
                        ? `${this.nodesMap.get(nodeValue)},${index}`
                        : index;

                    this.nodesMap.set(nodeValue, moves)
                }
            })

            if (depth === 0) {
                let returnValue;
                if (typeof this.nodesMap.get(best) === `string`) {
                    const moveList = this.nodesMap.get(best).split(`,`);
                    const randInt = Math.floor(Math.random() * moveList.length);
                    returnValue = moveList[randInt];
                } else {
                    returnValue = this.nodesMap.get(best);
                };

                callBack(returnValue);
                return returnValue;
            }

            return best;
        }
        
    }
}