import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { DELETE_TODO, COMPLETE_TODO } from "../actions";

const Task = props => {
	return (
		<p key={props.todo.id} className={props.todo.completed ? 'complete' : ''}>
			{props.todo.task}{" "}
			<button onClick={() => props.DELETE_TODO(props.todo.id)}>
				Delete
			</button>
			<button onClick={() => props.COMPLETE_TODO(props.todo.id)}>
				{props.todo.completed ? 'Mark Incomplete' : 'Mark Complete' }
			</button>
		</p>
	);
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ DELETE_TODO, COMPLETE_TODO }, dispatch);
}

export default connect(
	() => ({}),
	mapDispatchToProps
)(Task);