import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//三个react组件 Square，Board，Game

//Square组件渲染了9个方块
class Square extends React.Component {
    //state 实现记忆功能 this.state视为组件的私有属性 在 this.state 中存储当前每个方格（Square）的值，并且在每次方格被点击的时候改变这个值。

    render() {
        return (
            //给组件添加交互功能
            //减少输入代码，避免this造成的困扰，使用箭头函数
            <button className="square" onClick={() => this.props.onClick({ value: 'X' })}>
                {this.props.value}
            </button >
        )
    }
}

//在Board组件renderSquare方法中，传递一个名为value的prop带Square中
class Board extends React.Component {
    //添加构造函数
    constructor(props) {
        super(props);
        this.state = {
            //初始状态：设置成长度为9的空值数组[null,... null, null]
            squares: Array(9).fill(null),
        }
    }

    handleClick(i) {
        //slice 原数组的浅拷贝
        const squares = this.state.squares.slice();//原始数组的样子
        // console.log('squares', squares);
        squares[i] = 'X';
        this.setState({ squares: squares })
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
    }

    render() {
        const status = "Next player: X";
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <span>啦啦啦，我是写死的数据</span>
                </div>
            </div>
        )
    }
}

// 在页面上渲染数据
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />)

