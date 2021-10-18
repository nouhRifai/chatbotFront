/* eslint-disable prettier/prettier */

const reducer = (state = [], action) => {
    switch (action.type) {
        case "setResponse":
            state = action.payload;
            return state;
        case "addResponse":
            state.push(action.payload)
            return state;
        case "deleteResponse":
            return state.slice(0,action.payload).concat(state.slice(action.payload+1,state.length));
        default : 
            return state;

    }
};

export default reducer;