import { useRef, useState, useEffect } from "react";
import store from "./redux/store.js";
import { createIncrementAction, createDecrementAction } from "./redux/count_action.js";

function MyApp() {
    const selectNumRef = useRef(null);
    const [count, setCount] = useState(store.getState()); // 使用本地状态存储 Redux 状态

    useEffect(() => {
        // 订阅 store 的变化
        const unsubscribe = store.subscribe(() => {
            setCount(store.getState()); // 更新本地状态
        });
        return () => {
            unsubscribe(); // 组件卸载时取消订阅
        };
    }, []);

    function increment() {
        const value = parseInt(selectNumRef.current.value);

        store.dispatch(createIncrementAction(value));
    }

    function decrement() {
        const value = parseInt(selectNumRef.current.value);
        store.dispatch(createDecrementAction(value));
    }

    function incrementIfOdd() {
        const value = parseInt(selectNumRef.current.value);
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(value));
        }
    }

    function incrementAsync() {
        const value = parseInt(selectNumRef.current.value);
        setTimeout(() => {
            store.dispatch(createIncrementAction(value));
        }, 1500);
    }

    return (
        <>
            <h1>当前求和为: {count}</h1>
            <select ref={selectNumRef}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;&nbsp;
            <button onClick={increment}>+</button>&nbsp;
            <button onClick={decrement}>-</button>&nbsp;
            <button onClick={incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
            <button onClick={incrementAsync}>异步加</button>
        </>
    );
}

export default MyApp;
