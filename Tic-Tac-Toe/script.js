let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let newGame = document.querySelector("#new-btn");
let msg = document.querySelector(".msg");
let main = document.querySelector("main");


let player0 = true;

const winPatten = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const reset = () => {
    player0 = true;
    enabledbox();
    msgContainer.classList.add("hide");
    main.classList.remove("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (player0) {
            box.innerText = "O";
            box.style.color = "red";
            player0 = false;
        } else {
            box.innerText = "X";
            box.style.color = "blue";
            player0 = true;
        };
        box.disabled = true

        checkWinner();
    });

});

const disabledbox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enabledbox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    disabledbox();
    msgContainer.classList.remove("hide");
    main.classList.add("hide");
};

const checkWinner = () => {
    for (let patten of winPatten) {
        let pos0 = boxes[patten[0]].innerText
        let pos1 = boxes[patten[1]].innerText
        let pos2 = boxes[patten[2]].innerText
        if (pos0 != "" && pos1 != "" && pos2 != "") {
            if (pos0 === pos1 && pos1 === pos2) {
                showWinner(pos0);
            }
        }
    }
};

newGame.addEventListener('click',reset);
resetbutton.addEventListener('click',reset);