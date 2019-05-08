import React from 'react';
import './App.css';
import {TaskList, AddTodo} from './components/index'
import {Provider} from 'react-redux'
import {createStore,  compose, applyMiddleware} from 'redux'
import reducers from './reducers'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers())
function App() {
  return (
    <Provider store={store}>
      <h1>TODO</h1>
      <AddTodo />
      <TaskList />
    </Provider>
  );
}

export default App;
