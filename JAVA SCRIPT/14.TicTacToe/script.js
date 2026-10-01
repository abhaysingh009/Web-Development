const gridBox=["","","","","","","","",""];
let totalInsert=0;
let winnerDecided=false;
function checkWinner(player){
    if(gridBox[0]==player && gridBox[1]==player && gridBox[2]==player)return true;
    else if(gridBox[3]==player && gridBox[4]==player && gridBox[5]==player)return true;
    else if(gridBox[6]==player && gridBox[7]==player && gridBox[8]==player)return true;
    // 
    else if(gridBox[0]==player && gridBox[3]==player && gridBox[6]==player)return true;
    else if(gridBox[1]==player && gridBox[4]==player && gridBox[7]==player)return true;
    else if(gridBox[2]==player && gridBox[5]==player && gridBox[8]==player)return true;
    else if(gridBox[0]==player && gridBox[4]==player && gridBox[8]==player)return true;
    else if(gridBox[2]==player && gridBox[4]==player && gridBox[6]==player)return true;
    else return false;

}
const board=document.getElementById('board')
let turn='X'

const stat=document.getElementById('status')
board.addEventListener('click',(e)=>{
    if(winnerDecided || totalInsert==9 || gridBox[e.target.id]!='')return;
    const box=e.target
    box.textContent=turn
    const idx=box.id;
    gridBox[idx]=turn;
    totalInsert++;

    if(checkWinner(turn)){
        stat.textContent=`player ${turn} Won the Game`
        winnerDecided=true;
        return ;

    }
    if(totalInsert==9){
        stat.textContent=`Game Draw`;
        return;

    }
    if(turn=='X'){
        turn ='O'
    }else {
        turn='X'
    }
    stat.textContent=`Player ${turn}'s Turn`;



})

// reset button
const button=document.getElementById('resetBtn')
button.addEventListener('click',()=>{
    for(let i=0;i<9;i++){
        gridBox[i]="";
        document.getElementById(i).textContent="";
    }
    winnerDecided=false;
    totalInsert=0;
    stat.textContent="Player x's turn"
})



// winner
// row=012,345, 678
// col=036, 147, 258
// diag=048 246

