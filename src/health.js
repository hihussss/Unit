export function scaleHealth (players) {
    let rezult = '';
    for (let i = 0; i < players.length; i++ ) {
        if (players[i].health >= 50) {
            rezult = 'health'
        }else if (players[i].health <50 && players[i].health > 15){
            rezult = 'wounded'
        }else {
            rezult = 'critical'
        }
    }
    return rezult

}



