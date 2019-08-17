import React from 'react';
import styles from './form-block-styles.module.scss';
import UserInfoContainer from './userInfo/userInfoContainer';
import {Route} from 'react-router-dom'
import { AddFormContainer } from './addForm/addFormContainer';

export const FormBlock=()=>(
    <div className={styles.form_block}>
        <UserInfoContainer/>
        <Route path='/main/add_task' render={()=><AddFormContainer/>}/>
    </div>
)