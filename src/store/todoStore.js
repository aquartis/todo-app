import {createStore} from 'redux';
import {combineReducers} from 'redux';
import { todoData,visibilityFilter} from '../todo-reducers/reducers';


const rootReducer=combineReducers({
    todoData,
    visibilityFilter,
})
const store=createStore(rootReducer);
export default store;