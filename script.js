// console.log("Hello World");

// Initialize global scope scores
let intHumanScore = 0;
let intCompScore = 0;

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

    /* Conditions to assess single round of rps game */
    if (strUserChoice === 'rock' &&
        strCompChoice === 'paper')
    {
        console.log("You lose! Paper beats Rock");
        intCompScore++;
    }

    else if (strUserChoice === 'rock' &&
        strCompChoice === 'scissors')
    {
        console.log("You win! Rock beats Scissors");
        intHumanScore++;
    }

    else if (strUserChoice === 'paper' &&
        strCompChoice === 'rock')
    {
        console.log("You win! Paper beats Rock");
        intHumanScore++;
    }

    else if (strUserChoice === 'paper' &&
        strCompChoice === 'scissors')
    {
        console.log("You lose! Scissors beats Paper");
        intCompScore++;
    }

    else if (strUserChoice === 'scissors' &&
        strCompChoice === 'rock')
    {
        console.log("You lose! Rock beats Scissors");
        intCompScore++;
    }

    else if (strUserChoice === 'scissors' &&
        strCompChoice === 'paper')
    {
        console.log("You win! Scissors beats Paper");
        intHumanScore++;
    }

    else
    {
        // Capitalize choice
        const strBothChoice = strUserChoice.charAt(0).toUppercase + strUserChoice.slice(1);

        console.log(`Draw! Both choose ${strBothChoice}`);
    }
}

// Initialize variables to their choices
const strUserChoice = getHumanChoice();
const strCompChoice = getComputerChoice();

playRound(strUserChoice, strCompChoice);