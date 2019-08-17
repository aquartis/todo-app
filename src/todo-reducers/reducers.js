import { SELECT_USER, CURRENT_USER_INPUT, VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TASK, PRIORITY_TYPES, CHANGE_SELECT, CHANGE_TITLE, CHANGE_TEXT, DELETE_TASK, TASK_SUCCES, TASK_FAIL, GET_TASKS, CHANGE_USER } from "../todo-actions/actions";

const taskInputsDefault={
    priority:PRIORITY_TYPES.MEDIUM,
    title:'',
    text:''
}

let defaultState={
    currentUser:'anonim',
    currentUserInput:'anonim',
    allUsers:{
        anonim:{
            name:'anonim',
            tasks:[ 
                {
                    id:'Not1',
                    title:'Some task',
                    priority:'CRITICAL',
                    completed:false,
                    text:'Notice that the faCoffee icon is imported from @fortawesome/free-solid-svg-icons as an object and then provided to the icon prop as an object.Explicitly importing icons like this allows us to subset Font Awesom "s thousands of icons to include only those you use in your final bundled file.'
                },
                {
                    id:'Tex2',
                    title:'Some task 1',
                    priority:'HIGHT',
                    completed:false,
                    text:'Text of what need to do.'
                },
                {
                    id:'Tex3',
                    title:'Some task 2',
                    priority:'MEDIUM',
                    completed:true,
                    text:'Text of what need to do.'
                },
                {
                    id:'Tex4',
                    title:'Some task 2',
                    priority:'LOW',
                    completed:false,
                    text:'Text of what need to do.'
                }
            ]
        }
    },
    taskInputs:taskInputsDefault
}



export const visibilityFilter=(state=VisibilityFilters.SHOW_ALL, action)=>{
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}



export function todoData(state=defaultState, action){
    switch(action.type){
        case GET_TASKS:
            let tasks=JSON.parse(localStorage.getItem('tasks'));
            return Object.assign({}, state,  {allUsers:tasks});
        case CHANGE_USER:
                localStorage.setItem('tasks', JSON.stringify(state.allUsers));
                return state;
        case SELECT_USER:
            let res=Object.assign({},state, {currentUser:state.currentUserInput}, {allUsers:addNewUser(state.allUsers, state.currentUserInput)});
            localStorage.setItem('tasks', JSON.stringify(res.allUsers));
            return res;
        case CURRENT_USER_INPUT:
            return Object.assign({}, state, {currentUserInput:action.currentUserInput});
        case ADD_TASK:
                let newObj=Object.assign({}, state);
                newObj.allUsers[state.currentUser].tasks=addTask(newObj.allUsers[state.currentUser].tasks, state.taskInputs);
                localStorage.setItem('tasks', JSON.stringify(newObj.allUsers));
                return Object.assign({}, state, newObj, {taskInputs:taskInputs(state.taskInputs, action)});
        case DELETE_TASK:
                let result=Object.assign({}, state, state.allUsers[state.currentUser].tasks=delTask(state.allUsers[state.currentUser].tasks, action.id));
                localStorage.setItem('tasks', JSON.stringify(result.allUsers));
                return result;
        case TASK_SUCCES:
        case TASK_FAIL:
            return   Object.assign({}, state, state.allUsers[state.currentUser].tasks=taskStatus(state.allUsers[state.currentUser].tasks, action));             
        case CHANGE_SELECT:
        case CHANGE_TITLE:
        case CHANGE_TEXT:
            return Object.assign({}, state, {taskInputs:taskInputs(state.taskInputs, action)})    
        default:
                return state;
    }
}

export function taskInputs(state=taskInputsDefault, action){
    switch(action.type){
        case CHANGE_SELECT:
            return Object.assign({}, state, {priority:action.option});
        case CHANGE_TITLE:
            return Object.assign({}, state, {title:action.text});
        case CHANGE_TEXT:
            return Object.assign({}, state, {text:action.text});
        case ADD_TASK:
            return Object.assign({}, state, taskInputsDefault)
        default:
            return state;
    }
}

const addTask=(state, task)=>{
    let newTask=[{
        id:task.text.substring(0,3)+state.length+1,
        title:task.title,
        priority:task.priority,
        completed:false,
        text:task.text
    }];
    return state.concat(newTask);
}
const delTask=(state, num)=>{
    let result=state.filter(el=>el.id!==num);
    return result;
}

const taskStatus=(state,action)=>{
    switch(action.type){
        case TASK_SUCCES:
            return state.map(el=>{
                if(el.id===action.id){
                    el.completed=true;
                    el.status='succes';
                }
                return el;
            });
        case TASK_FAIL:
            return state.map(el=>{
                if(el.id===action.id){
                    el.completed=true;
                    el.status='fail';
                }
                return el;
            });
        default:
            return state;
    }
}

const addNewUser=(state, name)=>{
    const newUser={
        [name]:{
            name:name,
            tasks:[]
        }
    }
    return Object.assign({}, newUser, state)
}