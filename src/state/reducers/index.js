/* eslint-disable prettier/prettier */
import {combineReducers} from "redux";

import questionListReducer from "./questionListReducer";
import responseListReducer from "./responseListReducer";
import intentsListReducer from "./intentsListReducer";
import intentReducer from "./intentReducer";
import modalVisibilityReducer from './modalVisibilityReducer';

const reducers = combineReducers({
    questionList : questionListReducer,
    responseList : responseListReducer,
    intentsList : intentsListReducer,
    intent : intentReducer,
    modalVisibility : modalVisibilityReducer,
});

export default reducers;