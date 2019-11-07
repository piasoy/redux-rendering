const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const incrementHeightBtn = document.getElementById("height")
incrementHeightBtn.addEventListener('click', e => dispatch ({type:"INCREMENT_HEIGHT"}))

const incrementWidthBtn = document.getElementById("width")
incrementWidthBtn.addEventListener('click', e => dispatch ({type:"INCREMENT_WIDTH"}))

const redBtn = document.getElementById("red")
redBtn.addEventListener('click', e => dispatch ({type:"CHANGE_COLOR", color: "red"}))


const blueBtn = document.getElementById("blue")
blueBtn.addEventListener('click', e => dispatch ({type:"CHANGE_COLOR", color: "blue"}))
