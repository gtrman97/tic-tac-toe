let moveCount = 0; 
let moves = new Array(3).fill(0).map(() => new Array(3).fill(0));

function move(id) {

    console.log(moves);
    
    if (moveCount % 2 == 0) {
        // console.log(id[id.length-1]); 
        moves.push(1); 
        document.getElementById(id).innerHTML = 'X'; 
        moveCount++; 
        if(id[id.length-1] <= 3) {
            moves[0][id[id.length-1] - 1 ] = 1;

        }
        else if (id[id.length-1] <= 6) {
            moves[1][id[id.length-1] - 4 ] = 1;
        }
        else {
            moves[2][id[id.length-1] - 7 ] = 1;
        }
    }
    else {       
        moves.push(0); 
        document.getElementById(id).innerHTML = 'O'; 
        moveCount++; 
    }

}
function reset() {

    for (let i=0; i<9; i++){
        document.querySelectorAll(".square")[i].innerHTML = " "; 
    }
    moveCount = 0; 
    
}