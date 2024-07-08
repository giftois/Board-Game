const counter = {
    one : 0, two : 0, three : 0,
    four : 0, five : 0, six : 0
}

const images = [];
const tracker = [];
// Board 
const board = document.getElementById('board');
// Selector for each cell on the board
const cellOne = document.getElementById(`1`);
const cellTwo = document.getElementById("2");
const cellThree = document.getElementById("3");
const cellFour = document.getElementById("4");
const cellFive = document.getElementById("5");
const cellSix = document.getElementById("6");
const cellSeven = document.getElementById("7");
const cellEight = document.getElementById("8");
const cellNine = document.getElementById("9");
const cellTen = document.getElementById("10");
const cellEleven = document.getElementById("11");
const cellTwelve = document.getElementById("12");
const cellThirteen = document.getElementById("13");
const cellFourteen = document.getElementById("14");
const cellFifteen = document.getElementById("15");
const cellSixteen = document.getElementById("16");



// Create divs for player icons
const playerOneIcon = document.createElement("div");
const playerTwoIcon = document.createElement("div");
const CPUIcon = document.createElement("div");
playerOneIcon.id = "playerOne";
playerTwoIcon.id = "playerTwo";
CPUIcon.id = "cpu-icon";




// Starting Blocks for player Icons
cellOne.appendChild(playerOneIcon);
cellOne.appendChild(playerTwoIcon);
cellOne.appendChild(CPUIcon);

let playerOnePosition = 1
let playerTwoPosition = 1
let CPUPosition = 1 

// const heading = document.getElementById("heading")

// const rainbowLetters = (string) => {
//     for (let i = 0; i < string.length; i++) {
//         const letter = string[i]
//         const span = document.createElement('span');
//         span.textContent = letter;
//         span.style.color = rbgNum();
//         heading.appendChild(span);
//         setTimeout(() => {
//             span.style.color = "black";
//         }, 1000);
//     }
// }

// Dice function variables
const diceButtonContainer = document.getElementById("dicexbutton-container");
let playerTurnText = document.createElement("h2");
const body = document.getElementById('body');
const diceResultContainer = document.getElementById('dice-result-container');
const diceResult = document.getElementById('dice-result');
const diceImages = document.getElementById('dice-images');
const roll = document.getElementById("roll-btn");
const diceBox = document.getElementById("dice");
const pttHolder = document.getElementById("ptt-holder");
let aValue;

// variables & functions for landing page
const landingBox = document.getElementById("landing-box");
const gameMode = document.getElementsByClassName("game-mode");
const gameModeText = document.getElementById("game-mode-text");
const modeTextContainer = document.getElementById("mode-text-container");
const inputBox = document.getElementById("input-container");
const submit = document.getElementById("submit");

let playerOneName = '';
let playerTwoName = '';

// Function to start the game and capture player names
const startGame = () => {
    playerOneName = document.getElementById('player-1-name').value || 'Player 1';
    playerTwoName = document.getElementById('player-2-name').value || 'Player 2';

        // Hide the input container after starting the game
    document.getElementById('input-container').style.display = 'none';

    start();
};

// Event listener for the submit button
document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    startGame();
});

const singlePlayerMessage = () => {
    gameModeText.textContent = `You've selected Single Player Mode. "Start Game" to begin playing.`;
    inputBox.style.visibility = "hidden";    
    modeTextContainer.style.visibility = "visible";

};

const multiplayerMessage = () => {
    gameModeText.textContent = `You've selected Two Player Mode. "Start Game" to begin playing.`;
    inputBox.style.visibility = "visible";
    modeTextContainer.style.visibility = "visible";
};


// toggles whos turn it is 
let turnToggle = 0;

document.getElementById("player-1").addEventListener('click', singlePlayerMessage);
document.getElementById("player-2").addEventListener('click', multiplayerMessage);

const startSinglePlayer = () => {
    gameModeText.textContent = `Sorry, this feature is not available yet.`;
}

const startTwoPlayer = () => {
    landingBox.style.display = "none";
    board.style.visibility = "visible"
    
    
}

const start = () => {
    if (gameModeText.textContent.includes("Single Player"))  {
        startSinglePlayer();
        playerOneIcon.style.display = "block";
    } else if (gameModeText.textContent.includes("Two Player"))  {
        startTwoPlayer();
        playerOneIcon.style.display = "block";
        playerTwoIcon.style.display = "block";
    } else {
        modeTextContainer.style.visibility = "visible"
        console.log("Error: Something is wrong");
    }
};

playerTurnText.textContent = `Player 1 starts the game.`;
const startBtn = document.getElementById("start-btn")
startBtn.addEventListener('click', start);

// function to return random color via rgb
const rbgNum = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

// function to be called with event initialiaation
const rollDice = () => {

    diceResult.style.cssText = `
    visibility: visible;
    color: white;
    `;

    roll.style.cssText = `
    font-size: 1.5rem;
    padding: 10px 20px;
    border-radius: 25px;
    border: none;
    background-color: rgb(99, 122, 233);
    color: white;
    font-weight: bold;
    cursor: pointer;
    justify-content: right;
    `;

    let value = Math.floor(Math.random() * 6 ) + 1;
    
// switch to track each dice roll and display image with each event
    switch (value) {
    
        case 1 :
        counter.one += 1;
        images.push(`<img class="dice-face" src="dice-images/${value}.png" alt ="Dice ${value}">`);
        break;

        case 2 :
        counter.two += 1;
        images.push(`<img class="dice-face" src="dice-images/${value}.png" alt ="Dice ${value}">`);
        break;

        case 3 :
        counter.three += 1;
        images.push(`<img class="dice-face" src="dice-images/${value}.png" alt ="Dice ${value}">`);
        break;

        case 4 :
        counter.four += 1;
        images.push(`<img class="dice-face" src="dice-images/${value}.png" alt ="Dice ${value}">`);
        break;

        case 5 :
        counter.five += 1;
        images.push(`<img class="dice-face" src="dice-images/${value}.png" alt ="Dice ${value}">`);
        break;

        case 6 :
        counter.six += 1;
        images.push(`<img class="dice-face" src="dice-images/${value}.png" alt ="Dice ${value}">`);
        // TODO ENTER SECOND ROLL HERE
        break;
    }
    
// empty image container to prevent multi-images loading
    diceImages.innerHTML = "";

// add the image to the html with each itertion of the event
    const diceFace = document.createElement('img');
    diceFace.src = `dice-images/${value}.png`;
    diceFace.alt = `Dice ${value}`;
    diceFace.style.cssText = `
    z-index: 0;
    width: 250px;
    height: 250px;
    box-sizing: border-box; 
    background-color: hsl(0, 0%, 90%);
    border-radius: 35px;`

    diceImages.appendChild(diceFace);
    turnToggle++

    const animateMovement = (playerIcon, startPosition, endPosition) => {
        const move = (currentPosition) => {
            if (endPosition >= 36) {
                endPosition = 36;

                playerTurnText.textContent = "We have a winner!"
                
                document.getElementById(`${endPosition}`).appendChild(playerIcon);
            }
            if (currentPosition <= endPosition) {
                document.getElementById(`${currentPosition}`).appendChild(playerIcon);
                setTimeout(() => move(currentPosition + 1), 250);
            }
        };
        move(startPosition + 1);
    };

    const multiplayerGame = () => {

        playerOneIcon.style.cssText = `
        z-index: 99999;
        `
    
        playerTwoIcon.style.cssText = `
        z-index: 99999;
        display: block;
        `
        
        if (turnToggle % 2 === 0) {
            animateMovement(playerTwoIcon, playerTwoPosition, playerTwoPosition+=value);

            diceResult.textContent = `${playerTwoName} scored ${value}`
            console.log(`${playerTwoName} moves to: ${playerTwoPosition}`)
            playerTurnText.textContent = `${playerOneName}'s turn.`
           body.style.backgroundColor = "hsl(230, 77%, 36%)"

           diceResult.style.color = "hsl(0, 77%, 66%)"

           diceButtonContainer.style.cssText = `
           background-color: hsl(230, 77%, 66%);
           box-shadow: hsl(230, 77%, 66%) 0px 0px 15px;
           `

           roll.style.cssText = `
            background-color: hsl(230, 77%, 36%);
           `
           diceResultContainer.style.cssText = `
           background-color: hsl(230, 77%, 36%);
           `

        } else {
            animateMovement(playerOneIcon, playerOnePosition, playerOnePosition+=value);

            diceResult.textContent = `${playerOneName} scored ${value}`
            console.log(`${playerTwoName} moves to: ${playerOnePosition}`)
            playerTurnText.textContent = `${playerTwoName}'s turn.`
            body.style.backgroundColor = "hsl(0, 77%, 26%)"

            diceResult.style.color = "hsl(230, 77%, 76%)"
            
            diceButtonContainer.style.cssText = `
            background-color: hsl(0, 77%, 66%);
            box-shadow: hsl(0, 77%, 66%) 0px 0px 15px;
            `
            roll.style.cssText = `
            background-color: hsl(0, 77%, 26%);
            `
            diceResultContainer.style.cssText = `
            background-color: hsl(0, 77%, 26%);
            `
    
        }
        
    

        CPUIcon.style.cssText = `
        width: 50px; height: 50px;
        background-color: red;
        border-radius: 25px;
        border: solid black 2px;
        z-index: 99999;
        display: none;
        `
    }



multiplayerGame()

};

playerTurnText.style.cssText = `

    justify-self: right;
    align-self: right;
    `
pttHolder.appendChild(playerTurnText);

roll.addEventListener('click', rollDice);






