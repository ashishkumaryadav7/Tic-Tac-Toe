let boxes = document.querySelectorAll('.sub-box');
let messageBox = document.querySelector(".Message-box");
let result = document.querySelector(".result");
let turnVal = 'O';
let boxc1 = 0;
let boxc2 = 0;
let boxc3 = 0;

let pattern = [
    ["box-1","box-2","box-3"],
    ["box-4","box-5","box-6"],
    ["box-7","box-8","box-9"],
    ["box-1","box-4","box-7"],
    ["box-2","box-5","box-8"],
    ["box-3","box-6","box-9"],
    ["box-1","box-5","box-9"],
    ["box-3","box-5","box-7"]
];

boxes.forEach((box) => {
    box.clicked = false;
    box.addEventListener('click', function() {
        if (!box.clicked) {
            fillBox(box);
            box.clicked = true;
        }
    });
});

function fillBox(e){
    turn(turnVal);
    e.innerText = turnVal;
    checkWiner();
}
function checkWiner(){
    let draw = false;
    let test = 0;
    for(let i=0 ; i<pattern.length;i++){
        let i1 = pattern[i][0];
        let i2 = pattern[i][1];
        let i3 = pattern[i][2];
        let c1 = document.getElementById(pattern[i][0]).textContent;
        let c2 = document.getElementById(pattern[i][1]).textContent;
        let c3 = document.getElementById(pattern[i][2]).textContent;
        if((c1 != "")&&(c2 != "")&&(c3 != "")){
            if((c1 === c2)&&(c2 === c3)&&(c1 === c3)){
                console.log("Winner");
                announcWinner(i1,i2,i3);
                displayWinner(c1);
                break;
            }
            else{
                test += 1;
            }
        }
        if(test === 8)
        {
            displayWinner(0);
        }
        
    }
}
function displayWinner(val){
    if(val != 0){
        console.log(val + "Winnner");
        result.style.visibility = 'visible';
        result.innerText = `${val} is Winner`;
    }
    else{
        console.log("Draw");
        result.style.visibility = 'visible';
        result.innerText = "Draw !";
    }
    toDisableAfterWinnig();
}

function announcWinner(i1,i2,i3){
    id1=document.getElementById(i1);
    id2=document.getElementById(i2);
    id3=document.getElementById(i3);

    boxc1 = id1;
    boxc2 = id2;
    boxc3 = id3;

    id1.style.backgroundColor = "#2eb98b";
    id2.style.backgroundColor = "#2eb98b";
    id3.style.backgroundColor = "#2eb98b";
}


function turn(val){
    messageBox.innerText = `${turnVal}'s Turn`; 
    turnVal = (val != 'X') ? "X":"O"
}

function toDisableAfterWinnig(){
    boxes.forEach((box) => {    
        box.clicked = true;
    });
    messageBox.innerText = 'New Game';
    messageBox.style.cursor = 'pointer';
    newGame();
    
}


function newGame() {
    var clickFunction = function() {
        result.style.visibility = 'hidden';
        boxc1.style.backgroundColor = '#39495a31';
        boxc2.style.backgroundColor = '#39495a31';
        boxc3.style.backgroundColor = '#39495a31';
        turnVal = 'O';
        messageBox.innerText = "X's Turn";
        messageBox.style.cursor = 'auto';
        boxes.forEach((box) => {
            box.clicked = false;
            box.innerText= '';
        });
        // Remove the event listener
        messageBox.removeEventListener('click', clickFunction);
    }

    // Add the event listener
    messageBox.addEventListener('click', clickFunction);
}
