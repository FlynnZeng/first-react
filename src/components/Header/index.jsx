import React from 'react';
import '../../index.css';
import { nanoid } from 'nanoid';

function Header(props) {
    const handleKeyUp = (event) => {
        const { keyCode, target } = event;
        if (keyCode !== 13) return;

        const title = target.value.trim();
        if (!title) {
            alert("输入不能为空！");
            return;
        }

        const todo = {
            id: nanoid(),
            title,
            done: false
        };

        props.call(todo);       // 直接使用 props.call
        target.value = '';      // 清空输入框
    };

    return (
        <div className="todo-header">
            <input onKeyUp={handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
        </div>
    );
}

export default Header;
