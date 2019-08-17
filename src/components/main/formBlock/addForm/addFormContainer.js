import React from 'react';
import {connect} from 'react-redux';
import { PRIORITY_TYPES, changeSelect, changeTitle, changeText, addTask } from '../../../../todo-actions/actions';
import { AddForm } from './addFormComponent';

const selectValues=Object.values(PRIORITY_TYPES).map((el,index)=><option key={index} value={el}>{el}</option>);


const mapStateToProps=(state)=>(
    {
        InputsValues:state.todoData.taskInputs,
        SelectValues:selectValues
    }
)

const mapDispatchToProps=(dispatch)=>(
    {
        InputsFunctions:{
            selectOnChange:(e)=>dispatch(changeSelect(e.target.value)),
            titleOnChange:(e)=>dispatch(changeTitle(e.target.value)),
            textOnChange:(e)=>dispatch(changeText(e.target.value)),
            addTask:()=>dispatch(addTask())
        }
    }
)
export const AddFormContainer=connect(mapStateToProps, mapDispatchToProps)(AddForm);
