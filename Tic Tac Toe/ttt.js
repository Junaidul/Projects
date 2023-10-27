const user_choice = document.querySelectorAll('.cell');
const restart = document.querySelector('.button');
const turn = document.querySelector('.turn');
const winCombo = [[0, 1 , 2], [0 , 3 , 6] , [0 , 4 , 8] , [2 , 5 , 8] , [3 , 4 , 5] , [6 , 7 , 8] , [1 , 4 , 7] , [2 , 4 , 6]];

let empty = ["" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ];
let playerCurrent = "X";
let running = false;

init();
function init() {
    user_choice.forEach(cell => cell.addEventListener("click" , cellClicked));
    restart.addEventListener("click" , restartGame);
    turn.textContent = `It's ${playerCurrent}'s turn`;
    running = true;
}



function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if (empty[cellIndex] != "" || !running){
        return;
    }

    updateCell(this , cellIndex);
    checkWinner();
}



function updateCell(cell , index){
    empty[index] = playerCurrent;
    cell.textContent = playerCurrent;
}



function switchPlayer(){
    playerCurrent = (playerCurrent == "X") ?  playerCurrent = "O" : playerCurrent = "X";
    turn.textContent = `It's ${playerCurrent}'s turn`;
}



function checkWinner(){
    let round = false;

    for(i = 0 ; i < winCombo.length ; i++) {
        const combo = winCombo[i];
        const cell1 = empty[combo[0]];
        const cell2 = empty[combo[1]];
        const cell3 = empty[combo[2]];

        if (cell1 == '' || cell2 == '' || cell3 == ''){
            continue;
        }
        if (cell1 == cell2 && cell2 == cell3){
            round = true;
            break;
        }
    }

    if (round){
        turn.textContent = `${playerCurrent} has won the game congrats!!!`;
        running = false;

    }

    else if (!empty.includes("")){
        turn.textContent = `It's a Draw! Try again!!`;
        running = false;
    }

    else{
        switchPlayer();
    }


}



function restartGame(){    // Restart button
    playerCurrent = "X";
    empty = ["" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ];
    turn.textContent = `It's ${playerCurrent}'s turn`;
    user_choice.forEach(cell => cell.textContent = '')
    running = true;
}
