const INITIAL_STATE = [];
export default (state=INITIAL_STATE, action) => {
	switch(action.type){
		case 'ADD_TODO':
			if(action.payload !== ""){
				return [...state, { id: `todo_${state.length + 1}`, task: action.payload, completed: false }]
			}
			else{
				alert('cant be empty')
				return state
			}
						
		case 'DELETE_TODO':
			return state.filter(todo => todo.id !== action.payload)
		case 'COMPLETE_TODO':
			return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
		default:
			return state
	}
}
