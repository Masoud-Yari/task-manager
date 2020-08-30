import React, {useState, createContext, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

export const TaskListContext = createContext();

export const TaskListProvider = (props) => {

    const initialState =  JSON.parse(localStorage.getItem('tasks')) || [];

    const [tasks, setTasks] = useState(initialState);

    const [editItem, setEditItem] = useState(null);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])

    const addTask = title => {
        setTasks([...tasks, {
            id: uuidv4(),
            title
        }]);
    }

    const removeTask = id => {
        setTasks(tasks.filter(task => id !== task.id));
    }

    const clearAll = () => {
        setTasks([]);
    }

    const findItem = id => {
        const item = tasks.find(task => task.id === id);
        
        setEditItem(item);
    }

    const editTask = (id, title) => {
        const newTask = tasks.map(task => task.id === id ? {id, title} : task);

        setTasks(newTask);

        setEditItem(null);
    }

    return(
        <TaskListContext.Provider value={{tasks, addTask,removeTask, clearAll, findItem, editItem, editTask}}>
            {props.children}
        </TaskListContext.Provider>
    )
}