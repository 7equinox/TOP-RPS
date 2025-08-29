# TOP-RPS Pseudocode (Revisit)

## Logic to play Rock Paper Scissors - UI version
1) initialize global variables gIntHumanScore and gIntCompScore to both 0
2) call function [displayRpsScore()](#logic-to-display-the-running-score)
3) initialize global variable gBtnHumanChoices to return a node list of three buttons (rock, paper, & scissors)
4) for each button listen to what user clicks and call function [handleHumanChoice()](#logic-to-get-the-human-choice-and-play-single-round)
5) call function [checkGameOver()](#logic-to-disable-buttons-and-announce-winner-if-the-game-is-over)

## Logic to display the running score
for function displayRpsScore():
1) *display `User ${gIntHumanScore} | ${gIntCompScore} Computer`

## Logic to get the human choice and play single round
for function handleHumanChoice():
1) set text content of chosen button to variable strUserChoice
2) call function [playRound(strUserChoice)](#logic-to-play-a-single-round-enhance)
3) call function [checkGameOver()](#logic-to-disable-buttons-and-announce-winner-if-the-game-is-over)

## Logic to play a single round (Enhance)
for function playRound(strUserChoice):
1) initialize variable strCompChoice to returned value of function call [getComputerChoice()](#logic-to-get-the-computer-choice)
2) initialize variable strRoundWinner to returned value of function call [getRoundResult(strUserChoice, strCompChoice)](#logic-to-get-the-result-of-a-single-round)
3) call function [displayRoundResult(strRoundWinner, strUserChoice, strCompChoice)](#logic-to-display-the-result-of-a-single-round-enhance)
4) if strRoundWinner is not equal to "draw", call function [incrementPlayerScore(strRoundWinner)](#logic-to-increment-player-score-after-a-round)
5) call function [displayRpsScore()](#logic-to-display-the-running-score)

## Logic to get the computer choice
for function getComputerChoice():
1) create variable fltRndmNum and set to a random number between 0 & 1 inclusively, multiply by 100
2) if fltRndNum is less than or equal to 33.33, return string "Rock"
3) else if fltRndNum is less than or equal to 66.67, return string "Paper"
4) otherwise, return string "Scissors"

## Logic to get the result of a single round (Enhance)
for getRoundResult(strUserChoice, strCompChoice):
1) if user picks rock and computer picks paper, return string "computer"
2) else if user picks rock and computer picks scissors, return string "user"
3) else if user picks paper and computer picks rock, return string "user"
4) else if user picks paper and computer picks scissors, return string "computer"
5) else if user picks scissors and computer picks rock, return string "computer"
6) else if user picks scissors and computer picks paper, return string "user"
7) otherwise return string "draw"

## Logic to display the result of a single round (Enhance)
for function displayRoundResult(strRoundWinner, strUserChoice, strCompChoice):
1) if strRoundWinner equals "draw", *display `Draw! Both choose ${strUserChoice}`
2) else if strRoundWinner equals "user", *display `You win! ${strUserChoice} beats ${strCompChoice}`
3) otherwise, *display `You lose! ${strCompChoice} beats ${strUserChoice}`

## Logic to increment player score after a round
for function incrementPlayerScore(strRoundWinner):
1) if the variable strRoundWinner is set to 'user', increment gIntHumanScore
2) otherwise, increment gIntCompScore

## Logic to disable buttons and announce winner if the game is over
for function checkGameOver():
1) if either of player scores is 5 and above, for each button remove event listener of clicking to handle human choice and disable the buttons; and call function [displayGameWinner()](#logic-to-display-the-winner-once-a-player-reaches-5-points)

## Logic to display the winner once a player reaches 5 points
for function displayGameWinner():
1) if gIntHumanScore > gIntCompScore, *display the user as the winner at the end
2) otherwise, *display the computer as the winner at the end

##### NOTE: *display means doing it from JS DOM Manipulation to HTML