import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './formBlockStyles.module.scss';

export const AddForm=({SelectValues, InputsValues, InputsFunctions})=>{
    const buttonStatus=(InputsValues.title.trim()!=='' && InputsValues.text.trim()!=='');
    return (
        <div className={`${styles.form_main} flex-column`}>
            <form className={`${styles.form_inputs} flex-column`}> 
            <label forhtml='priority'><span>Chose prioruty:</span> 
                <select name='priority' value={InputsValues.priority} onChange={InputsFunctions.selectOnChange}>
                    {SelectValues}
                </select>
            </label>
            <label forhtml='title_input'><span>Task title:</span>
                <input name='title_input' value={InputsValues.title} onChange={(e)=>InputsFunctions.titleOnChange(e)}/>
            </label>
            <label forhtml='text_input'><span>Task text: </span>
                <textarea value={InputsValues.text} onChange={InputsFunctions.textOnChange}/>
            </label>
        </form>
        <div className={`${styles.button_box} flex-column`}>
            <button className={styles.buttons} onClick={buttonStatus?()=>InputsFunctions.addTask():()=>alert('Fill tasks fields!')}>Add</button>
            <button className={styles.buttons}>
                <NavLink style={{textDecoration:'none'}} to='/main'><span className={styles.buttons}>Close</span></NavLink>
            </button>
        </div>
        </div>
        
    )
}

AddForm.propTypes={
    SelectValues:PropTypes.array.isRequired,
    InputsValues:PropTypes.shape({
        priority:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired
    }).isRequired
}