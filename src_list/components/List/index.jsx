import React, {Component} from 'react';
import Item from "../Item/index.jsx";
import '../../index.css'

function List(props) {
    return (
        <ul className="todo-main">
            {
                props.list.map((e, index) => (
                    <Item key={e.id || index} {...e} call={props.call} onDel={props.del} />
                ))
            }
        </ul>
    )
}

export default List;