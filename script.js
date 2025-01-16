let boxes = document.querySelectorAll(".box");//stores all buttons in a array 
let resetbtn = document.querySelector("#reset");
// console.log(boxes);
// console.log(resetbtn);

let chance = true;//for changing chances

let count = 0; //to add count of clicks for check draw 

// created an array for all the possible winning patterns:
let winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];


//used forEach loop to get all single buttons stored in variable 'boxes'
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (chance) {
            box.innerHTML = "X";
            chance = false;
        } else {
            box.innerHTML = "O";
            box.style.color = "purple";
            chance = true;
        }
        box.disabled = true;
        count++;
        let iswinner = checkwinner();
        if (count == 9 && !iswinner) {
            checkdraw();
        }

    });
});






//created function to check the winner of game
function checkwinner() {
    for (let pattern of winpatterns) {
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        let win1 = boxes[pattern[0]].innerHTML;
        let win2 = boxes[pattern[1]].innerHTML;
        let win3 = boxes[pattern[2]].innerHTML;

        if (win1 != 0 && win2 != 0 && win3 != 0) {

            if (win1 == win2 && win2 == win3) {
                boxdisable(); //calling box disable function which we created to disabled the box after getting winner:
                document.querySelector(".congratz").classList.remove("hide");
                document.querySelector("#reset").innerText = "NeW GaME";

                if (win1 == "X") {
                    document.querySelector("span").innerHTML = "Congratlations! Player X wins! 💀";

                } else {
                    document.querySelector("span").innerHTML = "Congratulations!🎉 Player O wins! 👿";

                }

            }
        }
    }
}



//created function to check draw:
function checkdraw() {
    document.querySelector(".congratz").classList.remove("hide");
    document.querySelector("#reset").innerText = "NeW GaME";
    document.querySelector("span").innerHTML = "Game Draws!🤕 Please Start a New Game!";

}



//created function to disabled the boxes after game is over.
let boxdisable = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}


// js for reset button
let reset = () => {
    document.querySelector(".congratz").classList.add("hide");
    chance = true;
    boxes.forEach((box) => {
        box.innerHTML = "";
        box.disabled = false;
    });
}//created function for reset button:

resetbtn.addEventListener("click", reset);//calling reset function which we make to reset the game: