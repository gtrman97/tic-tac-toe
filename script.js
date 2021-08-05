let moves = 0; 

function move(id) {
    
    if (moves % 2 == 0) {
        document.getElementById(id).innerHTML = 'X'; 
        moves++; 
    }
    else {
        document.getElementById(id).innerHTML = 'O'; 
        moves++; 
    }

}
function reset() {

    for (let i=0; i<9; i++){
        document.querySelectorAll(".square")[i].innerHTML = " "; 
    }
    moves = 0; 
    
}