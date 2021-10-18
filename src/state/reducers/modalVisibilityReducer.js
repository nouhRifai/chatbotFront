/* eslint-disable prettier/prettier */

const reducer = (state = false, action) => {
    switch (action.type) {
        case "setModalVisibility":
            state = action.payload;
            return state;
        default : 
            return state;

    }
};

export default reducer;