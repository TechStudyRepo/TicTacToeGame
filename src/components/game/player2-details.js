import React from 'react';

function Player2Details(props) {    
    return (
        <div>
            {
                props.winGameStep === 'DRAW' ?
                    null
                    :
                    props.winState === null ?
                        props.trun ?
                            null
                            :
                            <div className="player2-turn-text"> Your Turn </div>
                        :
                        props.winState === 'DRAW' ?
                            <div className="player2-turn-text" style={{ color: '#ffffff' }} > DRAW </div>
                            :
                            props.winState === 'WINNER' ?
                                <div className="player2-turn-text"> WINNER </div>
                                :
                                null
            }
            <div className="player2-stat"
                style={(props.winState === 'WINNER' || props.winState === 'DRAW') ? { border: '2px solid #fb9e01' } : null}>
                <div className="player-head">
                    PLAYER 2
                </div>
                <div className="player-name">
                    {props.user}
                </div>
                <div className="player-symbol">
                    O
                </div>
            </div>
            <div className="player2-win-count">
                <span className={props.winCount > 0 ? "win-count-on" : "win-count-off"}>&#8226;</span>
                <span className={props.winCount > 1 ? "win-count-on" : "win-count-off"}>&#8226;</span>
                <span className={props.winCount > 2 ? "win-count-on" : "win-count-off"}>&#8226;</span>
                <span className={props.winCount > 3 ? "win-count-on" : "win-count-off"}>&#8226;</span>
                <span className={props.winCount > 4 ? "win-count-on" : "win-count-off"}>&#8226;</span>
                <span className={props.winCount > 5 ? "win-count-on" : "win-count-off"}>&#8226;</span>
            </div>
        </div>
    )
}

export default Player2Details;