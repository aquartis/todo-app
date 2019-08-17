export const SELECT_USER='SELECT_USER';
export const CURRENT_USER_INPUT='CURRENT_USER_INPUT';
export const VisibilityFilters={
    SHOW_ALL:'SHOW_ALL',
    SHOW_COMPLETED:'SHOW_COMPLETED',
    SHOW_ACTIVE:'SHOW_ACTIVE'
}
export const PRIORITY_TYPES={
    CRITICAL:'CRITICAL',
    HIGHT:'HIGHT',
    MEDIUM:'MEDIUM',
    LOW:'LOW'
}
export const ADD_USER='ADD_USER';
export const SET_VISIBILITY_FILTER='SET_VISIBILITY_FILTER';
export const ALL_USERS='ALL_USERS';
export const ADD_TASK='ADD_TASK';
export const CHANGE_TITLE='CHANGE_TITLE'
export const CHANGE_TEXT='CHANGE_TEXT';
export const CHANGE_SELECT='CHANGE_SELECT';
export const DELETE_TASK='DELETE_TASK';
export const TASK_SUCCES='TASK_SUCCES';
export const TASK_FAIL='TASK_FAIL';
export const GET_TASKS='GET_TASKS';
export const CHANGE_USER='CHANGE_USER';



export const setVisibilityFilter=(filter)=>(
    {
        type:SET_VISIBILITY_FILTER,
        filter
    }
)

export const currentUserInput=(currentUserInput)=>{
    return{
        type:CURRENT_USER_INPUT,
        currentUserInput
    }
}

export const selectUser=()=>{
    return{
        type:SELECT_USER
    }
}

export const AllUsers=()=>{
    return{
        type:ALL_USERS
    }
}
export const addNewUser=(user)=>{
    return{
        type:ADD_USER,
        user
    }
}

export const addTask=()=>{
    return{
        type:ADD_TASK,
    }
}
export const changeTitle=(text)=>{
    return{
        type:CHANGE_TITLE,
        text
    }
}
export const changeText=(text)=>{
    return{
        type:CHANGE_TEXT,
        text
    }
}
export const changeSelect=(option)=>{
    return{
        type:CHANGE_SELECT,
        option
    }
}

export const deleteTask=(id)=>({
    type:DELETE_TASK,
    id
})

export const taskSucces=(id)=>({
    type:TASK_SUCCES,
    id
})

export const taskFail=(id)=>({
    type:TASK_FAIL,
    id
})

export const getTasks=()=>({
    type:GET_TASKS
})

export const changeUser=()=>({
    type:CHANGE_USER
})