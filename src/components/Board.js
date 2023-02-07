import React, { Component } from 'react'
import Square from './Square'
import "./Board.css"

export default class Board extends Component {
    // 각 스퀘어마다 다른 valeu 주기 위해서 state 설정
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        }
    }
    
    // 기존 state를 바꾸지 않고, 새로운 배열을 만들어서 보냄(불변성 유지)

    handleClick (i){
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares})
    }


    renderSquare(i) {
        // 자녀 컴포넌트에 데이터 내려주기
        return <Square 
                value={this.state.squares[i]} 
                onClick={() => this.handleClick(i)}/>
    }
    // props를 통해 컴포넌트 간 데이터 전달하기
    // 1. props는 properties의 줄임말
    // 2. props는 상속하는 부모 컴포넌트로부터 자녀 컴포넌트에 데이터 등을 전달하는 방법
    // 3. props는 읽기 전용으로 자녀 컴포넌트 입장에서는 변하지 않고,
    // 변하게 하고자 하면 부모 컴포넌트에서 state를 변경시켜줘야한다.

    render() {
        return (
            <div>
                <div className='status'>Next Player: X, O</div>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

            </div>
        )
    }
}
