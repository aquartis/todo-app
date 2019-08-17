import React from 'react';
import styles from '../mainScreen.module.scss';
import { TasksBlock } from '../tasksBlock/tasksBlockComponent';
import { FormBlock } from '../formBlock/formBlock';




 export const MainScreen =()=>{
        return(
            <div className={`${styles.main} flex-row`}>
             <TasksBlock/>
             <FormBlock/>
             </div>
        )
    }
