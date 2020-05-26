import React, { useState } from 'react';
import { Button, Input } from 'reactstrap';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

// Actions
import { addUser } from '../../actions/user/user-action';

// css
import '../../css/user.css';

function UserForm() {
    const dispatch = useDispatch(),
        history = useHistory(),
        [player1, setPlayer1Value] = useState(''),
        [player2, setPlayer2Value] = useState(''),

        handleSubmit = e => {
            e.preventDefault();
            dispatch(addUser(history, player1, player2))
        }

    return (
        <div className="user-form">
            <form onSubmit={handleSubmit}>
                <div className="header-text">
                    Welcome to <span>TIC TAC TOE</span>
                </div>
                <div className="form-group">
                    <div>PLAYER 1</div>
                    <Input className="form-control"
                        name="player1"
                        id="p1"
                        placeholder="Player 1"
                        onChange={e => setPlayer1Value(e.target.value)} ></Input>
                </div>
                <div className="form-group">
                    <div>PLAYER 2</div>
                    <Input className="form-control"
                        name="player2"
                        id="p2"
                        placeholder="Player 2"
                        onChange={e => setPlayer2Value(e.target.value)}></Input>
                </div>

                <div className="form-group">
                    <Button className="btn btn-style btn-secondary btn-lg btn-block"
                        disabled={player1 === '' || player2 === ''}>
                        Continue</Button>
                </div>
            </form>
        </div >
    )
}

export default UserForm;