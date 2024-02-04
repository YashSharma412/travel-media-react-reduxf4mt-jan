import { POST_API_STARTED, POST_API_SUCCESS, POST_API_FAILURE } from "./actionTypes";

export const postApiStarted = ()=>{
    return{
        type: POST_API_STARTED
    }
}

export const postApiSuccess = (data)=>{
    return{
        type: POST_API_SUCCESS,
        payload: data
    }
}

export const postApiFailure = (error)=>{
    return{
        type: POST_API_FAILURE,
        payload: error
    }
}

// proxxy action => combines all the three actions above and sends it to store.

function postApiRequest(){
    
}