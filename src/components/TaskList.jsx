import React from 'react';
import {connect} from 'react-redux'
import {Task} from './index'

class TaskList extends React.Component{
	render(){
		return(
				this.props.todos.length ?
					this.props.todos.map(todo => {
						return(
								<Task todo={todo} key={todo.id}/>
							)
					})
				 : <p>No Todos</p>)
				
			
	}
}

function mapStateToProps(state){
	return ({todos: state.todos})
}

export default connect(mapStateToProps)(TaskList)