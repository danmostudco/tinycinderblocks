const initialState = [];

function sprockets(state = initialState, action) {
    switch(action.type) {
        case "ADD_SPROCKET":
        return [...state, "newSprocket"]

        case "REMOVE_SPROCKET":
        return [
            ...state.slice(0, action.i),
            ...state.slice(action.i + 1)
        ]

        default:
        return state;
    }
}

export default sprockets;