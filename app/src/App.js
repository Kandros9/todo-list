import React, { useState} from 'react';
import styles from './App.module.css';
import {Button, Checkbox, Input} from "antd";
import 'antd/dist/antd.css';

function App() {
    // const todos = [3, 4, 5, 6, 7, 8, 9, 10];
    const [todos, setTodos] = useState([{id: 1, value: "buy milk", resolved: false}]);
    // const input = useRef(null);
    const [input, setInput] = useState("");
    /*console.log(input.value);
    setTimeout(() => {console.log(input.value);}, 1000);*/

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.inputContainer}>
                    <Input value={input} onChange={(event) => {setInput(event.target.value)}}/>
                    <Button
                        type="primary"
                        className={styles.actionButton}
                        onClick={addTodo}>+ Add</Button>
                </div>
                {todos.map((value) => <TodoItem key={value.id} id={value.id} value={value.value} resolved={value.resolved} toggle={toggle}/>)}
            </div>
        </div>
    );
    function addTodo() {
        const newTodos = [...todos, {
            id: todos.length === 0 ? 0 : todos[todos.length - 1] .id + 1,
            value: input,
            resolved: false}];
        setTodos(newTodos);
        setInput("");
    }
    function toggle(id) {
        const index = todos.findIndex(todo => todo.id === id);
        let todo = todos[index];
        todo = {...todo, resolved: !todo.resolved};
        const newTodos = [...todos];
        newTodos[index] = todo;
        setTodos(newTodos);
    }
}

function TodoItem(props) {
    const {id, value, toggle, resolved} = props;

    return (
        <div className={styles.listContainer} onClick={() => toggle(id)}>
            <div className={styles.listItem}>
                <Checkbox checked={resolved}/>
                <h2 className={styles.todoTitle}>{value}</h2>
            </div>
        </div>
    );

}

export default App;
