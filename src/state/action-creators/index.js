/* eslint-disable prettier/prettier */

export const addQuestion = (question) => {
    return (dispatch) => {
        dispatch({
            type:'addQuestion',
            payload:question,
        })
    }
};

export const deleteQuestion = (index) => {
    return (dispatch) => {
        dispatch({
            type: 'deleteQuestion',
            payload: index,
        })
    }
};

export const addResponse = (response) => {
    return (dispatch) => {
        dispatch({
            type:'addResponse',
            payload:response,
        })
    }
};

export const deleteResponse = (index) => {
    return (dispatch) => {
        dispatch({
            type: 'deleteResponse',
            payload: index,
        })
    }
};

export const setIntetnsList = (intentsList) => {
    return (dispatch) => {
        dispatch({
            type: 'setIntentsList',
            payload: intentsList,
        })
    }
};


export const setQuestion = (questions) => {
    return (dispatch) => {
        dispatch({
            type: 'setQuestion',
            payload: questions,
        })
    }
};


export const setResponse = (responses) => {
    return (dispatch) => {
        dispatch({
            type: 'setResponse',
            payload: responses,
        })
    }
};

export const setIntent = (intent) => {
    return (dispatch) => {
        dispatch({
            type: 'setIntent',
            payload: intent,
        })
    }
};

export const setModalVisibility = (modalVisibility) => {
    return (dispatch) => {
        dispatch({
            type: 'setModalVisibility',
            payload: modalVisibility,
        })
    }
};