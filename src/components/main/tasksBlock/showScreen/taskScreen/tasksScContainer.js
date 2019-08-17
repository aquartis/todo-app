import {connect} from 'react-redux';
import { TaskScreen } from './TasksScreen';
import { VisibilityFilters, deleteTask, taskSucces, taskFail } from '../../../../../todo-actions/actions';

function getVisibleTodos(todos, filter){
    switch(filter){
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t=>t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t=>!t.completed);
        default:
            throw Error('Uncnown filter: '+filter)
    }
}

const mapStateToProps=state=>({
   data:getVisibleTodos(state.todoData.allUsers[state.todoData.currentUser].tasks, state.visibilityFilter)
})
const mapDispatchToProps=(dispatch)=>({
    deleteTask:(id)=>dispatch(deleteTask(id)),
    succes:(id)=>dispatch(taskSucces(id)),
    fail:(id)=>dispatch(taskFail(id))
})
const TaskScreenContainer= connect(mapStateToProps, mapDispatchToProps)(TaskScreen)
export default TaskScreenContainer;