const INITIAL_STATE = [];
export default (state=INITIAL_STATE, action) => {
	switch(action.type){
		case 'ADD_TODO':
			return [...state, { id: `todo_${state.length + 1}`, task: action.payload }]			
		case 'DELETE_TODO':
			return state.filter(todo => todo.id !== action.payload)

		default:
			return state
	}
}
