import React, {useState } from 'react'
import Square from './Square'
import "./Board.css"

const Board = () =>{
    // 각 스퀘어마다 다른 valeu 주기 위해서 state 설정
    const [squares, setSquares] = useState(Array(9).fill(null))
    // X O 반전을 위한 state
    const [isNext, setIsNext] = useState(true)
    // 승리 조건
    const calculatewinner = (squares) => {
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let i = 0; i<lines.length; i++){
            const [a,b,c] = lines[i]
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a]
            }
        }
        return null;
    }
    // 승자 표시
    const winner = calculatewinner(squares);
    let status;
    if(winner){
        status = 'Winner :' + winner
    }else{
        status = `Next Player : ${isNext ? "X" : "0"}`
    }
    
    
    // 기존 state를 바꾸지 않고, 새로운 배열을 만들어서 보냄(불변성 유지)

    const handleClick = (i) => {
        const newSquares = squares.slice();
        // 승자가 있거나 x나o가 있다면 클릭되지않게
        if(calculatewinner(newSquares) || newSquares[i]){
            return ;
        }


        // true 일때 x, false일때 o
        newSquares[i] = isNext ? "X" : 'O';
        setSquares(newSquares)
        setIsNext(current => !current)
        
    }


    const renderSquare = (i) => {
        // 자녀 컴포넌트에 데이터 내려주기
        return <Square 
                value={squares[i]} 
                onClick={() =>handleClick(i)}/>
    }

    // props를 통해 컴포넌트 간 데이터 전달하기
    // 1. props는 properties의 줄임말
    // 2. props는 상속하는 부모 컴포넌트로부터 자녀 컴포넌트에 데이터 등을 전달하는 방법
    // 3. props는 읽기 전용으로 자녀 컴포넌트 입장에서는 변하지 않고,
    // 변하게 하고자 하면 부모 컴포넌트에서 state를 변경시켜줘야한다.

    
        return (
            <div>
                <div className='status'>{status}</div>
                <div className='board-row'>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className='board-row'>
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className='board-row'>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>

            </div>
        )
    
}


export default Board;