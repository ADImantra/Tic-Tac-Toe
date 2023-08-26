export default class Player {
    constructor(score = 0, 
                token = ``, 
                name = `player`, 
                activePlayer = false,
                type = ``) {
                    
        this.score = score;
        this.token = token;
        this.name = name;
        this.activePlayer = activePlayer;
        this.type = type;
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
    
    setActivePlayer () {
        this.activePLayer = activePLayer === true ? false : true;
    }

    setType() {
        this.type = type === `AI` ? `Player` : `AI`;
    }

    getName() {
        return this.name;
    };

    getToken() {
        return this.token;
    };

    getScore() {
        return this.score;
    };

    getActivePlayer() {
        return this.activePlayer;
    };
}