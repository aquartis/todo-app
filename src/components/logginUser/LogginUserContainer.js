import React from 'react';
import {connect} from 'react-redux';
import { LogginUser } from './LogginUser';
import {currentUserInput, selectUser} from '../../todo-actions/actions'

const mapStateToProps=(state)=>(
    {
        currentUserInput:state.todoData.currentUserInput
    }
)
const mapDispatchToProps=(dispatch)=>({
    submitUser:(e)=>dispatch(currentUserInput(e)),
    logUser:()=>dispatch(selectUser())
}
)
const LogginUserContainer=(props)=>{
    const {currentUserInput, submitUser}=props;
    const changeUserInput=(e)=>{
        let input=e.target;
        submitUser(input.value)
    }
    const logUser=()=>{
        props.logUser()
    }
const active=currentUserInput.trim()===''?true:false;
    return(
        <LogginUser currentUserInput={currentUserInput} onClick={logUser} onChangeUserInput={changeUserInput} active={active}/>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LogginUserContainer)

