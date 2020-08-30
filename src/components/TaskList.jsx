import React, {useContext} from 'react';
import {TaskListContext} from '../context';
import Task from './Task';

const TaskList = () => {
    const {tasks} = useContext(TaskListContext);
    return(
        <div>
            {tasks.length ? (
                <ul className="list">
                    {tasks.map(task => <Task key={task.id} title={task.title} id={task.id} />)}
                </ul>
            ) : (
                <div className="no-tasks" >No Tasks</div>
            )}
        </div>
    )
}

export default TaskList;