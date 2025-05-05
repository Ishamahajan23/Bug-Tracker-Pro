import {SET_LOGS, SET_ACTIVE_VIEWS} from './actions';

const initialState={
    allLogs:[],
    activeLogs:[],
    recruiter:{
        name:"Recruiter A"
    }
}

export const logreducer=(state=initialState,action)=>{

    switch(action.type){
        case "SET_LOGS":
            return{
                ...state, allLogs:action.payload ,activeLogs: action.payload
            };
        case "SET_ACTIVE_VIEWS":
            return{
                ...state,activeLogs:action.payload

            };

        default:
            return state
    }
}