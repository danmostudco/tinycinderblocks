export function addCog() {
    return {
        type: "ADD_COG"
    }
}

export function removeCog(i) {
    return {
        type: "REMOVE_COG",
        i
    }
}

export function addSprocket() {
    return {
        type: "ADD_SPROCKET"
    }
}

export function removeSprocket(i) {
    return {
        type: "REMOVE_SPROCKET",
        i
    }
}