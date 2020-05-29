import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

// custom component
import PlayerDetails from './player-details';
import Board from '../board/board';

// constants
import { CONSTANTS } from '../../constants/appConstants';

// import actions
import { setResult } from '../../actions/result/result-action';

// css
import '../../css/game.css'

function Game() {
    const dispatch = useDispatch(),
        history = useHistory(),
        [boardMatrix, setMetrix] = useState(Array(9).fill(null)),
        [isXNext, setNext] = useState(true),
        [player1winCount, setPlayer1WinCount] = useState(0),
        [player2winCount, setPlayer2WinCount] = useState(0),
        [player1WinState, setPlayer1WinState] = useState(null),
        [player2WinState, setPlayer2WinState] = useState(null),
        [gameStepWinState, setGameStepWinState] = useState(null),
        [gameStepWinMatrix, setGameStepWinMatrix] = useState(null),
        maxGameCount = 6,

        handleClick = (i) => {
            const squares = boardMatrix.slice(),
                winnerResult = calculateWinner(squares),
                { winner } = winnerResult === null ? { winner: null } : winnerResult;
            // chek for not rep 
            if (winner || squares[i] !== null) {
                return
            }
            squares[i] = isXNext ? 'X' : 'O';
            setMetrix(squares);
            setNext(!isXNext);
        },

        clearGame = () => {
            setMetrix(Array(9).fill(null));
            setNext(true);
            setGameStepWinState(null)
        }

    // runs on every update of Game - step
    useEffect(() => {
        // check if there is a winner with best of 6 
        if ((player1winCount !== 0 || player2winCount !== 0) &&
            (player1winCount === maxGameCount || player2winCount === maxGameCount)) {

            if (player1winCount === player2winCount) {
                // navigate 
                setGameStepWinState('');
                setPlayer1WinState(CONSTANTS.DRAW);
                setPlayer2WinState(CONSTANTS.DRAW);
                setNext('');
            }
            else if (player1winCount > player2winCount) {
                setPlayer1WinState(CONSTANTS.WINNER);
                setNext('');
                // navigate to Winner Page
                setTimeout(() => {
                    dispatch(setResult(history, CONSTANTS.X));
                }, 2000);
            }
            else if (player2winCount > player1winCount) {
                setPlayer2WinState(CONSTANTS.WINNER);
                setNext('');
                // navigate to Winner Page
                setTimeout(() => {
                    dispatch(setResult(history, CONSTANTS.O));
                }, 2000);
            }
        }
        // Freez the game
        else if ((player1winCount !== 0 || player2winCount !== 0) &&
            (player1winCount === maxGameCount || player2winCount === maxGameCount)) {

        }
        else if (gameStepWinState === null) {
            const squares = boardMatrix.slice(),
                winnerResult = calculateWinner(squares),
                { winner, matchedMatrix } = winnerResult === null ? { winner: null, matchedMatrix: null } : winnerResult;

            if (winner === null) {
                const result = squares.some(el => el === null);
                // Draw case
                if (!result) {
                    setGameStepWinState(CONSTANTS.DRAW);
                    setGameStepWinMatrix(null);
                    if ((player2winCount + 1) || (player2winCount + 1) !== maxGameCount) {
                        setTimeout(() => {
                            clearGame();
                        }, 3000);
                    }
                }
            }
            else if (winner !== null) {
                // Player 1 - win case
                if (winner === CONSTANTS.X) {
                    setGameStepWinState(winner);
                    setGameStepWinMatrix(matchedMatrix);
                    setPlayer1WinCount(player1winCount + 1);
                    if ((player1winCount + 1) !== maxGameCount) {
                        setTimeout(() => {
                            clearGame();
                        }, 3000);
                    }
                }
                // player 2 win case
                else if (winner === CONSTANTS.O) {
                    setGameStepWinState(winner);
                    setGameStepWinMatrix(matchedMatrix);
                    setPlayer2WinCount(player2winCount + 1);
                    if ((player2winCount + 1) !== maxGameCount) {
                        setTimeout(() => {
                            clearGame();
                        }, 3000);
                    }
                }
            }
        }
    })

    return (
        <div className="game">
            <PlayerDetails
                player={CONSTANTS.X}
                trun={isXNext}
                winCount={player1winCount}
                winState={player1WinState}
                winGameStep={gameStepWinState}
            />
            <Board onClick={(i) => handleClick(i)}
                squares={boardMatrix}
                winStateP1={player1WinState}
                winStateP2={player2WinState}
                winGameStep={gameStepWinState}
                gameStepWinMatrix={gameStepWinMatrix}>
            </Board>
            <PlayerDetails
                player={CONSTANTS.O}
                trun={isXNext}
                winCount={player2winCount}
                winState={player2WinState}
                winGameStep={gameStepWinState}
            />
        </div >

    )
}

// | 0 | 1 | 2 |
// | 3 | 4 | 5 |
// | 6 | 7 | 8 |

function calculateWinner(squares) {
    let returnObj = {
        winner: '',
        matchedMatrix: []
    }
    const matchMatrix = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < matchMatrix.length; i++) {
        const [el1, el2, el3] = matchMatrix[i];
        if (squares[el1] && squares[el1] === squares[el2] && squares[el2] === squares[el3]) {
            returnObj.winner = squares[el1];
            returnObj.matchedMatrix = matchMatrix[i];
            return returnObj;
        }
    }
    return null;
}

export default Game;