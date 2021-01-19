class Bot {
    
    makeMove(gamestate) {              
        let toBeReturned = ['R', 'S', 'P', 'W', 'D'];
        let dynamite = 0

        gamestate.rounds.forEach(function (element) {
            if (element.p1 = 'D') {
                dynamite += 1
            }
        })

        if (dynamite > 100) {
            toBeReturned.pop()
        }
        let returnValue = toBeReturned[Math.floor(Math.random() * toBeReturned.length)];
        return returnValue;
    
    }
}

module.exports = new Bot();
