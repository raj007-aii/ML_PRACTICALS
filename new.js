const closestEnemy = (arr) => {
    let player = [];
    let enemy = [];
    let distance = 0;
    let rowLength = arr[0].length;
    let board = arr.length;

    for(let i=0; i<board; i++){
        let row = arr[i].split("");
        let rowLength = row.length;

        for(let j=0; j < rowLength; j++) {
            if(row[j] == 1){
                player.push(j,i);
            } else if (row[j] == 2){
                enemy.push(j,i)
            }
        }
    }

    let enemyLength = enemy.length;

    for (let i=0; i<enemyLength; i+=2){
        let newDistance = 0;

        if (Math.abs(player[0] - enemy[i]) < rowLength / 2){
            newDistance = Math.abs(player[0] - enemy[i]);
        } else {
            newDistance = rowLength - Math.abs(player[0] - enemy[i]);
        }

        if(Math.abs(player[1] - enemy[i+1]) < board / 2){
            newDistance += Math.abs(player[1] - enemy[i+1]);
        } else {
            newDistance += board - Math.abs(player[0] - enemy[i]);
        }

        if (distance==0 || newDistance < distance){
            distance = newDistance;
        }
    }
    return distance;
}

closestEnemy(['0000','2010','0000','2002'])