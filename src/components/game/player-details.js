import React from 'react';

import { useSelector } from 'react-redux';

// constants
import { CONSTANTS } from '../../constants/appConstants';

function PlayerDetails(props) {
    const user = useSelector((state) => state.registerUser.user),
        player = props.player,
        winCountArray = [0, 1, 2, 3, 4, 5];

    return (
        <div>
            {
                props.winGameStep === CONSTANTS.DRAW ?
                    null
                    :
                    props.winState === null ?
                        props.trun ?
                            <div className="player1-turn-text" style={{ left: '13.5%' }}> Your Turn </div>
                            :
                            <div className="player2-turn-text"> Your Turn </div>
                        :
                        props.winState === CONSTANTS.DRAW ?
                            <div className={player === CONSTANTS.X ? "player1-turn-text" : "player2-turn-text"}
                                style={player === CONSTANTS.X ? { color: '#ffffff', left: '14.5%' }
                                    : { color: '#ffffff' }} > DRAW </div>
                            :
                            props.winState === CONSTANTS.WINNER ?
                                <div className={player === CONSTANTS.X ? "player1-turn-text" : "player2-turn-text"}
                                    style={player === CONSTANTS.X ? { left: '13.5%' } : null}> WINNER </div>
                                :
                                null
            }
            <div className={player === CONSTANTS.X ? "player1-stat" : "player2-stat"}
                style={(props.winState === CONSTANTS.WINNER || props.winState === CONSTANTS.DRAW) ?
                    { border: '2px solid #fb9e01' } : null}>
                <div className="player-head">
                    PLAYER 1
                </div>
                <div className="player-name">
                    {
                        player === CONSTANTS.X ?
                            user.user1
                            :
                            user.user2
                    }
                </div>
                <div className="player-symbol">
                    {
                        player === CONSTANTS.X ?
                            <span>X</span>
                            :
                            <span>O</span>
                    }
                </div>
            </div>
            <div className={player === CONSTANTS.X ? "player1-win-count" : "player2-win-count"}>
                {
                    winCountArray.map((i) => {
                        return <span key={i} className={props.winCount > i ? "win-count-on" : "win-count-off"}>&#8226;</span>
                    })

                }
            </div>
        </div >
    )
};

export default PlayerDetails;