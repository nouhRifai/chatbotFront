/* eslint-disable prettier/prettier */

const reducer = (state = {}, action) => {
    switch (action.type) {
        case "setIntent":
            state = action.payload;
            console.log(state);
            return state;
        default : 
            return state;

    }
};

export default reducer;