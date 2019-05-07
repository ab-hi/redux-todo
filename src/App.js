import React from 'react';
import './App.css';
import {TaskList, AddTodo} from './components/index'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'

let store = createStore(reducers)

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
