# TOP-RPS

## Write the logic to get the computer choice
1) call function getComputerChoice()
2) initialize variable strCompChoice to empty string
3) create variable fltRndmNum and set to a random number between 0 & 1, multiply by 100
4) if fltRndNum is less than or equal to 33.33, set strCompChoice to "rock"
5) else if fltRndNum is less than or equal to 66.67, set strCompChoice to "paper"
6) otherwise, set strCompChoice to "scissors"
7) return strCompChoice

## Write the logic to get the human choice
1) call function getHumanChoice()
2) initialize variable strUserChoice to empty string
3) prompt user to enter his/her valid choice and set strUserChoice to user's input
4) return strUserChoice

## Declare the players score variables
1) initialize variables humanScore and computerScore to both 0.

## Write the logic to play a single round
1) initialize variables strUserChoice and strCompChoice globally and set to call function getHumanChoice() and getComputerChoice() respectively
2) call function playRound() with two arguments: strUserChoice and strCompChoice
3) set strUserChoice to lowercase
4) if user picks rock and computer picks paper, display "You lose! Paper beats Rock" and increment intCompScore.
5) else if user picks rock and computer picks scissors, display "You win! Rock beats Scissors" and increment intHumanScore.
6) else if user picks paper and computer picks rock, display "You win! Paper beats Rock" and increment intHumanScore.
7) else if user picks paper and computer picks scissors, display "You lose! Scissors beats paper" and increment intCompScore.
8) else if user picks scissors and computer picks rock, display "You lose! Rock beats Scissors" and increment intCompScore.
9) else if user picks scissors and computer picks paper, display "You win! Scissors beats Paper" and increment intHumanScore.
10) otherwise draw, display `Draw! Both choose ${Rock/Paper/Scissors}`.

## Write the logic to play the entire game
1) create function playGame() and initialize to empty body
2) call function playGame()
3) move score variables, user and computer choice variables, and function playRound() to function playGame()
4) initialize score variables to 0 outside of the loop
5) initialize variables strUserChoice and strCompChoice to both empty string outside of the loop
6) initialize variable strRoundWinner to empty string
7) create a loop 5 times
8) inside of the loop, call function getHumanChoice() and getComputerChoice() then set the returned values to variables strUserChoice and strCompChoice respectively.
9) inside also of the loop, call function playRound() and set the returned value to strRoundWinner
10) inside of the function playRound(), initialize a new variable strRoundWinner to empty string before assessing the round of the gmae
11) inside of the function playRound(), change incrementation of intHumanScore and intCompScore to assigning the variable strRoundWinner to 'user' (if the user wins the round) or 'computer' (if the computer wins the round)
12) inside of the function playRound(), return variable strRoundWinner
13) inside of the loop of function playGame(), if strRoundWinner strictly equals to 'user', increment intHumanScore.
14) otherwise, increment intCompScore.
15) after 5 loops, display the final scores of user and computer
16) also, display the winner at the end.