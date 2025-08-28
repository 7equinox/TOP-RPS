# TOP-RPS (Revisit)

## Write the logic to play the entire game (Enhance)
1) call function [playGame()](#write-the-logic-to-play-the-entire-game-enhance)
2) initialize variables humanScore and computerScore to both 0
3) initialize variables strUserChoice and strCompChoice to both empty string
4) initialize variable strRoundWinner to empty string
5) create a loop which the condition must stop if either the user or the computer reaches 5 points
6) inside of the loop, call function [getHumanChoice()](#write-the-logic-to-get-the-human-choice-enhance) and [getComputerChoice()](#write-the-logic-to-get-the-computer-choice) then set the returned values to variables strUserChoice and strCompChoice respectively
7) inside also of the loop, call function [playRound(strUserChoice, strCompChoice)](#write-the-logic-to-play-a-single-round) and set the returned value to strRoundWinner
9) inside of the loop, increment the intHumanScore or intCompScore if the variable strRoundWinner is set to 'user' (if the user wins the round) or 'computer' (if the computer wins the round)
10) after the game, display the final scores of user and computer
11) if intHumanScore > intCompScore, display the user as the winner at the end; eitherwise the computer.

## Write the logic to get the human choice (Enhance)
1) call function getHumanChoice()
2) initialize variable strUserChoice to empty string
3) initialize variable btnHumanChoices to return a node list of three buttons (rock, paper, & scissors)
4) create a loop which the condition must stop if the user click either of those three buttons
4) inside the loop, for each button listen to what user clicks
5) if a user clicks a button, set the textContent of it to variable strUserChoice as user's input and break that loop
6) return strUserChoice

## Write the logic to get the computer choice
1) call function getComputerChoice()
2) initialize variable strCompChoice to empty string
3) create variable fltRndmNum and set to a random number between 0 & 1 inclusively, multiply by 100
4) if fltRndNum is less than or equal to 33.33, set strCompChoice to "rock"
5) else if fltRndNum is less than or equal to 66.67, set strCompChoice to "paper"
6) otherwise, set strCompChoice to "scissors"
7) return strCompChoice

## Write the logic to play a single round
1) call function playRound() with two arguments: strUserChoice and strCompChoice
2) set strUserChoice to lowercase
3) initialize variable strRoundWinner to empty string
3) if user picks rock and computer picks paper, display "You lose! Paper beats Rock" and set strRoundWinner to "computer"
4) else if user picks rock and computer picks scissors, display "You win! Rock beats Scissors" and set strRoundWinner to "user"
5) else if user picks paper and computer picks rock, display "You win! Paper beats Rock" and set strRoundWinner to "user"
6) else if user picks paper and computer picks scissors, display "You lose! Scissors beats paper" and set strRoundWinner to "computer"
7) else if user picks scissors and computer picks rock, display "You lose! Rock beats Scissors" and set strRoundWinner to "computer"
8) else if user picks scissors and computer picks paper, display "You win! Scissors beats Paper" and set strRoundWinner to "user"
9) otherwise draw, display `Draw! Both choose ${Rock/Paper/Scissors}`
10) return strRoundWinner