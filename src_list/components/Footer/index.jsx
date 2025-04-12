import React, {Component} from 'react';
import '../../index.css'

function Footer(props) {
    const {todos, checkAllTodo, clearAllDone} = props
    const done = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)

    return (
        <div className="todo-footer">
            <label>
                {/*注意不能使用defaultChecked,这个只能在初始化的时候执行一次，并且如果使用checkede就必须添加onChange*/}
                <input type="checkbox" onChange={() => checkAllTodo()}
                       checked={done === todos.length && todos.length !== 0}/>
            </label>
            <span>
                <span>已完成{done}</span> / 全部{todos.length}
                </span>
            <button onClick={() => clearAllDone()} className="btn btn-danger">清除已完成任务
            </button>
        </div>
    )
}

export default Footer;