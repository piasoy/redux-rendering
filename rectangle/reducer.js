const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // ACTION 1 - Increment height by 10
    if (type === "INCREMENT_HEIGHT"){
        return {...state,
            height: state.height + 10
        }
    }
    // ACTION 2 - Increment width by 10
    else if (type === "INCREMENT_WIDTH"){
        return {...state,
            width: state.width + 10
        }
    }

    // ACTION 3 - Change the color
    else if (type === "CHANGE_COLOR"){
        return {...state,
            color: action.color
        }
    }
    return state;
}
