import React from 'react';
import styles from './App.module.css';
import {Button, Checkbox, Input} from "antd";
import 'antd/dist/antd.css';

function App() {
    const todos = [3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.inputContainer}>
                    <Input/>
                    <Button type="primary" className={styles.actionButton}>+ Add</Button>
                </div>
                {todos.map(() => <TodoItem/>)}
            </div>
        </div>
    );
}

function TodoItem() {
    return (
        <div className={styles.listContainer}>
            <div className={styles.listItem}>
                <Checkbox/>
                <h2 className={styles.todoTitle}>Buy milk</h2>
            </div>
        </div>
    );

}

export default App;
