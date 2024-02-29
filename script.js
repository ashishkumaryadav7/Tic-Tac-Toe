let boxes = document.querySelectorAll('.sub-box');
let messageBox = document.querySelector(".Message-box");
let result = document.querySelector(".result");
let turnVal = 'O';

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
        result.style.display = 'block';
        result.innerText = `${val} is Winner`;
    }
    else{
        console.log("Draw");
        result.style.display = 'block';
        result.innerText = "Draw !";
    }
}
function announcWinner(i1,i2,i3){
    id1=document.getElementById(i1);
    id2=document.getElementById(i2);
    id3=document.getElementById(i3);

    id1.style.backgroundColor = "#19D397";
    id2.style.backgroundColor = "#19D397";
    id3.style.backgroundColor = "#19D397";
}



function turn(val){
    messageBox.innerText = `${turnVal}'s Turn`; 
    turnVal = (val != 'X') ? "X":"O"
}