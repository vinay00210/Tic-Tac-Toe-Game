// this is a enhances javascript code to make game betterby adding some features: refer this javascript file..


let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

let turn = true;
let chance = Math.floor(Math.random() * 2);

let count = 0;

let winningpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            turn = false;

            if (chance == 0) {
                box.innerText = "X";
                box.style.color = " #c50900";
                chance = 1;
            } else {
                box.innerText = "O";
                box.style.color = "purple";
                turn = true;
                chance = 0;
            }
        } else {
            box.innerText = "O";
            box.style.color = "purple";
            turn = true;
            chance = 0;
        }
        box.disabled = true;
        count++;
        let winner = checkwinner();
        if (count == boxes.length && !winner) {
            checkdraw();
        }
    });
});


function checkwinner() {
    for (let pattern of winningpattern) {
        let win1 = boxes[pattern[0]].innerText;
        let win2 = boxes[pattern[1]].innerText;
        let win3 = boxes[pattern[2]].innerText;

        if (win1 != 0 && win2 != 0 && win3 != 0) {
            if (win1 == win2 && win1 == win3) {
                document.querySelector(".congratz").classList.remove("hide");
                reset.innerText = "NeW GaME";
                boxdisable();
                if (win1 == "X") {
                    document.querySelector("span").innerHTML = "Congratlations! Player X wins! 💀";
                } else {
                    document.querySelector("span").innerHTML = "Congratulations!🎉 Player O wins! 👿";
                }

            }
        }
    }
}


let checkdraw = () => {
    document.querySelector(".congratz").classList.remove("hide");
    reset.innerText = "NeW GaME";
    document.querySelector("span").innerHTML = "Game Draws!🤕 Please Start a New Game!";
}


let boxdisable = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}


let resetfunc = () => {
    document.querySelector(".congratz").classList.add("hide");
    turn = true;
    count=0;
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })
}

reset.addEventListener("click", resetfunc);
