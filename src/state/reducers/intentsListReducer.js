/* eslint-disable prettier/prettier */

const reducer = (state = [], action) => {
    switch (action.type) {
        case "setIntentsList":
            state = action.payload;
            return state;
        default : 
            return state;

    }
};

export default reducer;