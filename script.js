let boxes = document.querySelectorAll('.sub-box');
let turnVal = 'O';


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
}

function turn(val){
    turnVal = (val != 'X') ? "X":"O"
    console.log(turnVal);
}