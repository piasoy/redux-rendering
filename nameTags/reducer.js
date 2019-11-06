const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // Add a Name Tag
    if (type === "RENDER_NAMETAG"){
        return [...state, action.name]
    }
    return state;
}

function getNameInput(){
    let name = document.getElementById("name").value
        console.log(name)
        dispatch({
          type: "RENDER_NAMETAG",
          name: name
        });
     
}