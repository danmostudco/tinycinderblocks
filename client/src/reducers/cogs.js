const initialState = [];

function cogs(state = initialState, action) {
    switch(action.type) {
        case "ADD_COG":
        return [...state, "newCog"]

        case "REMOVE_COG":
        return [
            ...state.slice(0, action.i),
            ...state.slice(action.i + 1)
        ]

        default:
        return state;
    }
}

export default cogs;