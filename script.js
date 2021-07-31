let moves = 1; 

function move(id) {
    if (moves % 2 == 0) {
        document.getElementById(id).innerHTML = 'X'; 
    }
    else {
        document.getElementById(id).innerHTML = 'O'; 
    }
}