import React from 'react';

// import custom components
import Square from './Square';

// constants
import { CONSTANTS } from '../../constants/appConstants';
//import css
import "../../css/board.css";

function Board(props) {
    const winner = props.winStateP1 === CONSTANTS.WINNER ? CONSTANTS.X
        : props.winStateP2 === CONSTANTS.WINNER ? CONSTANTS.O
            : null,
        winnerGameStep = props.winGameStep,
        renderSquare = (i) => {
            return <Square
                idx={i}
                value={props.squares[i]}
                onClick={() => props.onClick(i)}
                winner={winner}
                winnerGameStep={winnerGameStep}
                gameStepWinMatrix={props.gameStepWinMatrix}>
            </Square >
        }

    const content = () => {
        let rowArray = [], columns = [];
        props.squares.forEach((sq, i) => {
            // prepare the array
            columns.push(
                <div key={i} className="col-md-4">
                    {renderSquare(i)}
                </div>
            );
            // after three items add a new row 
            if ((i + 1) % 3 === 0) {
                rowArray.push(<div key={i} className="row">{columns}</div>);
                columns = [];
            }
        });

        return rowArray;
    };

    return (
        <div className="square-matrix">
            <div className="square-bord">
                {content()}
            </div>
        </div>
    )
}

export default Board;
