let moves = 0; 

function move(id) {
    console.log(id);
    console.log(3);
    if (moves % 2 == 0) {
        document.getElementById(id).innerHTML = 'X'; 
        moves++; 
    }
    else {
        document.getElementById(id).innerHTML = 'O'; 
        moves++; 
    }
}
function reset () {
    document.getElementsByClassName("square").innerHTML = " ";
}