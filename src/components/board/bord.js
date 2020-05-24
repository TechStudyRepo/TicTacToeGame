import React from 'react';


// import custom components
import Square from './Square';

//import css
import "../../css/board.css";

function Board(props) {    
    const winner = props.winStateP1 === 'WINNER' ? 'X' : props.winStateP2 === 'WINNER' ? 'O' : null,
        winnerGameStep = props.winGameStep,
        renderSquare = (i) => {
            return <Square
                idx={i}
                value={props.squres[i]}
                onClick={() => props.onClick(i)}
                winner={winner}
                winnerGameStep={winnerGameStep}
                gameStepWinMatrix={props.gameStepWinMatrix}>
            </Square >
        }

    return (
        <div className="square-matrix">
            <div className="square-bord">
                <div className="row">
                    <div className="col-sm-4">
                        {renderSquare(0)}
                    </div>
                    <div className="col-sm-4">
                        {renderSquare(1)}
                    </div>
                    <div className="col-sm-4">
                        {renderSquare(2)}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        {renderSquare(3)}
                    </div>
                    <div className="col-sm-4">
                        {renderSquare(4)}
                    </div>
                    <div className="col-sm-4">
                        {renderSquare(5)}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        {renderSquare(6)}
                    </div>
                    <div className="col-sm-4">
                        {renderSquare(7)}
                    </div>
                    <div className="col-sm-4">
                        {renderSquare(8)}
                    </div>
                </div>
            </div>
            <div className="game-count-panel">
                <span className={props.gameCount > 0 || props.gameCount === null ? "win-count-on" : "win-count-off"}>&#8226;</span>
                <span className={props.gameCount > 1 || props.gameCount === null ? "win-count-on" : "win-count-off"}>&#8226;</span>
                <span className={props.gameCount > 2 || props.gameCount === null ? "win-count-on" : "win-count-off"}>&#8226;</span>
                <span className={props.gameCount > 3 || props.gameCount === null ? "win-count-on" : "win-count-off"}>&#8226;</span>
                <span className={props.gameCount > 4 || props.gameCount === null ? "win-count-on" : "win-count-off"}>&#8226;</span>
                <span className={props.gameCount > 5 || props.gameCount === null ? "win-count-on" : "win-count-off"}>&#8226;</span>
            </div>
        </div>
    )
}

export default Board;
