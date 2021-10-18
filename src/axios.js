/* eslint-disable prettier/prettier */
import axios from 'axios';

var URL_BACKEND = "http://localhost:3000/";
// Create Function to handle requests from the backend
const callToBackend = async (ENDPOINT, METHOD, PARAMS) => {
    const options = {
        url: `${URL_BACKEND}${ENDPOINT}`,
        method: METHOD,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        },
        };
    if (PARAMS && Object.keys(PARAMS).length === 0 && PARAMS.constructor === Object){
        
    }
    else{
        options.params = {};
        options.params = PARAMS;
    }

    const response = await axios(options);
    return response.data;
}


export default callToBackend
