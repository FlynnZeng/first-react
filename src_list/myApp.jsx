import Header from "./components/Header/index.jsx";
import List from "./components/List/index.jsx";
import Footer from "./components/Footer/index.jsx";
import {useState} from "react";

function MyApp() {
    const [state, setState] = useState({
        todos: [
            {id: '001', title: 'task1', done: true},
            {id: '002', title: 'task2', done: false},
        ]
    });

    // 添加任务的方法
    function addTodos(obj) {
        const newTodos = [obj, ...state.todos];
        setState({todos: newTodos});
    }

    // 勾选取消勾选
    function updateTodo(id, done) {
        const {todos} = state
        const newTodos = todos.map(e => {
            if (e.id === id) {
                return {...e, done}
            } else {
                return e
            }
        })
        setState({todos: newTodos})
    }

    function deleteTodo(id, done) {
        const {todos} = state
        const newTodos = todos.filter(e => {
            if (e.id !== id) return e
        })
        setState({todos: newTodos})
    }

    function checkAllTodo() {
        const { todos } = state;
        if (todos.length === 0) return; // 如果没有任务，直接返回
        const shouldCheckAll = !todos.every(todo => todo.done);
        const newTodos = todos.map(todo => ({
            ...todo,
            done: shouldCheckAll
        }));
        setState({ todos: newTodos });
    }

    function clearAllDone(){
        const { todos } = state
        const newTodos = todos.filter(e=>e.done === false)
        setState({ todos: newTodos })
    }

    return (
        <div className="todo-container">
            <div className="todo-wrap">
                <Header call={addTodos}/>
                <List list={state.todos} call={updateTodo} del={deleteTodo}/>
                <Footer todos={state.todos} checkAllTodo={checkAllTodo} clearAllDone={clearAllDone}/>
            </div>
        </div>
    );
}

export default MyApp;
