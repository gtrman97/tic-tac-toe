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
    console.log(document.querySelectorAll(".square")[0]); 

    for (let i=0; i<9; i++){
        document.querySelectorAll(".square button")[i].innerHTML = " "; 
    }
    
}