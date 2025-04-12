import React, {Component, useState} from 'react';
import '../../index.css'

function Item(props) {
    const { id, title, done, call, onDel } = props
    const [mouse, setMouse] = useState(false)

    // 鼠标移入
    function handleMouseEnter() {
        setMouse(true);
    }

    // 鼠标移出
    function handleMouseLeave() {
        setMouse(false);
    }

    return (
        <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
            <label>
                <input type="checkbox" onChange={()=>{ call(id, !done) }} checked={done}/>
                <span>{ title }</span>
            </label>
            <button onClick={() => onDel(id)} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
        </li>
    )
}

export default Item;