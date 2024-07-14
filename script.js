const counter = {
    one : 0, two : 0, three : 0,
    four : 0, five : 0, six : 0
}

const images = [];
const tracker = [];

// Board 
const board = document.getElementById('board');
// Selector for cell on the board
const cellOne = document.getElementById(`1`);
const square = document.getElementsByClassName("square");


// Create divs for player icons
const playerOneIcon = document.createElement("div");
const playerTwoIcon = document.createElement("div");
const CPUIcon = document.createElement("div");
playerOneIcon.id = "playerOne";
playerTwoIcon.id = "playerTwo";
CPUIcon.id = "cpu-icon";

// Starting Blocks for player Icons
const cellZero = document.getElementById("0");
cellZero.appendChild(playerOneIcon);
cellZero.appendChild(playerTwoIcon);
cellZero.appendChild(CPUIcon);

let playerOnePosition = 0
let playerTwoPosition = 0
let CPUPosition = 0;

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
const rematch = document.getElementById("rematch")

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


const singlePlayerMessage = () => {
    gameModeText.textContent = `You've selected Single Player Mode. Click "Start Game" to begin playing.`;
    inputBox.style.display = "none";    
    modeTextContainer.style.visibility = "visible";

};

const multiplayerMessage = () => {
    gameModeText.textContent = `You've selected Two Player Mode. Type your names then click "Start Game" to begin playing.`;
    inputBox.style.display = "flex";
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
    // Rematch Code
        rematch.style.display = "none";
        // Starting Blocks for player Icons

        roll.style.display = 'block';
        playerTurnText.style.color = "white";
        diceResult.style.visibility = "hidden";
        if (playerTurnText.textContent === `${playerOneName} is the Winner!`) {
            playerTurnText.textContent = playerTwoName + ' starts the next game.'
        } else if (playerTurnText.textContent === `${playerTwoName} is the Winner!`) {
            playerTurnText.textContent = playerOneName + ' starts the next game.';
        }

    if (gameModeText.textContent.includes("Single Player"))  {
        startSinglePlayer();
        playerOneIcon.style.display = "block";
    } else if (gameModeText.textContent.includes("Two Player"))  {
        playerOneName = document.getElementById('player-1-name').value || 'Player 1';
        playerTwoName = document.getElementById('player-2-name').value || 'Player 2';
        startTwoPlayer();
        playerOneIcon.style.display = "block";
        playerTwoIcon.style.display = "block";

    } else {
        gameModeText.textContent = "Please select a game mode to begin playing."
        console.log("No game mode selected");
    }
};

playerTurnText.textContent = `Player 1 starts the game.`;
const startBtn = document.getElementById("start-btn")
startBtn.addEventListener('click', start);

// TODO function to return random color via rgb NOT used in this code yet.
const rbgNum = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

rematch.addEventListener('click', start)

// function to be called with event initialiaation
const rollDice = () => {
    let value = Math.floor(Math.random() * 6 ) + 1;

    const slowPlay = () => {
            roll.style.visibility = 'hidden';

        setTimeout(() => {
            roll.style.visibility = 'visible';
        }, 250 * value);
        
    }
    slowPlay();

    diceResult.style.cssText = `
    visibility: visible;
    color: white;
    `;

    
// switch to track each dice roll and display image with each event
    switch (value) {
    
        case 1 :
        counter.one += 1;
        images.push(`<img class="dice-face" src="${value}.png" alt ="Dice ${value}">`);
        break;

        case 2 :
        counter.two += 1;
        images.push(`<img class="dice-face" src="${value}.png" alt ="Dice ${value}">`);
        break;

        case 3 :
        counter.three += 1;
        images.push(`<img class="dice-face" src="${value}.png" alt ="Dice ${value}">`);
        break;

        case 4 :
        counter.four += 1;
        images.push(`<img class="dice-face" src="${value}.png" alt ="Dice ${value}">`);
        break;

        case 5 :
        counter.five += 1;
        images.push(`<img class="dice-face" src="${value}.png" alt ="Dice ${value}">`);
        break;

        case 6 :
        counter.six += 1;
        images.push(`<img class="dice-face" src="${value}.png" alt ="Dice ${value}">`);
        // TODO ENTER SECOND ROLL HERE
        break;
    }
    
    diceImages.innerHTML = "";

// add the image to the html with each itertion of the event
    const diceFace = document.createElement('img');
    diceFace.src = `${value}.png`;
    diceFace.alt = `Dice ${value}`;
    diceFace.style.cssText = `
    z-index: 0;
    width: 250px;
    height: 250px;
    box-sizing: border-box; 
    border-radius: 36px;`

    diceImages.appendChild(diceFace);
    turnToggle++

    const animateMovement = (playerIcon, startPosition, endPosition, playerName) => {
        const move = (currentPosition) => {

            const ladderCheck = position => {
                if (position === 2) {
                    return 23;
                } else if (position === 6) {
                    return 16;
                } else if (position === 21) {
                    return 29;
                }
                return position;
            }
// move icons
            if (currentPosition < endPosition) {
                document.getElementById(`${currentPosition}`).appendChild(playerIcon);
                setTimeout(() => move(currentPosition + 1), 250);
// after icon moves, check for ladder
            } else {
                endPosition = ladderCheck(endPosition);
                document.getElementById(`${endPosition}`).appendChild(playerIcon);

                const newPosition = ladderCheck(endPosition);

                if (newPosition !== endPosition) {
                    endPosition = newPosition;
                    document.getElementById(`${endPosition}`).appendChild(playerIcon);

                    startPosition = endPosition;
                }
            }
// icon reaches end? Display winner
            if (endPosition >= 36) {
                endPosition = 36;
                playerTurnText.textContent = `${playerName} is the Winner!`
                playerTurnText.style.cssText = `
                color: goldenrod;
                font-weight: bold;
                `;
                roll.style.display = `none`;
                document.getElementById(`${endPosition}`).appendChild(playerIcon);
                rematch.style.display = `block`;

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
            animateMovement(playerTwoIcon, playerTwoPosition, playerTwoPosition+=value, playerTwoName);

            diceResult.textContent = `${playerTwoName} scored ${value}`
            console.log(`${playerTwoName} moves to: ${playerTwoPosition}`)
            playerTurnText.textContent = `${playerOneName}'s turn.`
            body.style.backgroundColor = "hsl(230, 77%, 36%)"

            diceResult.style.color = "hsl(0, 77%, 66%)"

            diceButtonContainer.style.cssText = `
            background-color: hsl(230, 77%, 66%);
            box-shadow: hsl(230, 77%, 66%) 0px 0px 15px;
            `
            diceFace.style.backgroundColor = "hsl(0, 77%, 85%)";

            diceBox.style.cssText = `
            border: 5px solid hsl(0, 77%, 26%);
            background-color: hsl(0, 77%, 66%);
            `

            diceResultContainer.style.cssText = `
            background-color: hsl(230, 77%, 36%);
            `

        } else {
            animateMovement(playerOneIcon, playerOnePosition, playerOnePosition+=value, playerOneName);

            diceResult.textContent = `${playerOneName} scored ${value}`
            console.log(`${playerOneName} moves to: ${playerOnePosition}`)
            playerTurnText.textContent = `${playerTwoName}'s turn.`
            body.style.backgroundColor = "hsl(0, 77%, 26%)"

            diceResult.style.color = "hsl(230, 77%, 76%)"
            
            diceButtonContainer.style.cssText = `
            background-color: hsl(0, 77%, 66%);
            box-shadow: hsl(0, 77%, 66%) 0px 0px 15px;
            `

            diceFace.style.backgroundColor = "hsl(230, 77%, 85%)";

            diceBox.style.cssText = `
            border: 5px solid hsl(230, 77%, 26%);
            background-color: hsl(230, 77%, 66%);
            `


            diceResultContainer.style.cssText = `
            background-color: hsl(0, 77%, 26%);
            `
    
        }
    
        CPUIcon.style.cssText = `
        z-index: 99999;
        display: none;
        `
    }



multiplayerGame()

};

pttHolder.appendChild(playerTurnText);

roll.addEventListener('click', rollDice);






