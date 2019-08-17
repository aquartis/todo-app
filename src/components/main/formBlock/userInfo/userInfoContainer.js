import {connect} from 'react-redux';
import { UserInfo } from './userInfoComponent';

const getStatistic=(tasks)=>{
    const all=tasks.length;
    const completed=tasks.filter(t=>t.completed).length;
    const active=tasks.filter(t=>!t.completed).length;
    return {
        all,
        completed,
        active
    }
}

const mapStateToProps=state=>({
    userName:state.todoData.currentUser,
    tasksStatistic:getStatistic(state.todoData.allUsers[state.todoData.currentUser].tasks)
})
const UserInfoContainer=connect(mapStateToProps)(UserInfo)
export default UserInfoContainer;