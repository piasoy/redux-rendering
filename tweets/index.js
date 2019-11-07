const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const orderLikesBtn = document.getElementById("sortLikes")
orderLikesBtn.addEventListener('click', e => dispatch({ type: "SORT_LIKES" }))

const orderRetweetsBtn = document.getElementById("sortRetweets")
orderRetweetsBtn.addEventListener('click', e => dispatch({ type: "SORT_RETWEETS" }))

const orderRepliesBtn = document.getElementById("sortReplies")
orderRepliesBtn.addEventListener('click', e => dispatch({ type: "SORT_REPLIES" }))