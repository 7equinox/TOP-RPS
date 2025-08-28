// console.log("Hello World");

// Initialize global scope scores
// let intHumanScore = 0;
// let intCompScore = 0;

// Select all buttons from Human RPS Selection
const btnHumanChoices = document.querySelectorAll("button");

// Iterate each button to listen what user choose
btnHumanChoices.forEach((btnChoice) => {
    btnChoice.addEventListener("click", () => {
        console.log(btnChoice.textContent);
    });
});

// Function to play computer's choice
function getComputerChoice()
{
    let strCompChoice = "";

    // Create random number for the condition/s below
    const fltRndmNum = Math.random() * 100;

    // Check the float number for testing the function
    // console.log(fltRndmNum);

    // if between 0 to 33.33, play "rock"
    if (fltRndmNum <= 33.33)
    {
        strCompChoice = "rock";
    }

    // if between 33.34 to 66.67, play "paper"
    else if (fltRndmNum <= 66.67)
    {
        strCompChoice = "paper";
    }

    // if between 66.68 to 100, play "scissors"
    else
    {
        strCompChoice = "scissors";
    }

    return strCompChoice;
}

// test getComputerChoice()'s return
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());


// Function to prompt user's choice
function getHumanChoice()
{
    let strUserChoice = "";

    strUserChoice = prompt("Enter your choice (rock/paper/scissors): ")

    return strUserChoice;
}

// test getHumanChoice()'s return
// console.log(getHumanChoice());
// console.log(getHumanChoice());
// console.log(getHumanChoice());
// console.log(getHumanChoice());
// console.log(getHumanChoice());


// Function to play a single round of rock-paper-scissors (rps) game
function playRound(strUserChoice, strCompChoice)
{
    // Set user choice to lowercase
    strUserChoice = strUserChoice.toLowerCase();

    // Initialize string round winner to empty
    let strRoundWinner = "";

    /* Conditions to assess single round of rps game */
    if (strUserChoice === 'rock' &&
        strCompChoice === 'paper')
    {
        console.log("You lose! Paper beats Rock");
        strRoundWinner = 'computer';
    }

    else if (strUserChoice === 'rock' &&
        strCompChoice === 'scissors')
    {
        console.log("You win! Rock beats Scissors");
        strRoundWinner = 'user';
    }

    else if (strUserChoice === 'paper' &&
        strCompChoice === 'rock')
    {
        console.log("You win! Paper beats Rock");
        strRoundWinner = 'user';
    }

    else if (strUserChoice === 'paper' &&
        strCompChoice === 'scissors')
    {
        console.log("You lose! Scissors beats Paper");
        strRoundWinner = 'computer';
    }

    else if (strUserChoice === 'scissors' &&
        strCompChoice === 'rock')
    {
        console.log("You lose! Rock beats Scissors");
        strRoundWinner = 'computer';
    }

    else if (strUserChoice === 'scissors' &&
        strCompChoice === 'paper')
    {
        console.log("You win! Scissors beats Paper");
        strRoundWinner = 'user';
    }

    else
    {
        // Capitalize choice
        const strBothChoice = strUserChoice.charAt(0).toUpperCase() 
                            + strUserChoice.slice(1);

        console.log(`Draw! Both choose ${strBothChoice}`);
        strRoundWinner = '';
    }

    return strRoundWinner;
}

// Initialize variables to their choices
// const strUserChoice = getHumanChoice();
// const strCompChoice = getComputerChoice();

// Start to play a single RPS round
// playRound(strUserChoice, strCompChoice);


// Function to play the entire RPS game 5 times
function playGame()
{
    // Initialize user and computer scores to 0
    let intHumanScore = 0;
    let intCompScore = 0;

    // Initialize user and computer choices to empty string
    let strUserChoice = "";
    let strCompChoice = "";

    // Start to play a single RPS round
    // playRound(strUserChoice, strCompChoice);

    // Initialize string round winner to empty
    let strRoundWinner = "";

    // for (let intRoundsLeft = 5; intRoundsLeft > 0; intRoundsLeft--)
    // {
    //     console.log(`[INFO] ${intRoundsLeft} round/s left.`)

    //     // Get the user and computer choice
    //     strUserChoice = getHumanChoice();
    //     strCompChoice = getComputerChoice();

    //     // Play a single RPS round and return the winner
    //     strRoundWinner = playRound(strUserChoice, strCompChoice);

    //     // If user wins the round, increment user's score
    //     if (strRoundWinner === 'user')
    //     {
    //         intHumanScore++;
    //     }

    //     // If computer wins the round, increment computer's score
    //     else if (strRoundWinner === 'computer')
    //     {   
    //         intCompScore++;
    //     }
    // }

    // Display the final scores
    console.log("[INFO] FINAL SCORES");
    console.log(`[INFO] User: ${intHumanScore}`);
    console.log(`[INFO] Computer: ${intCompScore}`);

    // If user has higher score than computer, declare user as winner
    if (intHumanScore > intCompScore)
    {
        console.log("User is the winner of Rock-Paper-Scissors Game. Congrats!");
    }

    // If computer has higher score, declare computer as winner
    else if (intHumanScore < intCompScore)
    {
        console.log("Computer is the winner of Rock-Paper-Scissors Game. Better luck next time!");
    }

    // Otherwise, declare tie
    else
    {
        console.log("Tie. What a game!")
    }
}

// Start the RPS game
playGame();