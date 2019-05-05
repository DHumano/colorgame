var numbSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}


// easyBtn.addEventListener("click",function(){
//     easyBtn.classList.add("selected");
//     numbSquares=3;
//     hardBtn.classList.remove("selected");
//     colors = generateRandomColors(numbSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         //colores inuevos
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else{
//             squares[i].style.display = "none";
//         }
//     }

// });

// hardBtn.addEventListener("click",function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numbSquares=6;
//     colors = generateRandomColors(numbSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         //colores inuevos
//         squares[i].style.display = "block";
//         squares[i].style.backgroundColor = colors[i];

//     }
// });

resetButton.addEventListener("click",function(){
    reset();
    // colors = generateRandomColors(numbSquares);
    // pickedColor = pickColor();
    // colorDisplay.textContent = pickedColor;
    // messageDisplay.textContent = "";
    // h1.style.backgroundColor = "steelblue";
    // this.textContent = "New Colors";
    // for (var i = 0; i < squares.length; i++) {
    //     //colores inuevos
    //     squares[i].style.backgroundColor = colors[i];
    // }
});

//colorDisplay.textContent=pickedColor;



function changeColors(color){
    for (var i = 0; i < squares.length;i++){
        squares[i].style.backgroundColor=color;
    }

}

function pickColor(){
    var random= Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr=[];

    for (var i=0;i<num;i++){
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb("+r+", "+g+", "+b+")";
}

function reset(){
    colors = generateRandomColors(numbSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    for (var i = 0; i < squares.length; i++) {
        //colores inuevos
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display="none";
        }
    }
}

function setupModeButtons(){
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Easy" ? numbSquares = 3 : numbSquares = 6;
            // if(this.textContent==="Easy"){
            //     numbSquares=3;
            // }
            // else{
            //     numbSquares=6;
            // }
            reset();
        });
    }
}

function setupSquares(){
    for (var i = 0; i < squares.length; i++) {
        //colores iniciales
        //squares[i].style.backgroundColor=colors[i];

        //listeners
        squares[i].addEventListener("click", function () {
            clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "play again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}