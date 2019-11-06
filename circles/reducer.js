const initialState = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // ACTION: Add a random circle
    if (type === "ADD_CIRCLE") {
        const circle = {
            radius: action.radius,
            color: action.color
        }
        return ([...state, circle]);
     
    }

    return state;
}

function createCircle(){
    let num = Math.random() * 10 
    let letters = "0123456789ABCDEF"; 
    let hex = "#";
    for (var i = 0; i < 6; i++) {
        hex += letters[(Math.floor(Math.random() * 16))]; 
    }
    dispatch({
        type: "ADD_CIRCLE",
        radius: num,
        color: hex
    })
}