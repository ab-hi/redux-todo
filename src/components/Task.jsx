import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { DELETE_TODO } from "../actions";

const Task = props => {
	return (
		<p key={props.todo.id}>
			{props.todo.task}{" "}
			<button onClick={() => props.DELETE_TODO(props.todo.id)}>
				Delete
			</button>
		</p>
	);
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ DELETE_TODO }, dispatch);
}

export default connect(
	() => ({}),
	mapDispatchToProps
)(Task);