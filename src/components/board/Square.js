import React from 'react'

export default function Square(props) {    
    const matrix = props.gameStepWinMatrix === null ? [] : props.gameStepWinMatrix,
        id = props.idx;
    return (
        <button className="square"
            onClick={props.onClick}
            style={id === 0 ? { borderTopLeftRadius: '25px' }
                : id === 2 ? { borderTopRightRadius: '25px' }
                    : id === 6 ? { borderBottomLeftRadius: '25px' }
                        : id === 8 ? { borderBottomRightRadius: '25px' }
                            : null}>
            {
                (props.winner === 'X' || props.winnerGameStep === 'X') && props.value === 'X' &&
                    (id === matrix[0] || id === matrix[1] || id === matrix[2]) ?
                    <span style={{ color: '#fb9e01' }}>{props.value} </span>
                    :
                    (props.winner === 'O' || props.winnerGameStep === 'O') && props.value === 'O' &&
                        (id === matrix[0] || id === matrix[1] || id === matrix[2]) ?
                        <span style={{ color: '#fb9e01' }}>{props.value} </span>
                        :
                        <span >{props.value} </span>
            }

        </button>
    )
}
