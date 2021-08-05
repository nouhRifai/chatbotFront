/* eslint-disable prettier/prettier */

const reducer = (state = {intentName:"", intentDisplayName:""}, action) => {
    switch (action.type) {
        case "setIntent":
            state = action.payload;
            return state;
        default : 
            return state;

    }
};

export default reducer;