// console.log("Hello World");

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