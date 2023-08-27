export default class Player {
    constructor(score = 0, 
                token = ``, 
                name = `player`, 
                type = ``) {
                    
        this.score = score;
        this.token = token;
        this.name = name;
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

    setType() {
        this.type = type === `AI` ? `Player` : `AI`;
    }
}