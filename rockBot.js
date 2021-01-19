class Bot {
    
    makeMove(gamestate) {


      let toBeReturned = ['R','S','P','W','D'];
      let dynamite = 0

        gamestate.rounds.forEach(function(element) => {
            if (element.p1 = 'D'){
                this.dynamite += 1
                if(this.dynamite >= 100){
                    this.toBeReturned.pop()
                }
            }
       })  
             
        let randomNumber=0
         if( dynamite =<100){
             randomNumber = Math.floor(Math.random()*5)}
         if (dynamite>100){
             randomNumber = Math.floor(Math.random()*4)
         }    
        return this.toBeReturned[randomNumber]
    }
}

module.exports = new Bot();
