import {SET_LOGS, SET_ACTIVE_VIEWS} from './actions';

const intialstate={
    allLogs:[],
    activeLogs:[],
    recruiter:{
        name:"Recruiter A"
    }
}

export const logreducer=(state=intialstate,action)=>{

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