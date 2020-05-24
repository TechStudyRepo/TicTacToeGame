import React from 'react'
import { useSelector } from 'react-redux';

// import css
import "../../css/board.css";
import "../../css/result.css";

export default function Result() {
    const result = useSelector((state) => state.result.player),
        user = useSelector((state) => state.registerUser.user);
        console.log("result", result);
        

    return (
        <div className="square-matrix" style={{ height: "40%", width: "20%", padding: '12px' }}>
            <div className="square-bord" style={{ backgroundColor: '#253952', height: '36vh', borderRadius: '36px' }}>
                <div className="result">
                    <div className="caption">
                        WINNER!
                    </div>
                    <div className="center-box">
                        <div className="player-id">
                            {result.toUpperCase()}
                        </div>
                        <div className="player-name">
                            {
                                result.toUpperCase() === "PLAYER 1" ?
                                    <div>{user.user1}</div>
                                    :
                                    <div>{user.user2}</div>
                            }
                        </div>
                        <div className="symbol">
                            {
                                result.toUpperCase() === "PLAYER 1" ?
                                    <div>X</div>
                                    :
                                    <div>O</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
