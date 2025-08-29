// Initialize global scope scores
let gIntHumanScore = 0;
let gIntCompScore = 0;

// Function to display the running score
function displayRpsScore()
{
    // TODO: Create logic to manipulate DOM for HTML

    console.log(`[DISPLAY] User ${gIntHumanScore} | ${gIntCompScore} Computer`);
}

// Display initial scores of both players
displayRpsScore();

// Select all buttons from Human RPS Selection
const btnHumanChoices = document.querySelectorAll('button');

// Function to display the winner once a player reaches 5 points
function displayGameWinner()
{
    // TODO: Create logic to manipulate DOM for HTML

    if (gIntHumanScore === 5)
    {
        console.log("[DISPLAY] User is the winner of Rock-Paper-Scissors Game. Congrats!");
    }
    else
    {
        console.log("[DISPLAY] Computer is the winner of Rock-Paper-Scissors Game. Better luck next time!");
    }  
}

// Function to play computer's choice
function getComputerChoice()
{
    // Create random number for the condition/s below
    const fltRndmNum = Math.random() * 100;

    if (fltRndmNum <= 33.33) return 'Rock';
    if (fltRndmNum <= 66.67) return 'Paper';
    return 'Scissors';
}

// Function to get the result of a single RPS round
function getRoundResult(strUserChoice, strCompChoice)
{
    if (strUserChoice === 'Rock' &&
        strCompChoice === 'Paper')
        return 'computer';

    if (strUserChoice === 'Rock' &&
        strCompChoice === 'Scissors')
        return 'user';

    if (strUserChoice === 'Paper' &&
        strCompChoice === 'Rock')
        return 'user';

    if (strUserChoice === 'Paper' &&
        strCompChoice === 'Scissors')
        return 'computer';

    if (strUserChoice === 'Scissors' &&
        strCompChoice === 'Rock')
        return 'computer';

    if (strUserChoice === 'Scissors' &&
        strCompChoice === 'Paper')
        return 'user';

    // if both players choose same pick
    return 'draw';
}

// Function to display the result of a single RPS round
function displayRoundResult(strRoundWinner, strUserChoice, strCompChoice)
{
    // TODO: Create logic to manipulate DOM for HTML
    
    if (strRoundWinner === 'draw')
    {
        console.log(`[DISPLAY] Draw! Both choose ${strUserChoice}`);
    }

    else if (strRoundWinner === 'user')
    {
        console.log(`[DISPLAY] You win! ${strUserChoice} beats ${strCompChoice}`);
    }

    else
    {
        console.log(`[DISPLAY] You lose! ${strCompChoice} beats ${strUserChoice}`);
    }
}

// Function to increment winner score
function incrementPlayerScore(strRoundWinner)
{
    (strRoundWinner === 'user')?
        gIntHumanScore++:
        gIntCompScore++;
}

// Function to play the single RPS round
function playRound(strUserChoice)
{
    const strCompChoice = getComputerChoice();
    const strRoundWinner = getRoundResult(strUserChoice, strCompChoice);
    displayRoundResult(strRoundWinner, strUserChoice, strCompChoice);
    if (strRoundWinner !== 'draw') incrementPlayerScore(strRoundWinner);
    displayRpsScore();
}

// Iterate each button to listen what user choose
btnHumanChoices.forEach((btnChoice) => {
    // Disable buttons if the game is not active
    function checkGameOver()
    {
        // Game is active only if BOTH scores are less than 5
        if (gIntHumanScore >= 5 || gIntCompScore >= 5)
        {
            btnHumanChoices.forEach((btnChoice) => {
                btnChoice.removeEventListener("click", handleHumanChoice);
                btnChoice.setAttribute("disabled", "true");
            });

            displayGameWinner();
        }
    }

    // Function to get the human choice and play single round
    function handleHumanChoice()
    {
        const strUserChoice = btnChoice.textContent;
        console.log(`[CONSOLE] You pick "${strUserChoice}"`);
        playRound(strUserChoice);
        checkGameOver();
    }

    btnChoice.addEventListener("click", handleHumanChoice);

    checkGameOver();
});

// Function to prompt user's choice
function getHumanChoice()
{
    let strUserChoice = "";

    strUserChoice = prompt("Enter your choice (rock/paper/scissors): ")

    return strUserChoice;
}