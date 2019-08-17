import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import TodoApp from './TodoApp';
import {Provider} from 'react-redux';
import store from './store/todoStore';

const App=()=>(
    <Provider store={store}>
        <TodoApp/>
    </Provider>
)
window.store=store;
ReactDOM.render(<App/>, document.getElementById('root'));


serviceWorker.unregister();
