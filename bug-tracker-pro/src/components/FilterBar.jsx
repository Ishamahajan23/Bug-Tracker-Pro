import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useReducer } from 'react'
import { setActiveViews } from '../redux/actions'

const initialFilter={
    severity:"",
    devId:"",
    start:"",
    end:"",
}

function filterReducer(state, action){
   return {...state, [action.name]: action.value}
}

export const FilterBar = () => {
   const [filterstate, dispatchFilter]=useReducer(filterReducer, initialFilter);
   const dispatch=useDispatch();
   const allLogs=useSelector((state)=>state.allLogs)

  const applyFilter=()=>{
    let filtered=[...allLogs]
    const {severity, devId, start, end}=filterstate;
    if (severity) filtered=filtered.filter((log)=>log.severity===severity)
    if (devId) filtered=filtered.filter((log)=>log.devid===devId)
    if (start) filtered=filtered.filter((log)=>log.timestamp>=start)
    if (end) filtered=filtered.filter((log)=>log.timestamp<=end)

    dispatch(setActiveViews(filtered))
    
  }

  return (
    <div className='filter-bar'>

        <h1>Filter</h1>
        

        <div className='filter-inputs'>
        <select name="severity" id="" onChange={(e)=>dispatchFilter({name: e.target.name, value: e.target.value})}>
            <option value="low">LOW</option>
            <option value="medium">MEDIUM</option>
            <option value="high">HIGH</option>
            <option value="critical">CRITICAL</option>
        </select>
        <input type="text" name="devId" id="" placeholder='Developer ID' onChange={(e)=>dispatchFilter({name: e.target.name, value: e.target.value})} />
        <input type="text" name="start" id="" placeholder='Start' onChange={(e)=>dispatchFilter({name: e.target.name, value: e.target.value})} />

        <input type="text" name="end" id="" placeholder='End' onChange={(e)=>dispatchFilter({name: e.target.name, value: e.target.value})} />
        </div>
       
         
         <button onClick={applyFilter}>Filter</button>



    </div>
  )
}
