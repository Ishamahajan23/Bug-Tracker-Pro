export const SET_LOGS="SET_LOGS";
export const SET_ACTIVE_VIEWS="SET_ACTIVE_VIEWS";

export const setLogs=(logs)=>({
    type: SET_LOGS,
    payload:logs,
});

export const setActiveViews=(logs)=>({
    type:SET_ACTIVE_VIEWS,
    payload:logs,
});
