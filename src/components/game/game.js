import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

// custom component
import Player1Details from './player1-details';
import Player2Details from './player2-details';
import Board from '../board/bord';

// import actions
import { setResult } from '../../actions/result/result-action';

// css
import '../../css/game.css'

function Game() {
    const user = useSelector((state) => state.registerUser.user),
        dispatch = useDispatch(),
        history = useHistory(),
        [boardMatrix, setMetrix] = useState(Array(9).fill(null)),
        [isXNext, setNext] = useState(true),
        [gameCount, setGameCount] = useState(0),
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
            if (winner || squares[i] !== null || gameCount === null) {
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

    // check if there is a winner with best of 6 (maxGameCount)
    if (gameCount === maxGameCount) {
        if (player1winCount === player2winCount) {
            // navigate 
            setGameStepWinState('');
            setPlayer1WinState("DRAW");
            setPlayer2WinState("DRAW");
            setNext(true);
            setGameCount(null);
        }
        else if (player1winCount > player2winCount) {
            setPlayer1WinState("WINNER");
            setNext(true);
            setGameCount(null);
            // navigate to Winner Page
            setTimeout(() => {
                dispatch(setResult(history, 'player 1'));
            }, 2000);
        }
        else if (player2winCount > player1winCount) {
            setPlayer2WinState("WINNER");
            setNext(true);
            setGameCount(null);
            // navigate to Winner Page
            setTimeout(() => {
                dispatch(setResult(history, 'player 2'));
            }, 2000);
        }
    }
    // freez the game 
    else if (gameCount === null) {

    }
    else if (gameStepWinState === null) {
        const squares = boardMatrix.slice(),
            winnerResult = calculateWinner(squares),
            { winner, matchedMatrix } = winnerResult === null ? { winner: null, matchedMatrix: null } : winnerResult;

        if (winner === null) {
            const result = squares.some(el => el === null);
            // Draw case
            if (!result) {
                setGameCount(gameCount + 1);
                setGameStepWinState('DRAW');
                setGameStepWinMatrix(null);
                if ((gameCount + 1) !== maxGameCount) {
                    setTimeout(() => {
                        clearGame();
                    }, 3000);
                }
            }
        }
        else if (winner !== null) {
            // Player 1 - win case
            if (winner === 'X') {
                setGameCount(gameCount + 1)
                setGameStepWinState(winner);
                setGameStepWinMatrix(matchedMatrix);
                setPlayer1WinCount(player1winCount + 1);
                if ((gameCount + 1) !== maxGameCount) {
                    setTimeout(() => {
                        clearGame();
                    }, 3000);
                }
            }
            // player 2 win case
            else if (winner === 'O') {
                setGameCount(gameCount + 1)
                setGameStepWinState(winner);
                setGameStepWinMatrix(matchedMatrix);
                setPlayer2WinCount(player2winCount + 1);
                if ((gameCount + 1) !== maxGameCount) {
                    setTimeout(() => {
                        clearGame();
                    }, 3000);
                }
            }
        }
    }

    return (
        <div className="game">
            <Player1Details user={user.user1}
                trun={isXNext}
                winCount={player1winCount}
                winState={player1WinState}
                winGameStep={gameStepWinState}>
            </Player1Details>
            <Board onClick={(i) => handleClick(i)}
                squres={boardMatrix}
                gameCount={gameCount}
                winStateP1={player1WinState}
                winStateP2={player2WinState}
                winGameStep={gameStepWinState}
                gameStepWinMatrix={gameStepWinMatrix}>
            </Board>
            <Player2Details user={user.user2}
                trun={isXNext}
                winCount={player2winCount}
                winState={player2WinState}
                winGameStep={gameStepWinState}>
            </Player2Details>
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