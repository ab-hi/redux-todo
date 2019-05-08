const ADD_TODO = (todo) =>{
	return({
		type : 'ADD_TODO',
		payload: todo
	})
}

const DELETE_TODO = (id) =>{
	return({
		type : 'DELETE_TODO',
		payload: id
	})
}

const COMPLETE_TODO = (id) =>{
	return({
		type : 'COMPLETE_TODO',
		payload: id
	})
}

export {ADD_TODO, DELETE_TODO, COMPLETE_TODO}