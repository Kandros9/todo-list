import React, {useState} from 'react';
import styles from './App.module.css';
import {Button, Checkbox, Input} from "antd";
import 'antd/dist/antd.css';

function App() {
    // const todos = [3, 4, 5, 6, 7, 8, 9, 10];
    const [todos, setTodos] = useState([{id: 1, value: "buy milk", resolved: false}]);
    // const input = useRef(null);
    const [input, setInput] = useState("");
    const [unchecked, setChecked] = useState(false);
    /*console.log(input.value);
    setTimeout(() => {console.log(input.value);}, 1000);*/

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.inputContainer}>
                    <Input value={input} onChange={(event) => {
                        setInput(event.target.value)
                    }}/>
                    <Button
                        type="primary"
                        className={styles.actionButton}
                        onClick={addTodo}>+ Add</Button>
                </div>
                <Checkbox checked={unchecked} onClick={() => setChecked(!unchecked)}/> Unchecked only
                {todos.map((value) => {
                        if (!unchecked || unchecked && !value.resolved)
                            return <TodoItem key={value.id} id={value.id} value={value.value} resolved={value.resolved}
                                             toggle={toggle} deleteTodo={deleteTodo} editTodo={editTodo}/>
                    }
                )}
            </div>
        </div>
    );

    function addTodo() {
        const newTodos = [...todos, {
            id: todos.length === 0 ? 0 : todos[todos.length - 1].id + 1,
            value: input,
            resolved: false
        }];
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

    function deleteTodo(id) {
        const index = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }
    function editTodo(id, input) {
        const index = todos.findIndex(todo => todo.id === id);
        let todo = todos[index];
        todo = {...todo, value: input};
        const newTodos = [...todos];
        newTodos[index] = todo;
        setTodos(newTodos);
    }
}

function TodoItem(props) {
    const {id, value, toggle, resolved, deleteTodo, editTodo} = props;
    const [input, setInput] = useState("");

    function showInput() {
        if (!input){
            return (
                <div>
                    <table><tr>
                        <td>
                            <div className={styles.listContainer} onClick={() => toggle(id)}>
                                <div className={styles.listItem}>
                                    <Checkbox checked={resolved}/>
                                    <h2 className={styles.todoTitle}>{value}</h2>
                                </div>
                            </div>
                        </td>
                        <td>
                            <Button
                                type="danger"
                                onClick={() => deleteTodo(id)}>Delete</Button></td>
                        <td>
                            <Button
                                type="success"
                                onClick={() => setInput(value)}>Edit</Button>
                        </td>
                    </tr></table>
                </div>);
        } else {
            return (
                <div>
                    <table><tr>
                        <td>
                            <div className={styles.listContainer}>
                                <div className={styles.listItem}>
                                <Input value={input} onChange={(event) => {
                                    setInput(event.target.value)
                                }}/>
                            </div>
                            </div>
                        </td>
                        <td>
                            <Button
                                type="primary"
                                onClick={() => {
                                    editTodo(id, input);
                                    setInput("")
                                }
                                }>OK</Button></td>
                    </tr></table>
                </div>);
        }
    }

    return (
        <div>
            {showInput()}
        </div>
    );

}

export default App;
