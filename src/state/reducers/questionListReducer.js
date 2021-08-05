/* eslint-disable prettier/prettier */

const reducer = (state = [], action) => {
    switch (action.type) {
        case "setQuestion":
            state = action.payload;
            return state;
        case "addQuestion":
            state.push(action.payload)
            return state;
        case "deleteQuestion":
            return state.slice(0,action.payload).concat(state.slice(action.payload+1,state.length));
        default : 
            return state;

    }
};

export default reducer;