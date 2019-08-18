import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import styles from './TodoApp.module.scss';
import LogginUserContainer from './components/logginUser/LogginUserContainer';
import  {MainScreen}  from './components/main/mainScreen/MainScreenComponent';
import {connect} from 'react-redux';
import { getTasks } from './todo-actions/actions';

const mapDispatchToProps=dispatch=>({
  getLocalState:()=>dispatch(getTasks())
})

class TodoApp extends React.Component {
componentDidMount(){
    this.props.getLocalState();
}
render(){
  return (
    <BrowserRouter basename='https://aquartis.github.io/todo-app'>
      <div className={styles.loggin_form}>
        <Route exact path='/' render={()=><LogginUserContainer/>}/>
        <Route path='/main' render={()=><MainScreen/>}/>
      </div>
    </BrowserRouter>
  );
  }
}
export default connect(null, mapDispatchToProps)(TodoApp);