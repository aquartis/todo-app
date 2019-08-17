import React from 'react';
import { Task } from '../tasksElements/task';
import styles from '../../../mainScreen.module.scss';

export const TaskScreen=({data, deleteTask, succes, fail})=>{
    const tasks=data.map((task)=>{
        return(
            <Task {...task} deleteTask={deleteTask} succes={succes} fail={fail}/>
        ) 
    })
    return <div className={`${styles.task_box} flex-row` }>{tasks}</div>
}