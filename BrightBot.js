class Bot {
    
    makeMove(gamestate) {              
        let toBeReturned1 = ['R', 'S', 'P', 'D'];
        let dynamite = 0
        let arounds = gamestate.rounds

        gamestate.rounds.forEach(function (element) {
            if (element.p1 = 'D') {
                dynamite += 1
            }
        })

        if (dynamite >= 100) {
            toBeReturned1.pop()
        }

         let returnValue1=''
       

        if(arounds.length>0 && arounds[arounds.length-1].p2==='D'){
            returnValue1='W'
        }
        
         else if( gamestate.rounds.length<100)
                 {returnValue1= 'D'}
        

        else{
        returnValue1 = toBeReturned1[Math.floor(Math.random() * toBeReturned1.length)];}
        
        return returnValue1;
    
    }
}


module.exports = new Bot();
