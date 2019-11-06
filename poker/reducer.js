const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    }
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)
    if (type === "RANDOMIZE_CARD"){
        let card = {
            value: action.val,
            suit: action.suit

        }
        return [...state, card]
        
    }
    return state;
}

function getCard() {
    let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "K", "Q"]
    let suits = ["S", "C", "D", "H"]
    let randomVal = values[Math.floor(Math.random()*values.length)];
    let randomSuit = suits[Math.floor(Math.random()*suits.length)];
    dispatch({
        type: "RANDOMIZE_CARD",
        val: randomVal,
        suit: randomSuit
    })
    
}