import React from 'react';
import { FilterBlock } from './filterBlock/FilterBlockComponent';
import styles from '../mainScreen.module.scss';
import TaskScreenContainer from './showScreen/taskScreen/tasksScContainer';

export const TasksBlock=()=>(
    <div className={`${styles.tasks_block}` }>
        <FilterBlock/>
        <TaskScreenContainer/>
    </div>
    
)