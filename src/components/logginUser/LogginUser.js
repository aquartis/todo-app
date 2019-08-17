import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './loginStyles.module.scss';

export const LogginUser=(props)=>(
    <div className={styles.login_screen}>
        <div className={`${styles.login_form} flex-column`}>
        <h2>Hello new user!</h2>
        <label htmlFor='user-name' className={styles.user_label}>
            <input name='user-name' placeholder='Enter username or nickname' onChange={(e)=>props.onChangeUserInput(e)} value={props.currentUserInput}/>

        </label>
        <div>
                <NavLink to='main'>
                    <button className={styles.login_button} onClick={props.onClick} disabled={props.active}>
                        Let's go
                    </button>
                </NavLink>
            </div>
        </div>
    </div>
)