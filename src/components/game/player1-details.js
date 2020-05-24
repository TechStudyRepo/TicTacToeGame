import React from 'react';

function Player1Details(props) {
    return (
        <div>
            {
                props.winGameStep === 'RDAW' ?
                    null
                    :
                    props.winState === null ?
                        props.trun ?
                            <div className="player1-turn-text" style={{left: '13.5%' }}> Your Turn </div>
                            :
                            null
                        :
                        props.winState === 'DRAW' ?
                            <div className="player1-turn-text" style={{ color: '#ffffff', left: '14.5%' }} > DRAW </div>
                            :
                            props.winState === 'WINNER' ?
                                <div className="player1-turn-text" style={{left: '13.5%' }}> WINNER </div>
                                :
                                null
            }

            <div className="player1-stat"
                style={(props.winState === 'WINNER' || props.winState === 'DRAW') ? { border: '2px solid #fb9e01' } : null}>
                <div className="player-head">
                    PLAYER 1
                </div>
                <div className="player-name">
                    {props.user}
                </div>
                <div className="player-symbol">
                    X
            </div>
            </div>
            <div className="player1-win-count">
                <span className={props.winCount > 0 ? "win-count-on" : "win-count-off"}>&#8226;</span>
                <span className={props.winCount > 1 ? "win-count-on" : "win-count-off"}>&#8226;</span>
                <span className={props.winCount > 2 ? "win-count-on" : "win-count-off"}>&#8226;</span>
                <span className={props.winCount > 3 ? "win-count-on" : "win-count-off"}>&#8226;</span>
                <span className={props.winCount > 4 ? "win-count-on" : "win-count-off"}>&#8226;</span>
                <span className={props.winCount > 5 ? "win-count-on" : "win-count-off"}>&#8226;</span>
            </div>
        </div >
    )
}

export default Player1Details;