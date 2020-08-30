import React, {useState, useContext, useEffect} from 'react';
import {TaskListContext} from '../context';

const TaskForm = () => {

    const {addTask, clearAll, editItem, editTask} = useContext(TaskListContext);
    const [title, setTitle] = useState('');

    useEffect(() => {
        if(editItem){
            setTitle(editItem.title);
        }else{
            setTitle('');
        }
    }, [editItem])

    const handleChange = e => {
        setTitle(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(!editItem){
            addTask(title);
            setTitle('');
        }else{
            editTask(editItem.id, title);
        }
    }

    return(
        <form onSubmit={handleSubmit} className="form">
            <input onChange={handleChange} type="text" className="task-input" placeholder="Add Task..." value={title} required />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    {editItem ? 'Edit Task' : 'Add Task'}
                </button>
                <button onClick={clearAll} className="btn clear-btn">Clear</button>
            </div>
        </form>
    )
}

export default TaskForm;