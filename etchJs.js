let color = "black"

document.addEventListener("DOMContentLoaded", function(){
    createBoard(32);

    let btn = document.querySelector("#popup");
    btn.addEventListener('click', function (){
        let size = getSize();
        createBoard(size);
    })
})

function createBoard(size){
    let board = document.querySelector(".board");
    
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i<numDivs; i++){
        let div = document.createElement('div');
        div.addEventListener("mouseover", colorDiv);
        div.setAttribute('id', 'innerDiv');
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize(){
    let userInput = prompt("Enter a number between 1 to 200 for create a board.");
    let message = document.querySelector("#message");
    message.style.backgroundColor = "khaki";
    message.style.border = "1px solid red";

        if (userInput == "")
            {message.textContent = "Please enter a number";
        }
     
        else if (userInput < 1 || userInput > 201){
            message.textContent = "Enter a number between 1 to 200.";
        }
        else {
            message.textContent = "Let's Draw!";
            return userInput;
        }
}
function colorDiv(){
    if(color == 'random'){
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
    }
    else if (color == 'red'){
        this.style.backgroundColor = 'red';
    }
    else if (color == 'blue'){
        this.style.backgroundColor = 'blue';
    }
    else if (color == 'azure'){
        this.style.backgroundColor = 'azure';
    }
    else{
        this.style.backgroundColor = 'black';
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function clearAll(){
    let inner = document.querySelectorAll("#innerDiv");
    inner.forEach((div) => div.style.backgroundColor = "azure");

    }


