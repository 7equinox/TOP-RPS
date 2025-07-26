# TOP-RPS

## Write the logic to get the computer choice
1) call function getComputerChoice()
2) initialize variable strCompChoice to empty string
3) create variable fltRndmNum and set to a random number between 0 & 1, multiply by 100
4.1) if fltRndNum is less than or equal to 33.33, set strCompChoice to "rock"
4.2) else if fltRndNum is less than or equal to 66.67, set strCompChoice to "paper"
4.3) otherwise, set strCompChoice to "scissors"
4.4) return strCompChoice

## Write the logic to get the human choice
1) call function getHumanChoice()
2) initialize variable strUserChoice to empty string
3) prompt user to enter his/her valid choice and set strUserChoice to user's input
4) return strUserChoice