import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../form-block-styles.module.scss';

export const UserInfo=({userName, tasksStatistic})=>{
    return(
        <div className={`${styles.form_user_block} flex-column`}>
            <div className={styles.form_user_statistics}>
                <h3>User: <span>{userName}</span></h3>
                <p>Number of tasks: <span>{tasksStatistic.all}</span></p>
                <p>Completed: <span>{tasksStatistic.completed}</span></p>
                <p>Active: <span>{tasksStatistic.active}</span></p>
            </div>
            <div className={`${styles.form_user_button} flex-column`}>
                <NavLink  style={{textDecoration:'none',  marginBottom:'1rem'}} to='/'>
                    <span className={styles.buttons}>Change user</span>
                </NavLink>
                <NavLink style={{textDecoration:'none'}}  to='/main/add_task'>
                    <span className={styles.buttons}>
                        Add task
                    </span>
                </NavLink>
            </div>
        </div>
    )
}

UserInfo.propTypes={
    userName:PropTypes.string.isRequired,
    tasksStatistic:PropTypes.shape({
        all:PropTypes.number.isRequired,
        completed:PropTypes.number.isRequired,
        active:PropTypes.number.isRequired
    }).isRequired
}