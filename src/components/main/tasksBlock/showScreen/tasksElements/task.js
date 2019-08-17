import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown, faTimes} from '@fortawesome/free-solid-svg-icons';
import styles from '../../../mainScreen.module.scss';
import PropTypes from 'prop-types';

export const Task=({id, title, priority, completed, text, deleteTask, succes, fail, status})=>(
    <div className={`${styles.taskCard} ${styles[priority.toLowerCase()]} .flex-column`}>
        <div className={styles.remove_button} onClick={()=>{deleteTask(id)}}>
        <FontAwesomeIcon icon={faTimes}/>
        </div>
        <p>Priority: <span>{priority}</span></p>
        <p>Title: <span>{title}</span></p>
        <p>{text}</p>
        {completed?<div>
            {status==='succes'?<p>Nice work.You done this task</p>:
        <p>Not good...You fail, try better next time.</p>}
        </div>:
            <div className={styles.result_buttons}>
            <span className={styles.status_btns} style={{padding:'0 .5rem'}} onClick={()=>succes(id)}>
                 <FontAwesomeIcon icon={faThumbsUp}/>  </span>
            <span className={styles.status_btns} onClick={()=>fail(id)}>
                <FontAwesomeIcon icon={faThumbsDown}/>
            </span>
</div> }
        
    </div>
)

Task.propsTypes={
    title:PropTypes.string.isRequired,
    priority:PropTypes.string.isRequired,
    completed:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired
}