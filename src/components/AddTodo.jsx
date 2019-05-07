import React from 'react'
import {bindActionCreators} from 'redux';
import {ADD_TODO} from '../actions';
import {connect} from 'react-redux';

class AddTodo extends React.Component{
	constructor(props){
		super(props)

		this.state={
			value : ''
		}
	}

	handleChange = (e) => {
		this.setState({value: e.target.value})
	}

	render(){
		return(
				<React.Fragment>
					<textarea onChange={this.handleChange} value={this.state.value}/>
					<button onClick={() => this.props.ADD_TODO(this.state.value)}>Add</button>
				</React.Fragment>
			)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ADD_TODO}, dispatch)
}

export default connect(()=>({}), mapDispatchToProps)(AddTodo)