let boxes = document.querySelectorAll('.sub-box');
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
}

function turn(val){
    turnVal = (val != 'X') ? "X":"O"
    console.log(turnVal);
}