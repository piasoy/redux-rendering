const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const randomizeCardButton1 = document.getElementById('card1Button')
randomizeCardButton1.addEventListener("click", e => getCard())

const randomizeCardButton2 = document.getElementById('card2Button')
randomizeCardButton2.addEventListener("click", e => getCard())